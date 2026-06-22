#!/usr/bin/env bash
#
# Серверный деплой kts-landing-page.
# Запускается на сервере: вручную (`make deploy`) или из GitHub Actions по SSH.
#
# Шаги: подтянуть свежий main -> установить зависимости -> собрать frontend ->
# перезапустить процессы через pm2 -> проверить /health.
#
# backend/.env НЕ отслеживается git (см. .gitignore), поэтому `git reset --hard`
# его не трогает — рабочие секреты на сервере сохраняются.

set -euo pipefail

# Перейти в корень репозитория (этот скрипт лежит в <repo>/scripts/).
cd "$(dirname "$0")/.."
REPO_ROOT="$(pwd)"
echo "==> Деплой в $REPO_ROOT"

echo "==> Получаю свежий main из origin"
git fetch --prune origin main
git reset --hard origin/main

echo "==> Устанавливаю зависимости (database, backend, frontend)"
npm --prefix database install --no-audit --no-fund
npm --prefix backend  install --no-audit --no-fund
npm --prefix frontend install --no-audit --no-fund

echo "==> Собираю frontend (tsc -b && vite build -> dist/)"
npm --prefix frontend run build

echo "==> Перезапускаю процессы через pm2"
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save

echo "==> Жду готовности backend (/health на :5001)"
ok=0
for i in $(seq 1 15); do
  if curl -fsS http://localhost:5001/health >/dev/null 2>&1; then
    ok=1; echo "==> Backend отвечает (попытка $i)"; break
  fi
  sleep 2
done
if [ "$ok" -ne 1 ]; then
  echo "!! Health-check НЕ прошёл — показываю последние логи backend:"
  pm2 logs kts-backend --lines 40 --nostream || true
  exit 1
fi

echo "==> Деплой завершён успешно"
pm2 status
