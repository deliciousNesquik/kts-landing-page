import sqlite3 from 'sqlite3';
import { open, type Database } from 'sqlite';
import 'dotenv/config';
import { logger } from '../../backend/utils/logger';

let dbInstance: Database | null = null;

export async function createConnection(): Promise<Database> {
  try {
    const db = await open({
      filename: process.env.DB_PATH || 'database',
      driver: sqlite3.Database,
    });

    logger.info(`Соединение с SQLite установлено, база данных: ${process.env.DB_PATH}`);
    return db;
  } catch (error) {
    logger.error(`Ошибка создания соединения: ${(error as Error).message}`);
    throw error;
  }
}

export async function getDb(): Promise<Database> {
  if (!dbInstance) {
    dbInstance = await createConnection();
  }
  return dbInstance;
}

export async function testConnection(): Promise<boolean> {
  try {
    const db = await getDb();
    await db.run('SELECT 1');
    logger.info('База данных SQLite готова к работе');
    return true;
  } catch (error) {
    logger.error(`Ошибка подключения к БД: ${(error as Error).message}`);
    throw new Error('Не удалось подключиться к базе данных SQLite');
  }
}

export async function closeConnection(): Promise<void> {
  if (dbInstance) {
    await dbInstance.close();
    dbInstance = null;
    logger.info('Соединение с БД закрыто');
  }
}
