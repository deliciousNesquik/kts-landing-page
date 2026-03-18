-- databasebase/migration.sql
-- Миграция: создание таблицы notification_chats

CREATE TABLE IF NOT EXISTS notification_chats
(
	id INTEGER  NOT NULL CONSTRAINT notification_chats_pk PRIMARY KEY AUTOINCREMENT,
	chat_id    BIGINT   NOT NULL,
	is_active  BOOLEAN  DEFAULT false NOT NULL,
	created_at DATE,
	chat_name  TEXT     DEFAULT 'Тестовый' NOT NULL
);
