# Деплой и CI/CD

Этот документ объясняет, как код из GitHub попадает на боевой сервер
`komtransservice-spb.ru` (REDACTED-IP) автоматически при `git push`.

## Как это работает (в двух словах)

```
git push в ветку main
        │
        ▼
GitHub Actions поднимает временную виртуалку (runner) и читает
.github/workflows/deploy.yml:
   job "ci"     — npm install + проверка типов + сборка frontend.
                  Если упало — деплой НЕ запускается.
   job "deploy" — по SSH заходит на сервер и запускает scripts/deploy.sh
        │
        ▼
сервер: git pull → npm install → сборка frontend → pm2 reload → /health
```

- **Репозиторий публичный**, поэтому серверу не нужны пароли, чтобы делать
  `git pull` — он просто скачивает свежий main.
- **Единственный секрет** — это SSH-ключ, которым runner заходит на сервер.
  Это отдельный «деплой-ключ», не личный ключ владельца.

## Процессы на сервере (pm2)

Приложение управляется через **pm2** (см. `ecosystem.config.cjs`):

| Процесс        | Что это           | Порт |
|----------------|-------------------|------|
| `kts-backend`  | `tsx app.ts`      | 5001 |
| `kts-frontend` | `serve -s dist`   | 3000 |

Перед ними — **nginx** (сайт `komtransservice-spb.ru`), который проксирует
`/` → :3000 и API/`/health` → :5001.

Полезные команды на сервере (или локально через `make`):

```bash
pm2 status                  # что запущено
pm2 logs kts-backend        # логи backend
pm2 reload ecosystem.config.cjs   # перезапуск без простоя
make deploy                 # ручной полный деплой (то же, что делает CI)
```

`backend/.env` (токен Telegram, chat_id) **живёт только на сервере** и НЕ
отслеживается git — `git reset --hard` в деплое его не трогает.

## Что нужно один раз настроить в GitHub (секреты)

`Settings → Secrets and variables → Actions → New repository secret`:

| Имя секрета       | Значение                              |
|-------------------|---------------------------------------|
| `SSH_HOST`        | `REDACTED-IP`                      |
| `SSH_USER`        | `root`                                |
| `SSH_PRIVATE_KEY` | приватный деплой-ключ (целиком)       |

Пока секреты не заданы, job `deploy` просто пропускается (workflow зелёный) —
автодеплой включится сразу после их добавления.

## Ручной деплой / откат

```bash
# Ручной деплой текущего main:
ssh root@REDACTED-IP 'bash REDACTED-PATH/scripts/deploy.sh'

# Откат: вернуть прошлый коммит и задеплоить
ssh root@REDACTED-IP
cd REDACTED-PATH
git reset --hard <предыдущий-sha>
make deploy
```
