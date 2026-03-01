# komtranservice-portal
Комплексное решение для автоматизации взаимодействия между автосервисом и клиентами.
Приложение позволяет пользователям ознакомиться с услугами компании и оперативно оставить заявку на техническое обслуживание.

## Текущий стек
- Frontend: React + TypeScript + Vite
- Backend: Express + TypeScript
- Database: SQLite (отдельный TS-пакет `database`)

## Структура
- `frontend` — SPA интерфейс
- `backend` — API `/api/send-request` + health-check `/health`
- `database` — слой доступа к SQLite (`notification_chats`)

## Локальный запуск
1. Установка зависимостей:
   - `cd frontend && npm install`
   - `cd ../backend && npm install`
   - `cd ../database && npm install`
2. Запуск backend:
   - `cd backend && npm run dev`
3. Запуск frontend:
   - `cd frontend && npm run dev`

Frontend запускается на `http://localhost:3000` и проксирует `/api` и `/health` на backend `http://localhost:5001`.
