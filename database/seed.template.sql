-- database/seed.sql.template
-- Начальные данные (chat_id подставляются из .env)

INSERT OR IGNORE INTO notification_chats (id, chat_id, is_active, created_at, chat_name)
VALUES (1, ${CHAT_ID_01}, 1, datetime('now'), '01');

INSERT OR IGNORE INTO notification_chats (id, chat_id, is_active, created_at, chat_name)
VALUES (2, ${CHAT_ID_02}, 1, datetime('now'), '02');

INSERT OR IGNORE INTO notification_chats (id, chat_id, is_active, created_at, chat_name)
VALUES (3, ${CHAT_ID_03}, 1, datetime('now'), '03');
