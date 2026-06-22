// ecosystem.config.cjs — определения процессов pm2 для боевого сервера.
// Используется через `pm2 startOrReload ecosystem.config.cjs` (см. scripts/deploy.sh).
// Запускает два процесса: backend (tsx app.ts, :5001) и frontend (serve dist, :3000).
//
// Секреты (TELEGRAM_BOT_TOKEN и пр.) НЕ хранятся здесь — backend читает их из
// backend/.env через dotenv в рантайме. cwd намеренно указывает в каталог
// пакета, чтобы dotenv и относительный DB_PATH резолвились так же, как при
// ручном запуске `tsx app.ts` из backend/.

const path = require('path');
const ROOT = __dirname;

module.exports = {
  apps: [
    {
      name: 'kts-backend',
      cwd: path.join(ROOT, 'backend'),
      script: './node_modules/.bin/tsx',
      args: 'app.ts',
      interpreter: 'none', // у бинарника tsx есть собственный shebang (#!/usr/bin/env node)
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 10,
      env: { NODE_ENV: 'production' },
    },
    {
      name: 'kts-frontend',
      cwd: path.join(ROOT, 'frontend'),
      script: './node_modules/.bin/serve',
      args: '-s dist -l 3000',
      interpreter: 'none',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 10,
      env: { NODE_ENV: 'production' },
    },
  ],
};
