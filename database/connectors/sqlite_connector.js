import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import 'dotenv/config.js'
import {logger} from '../../backend/utils/logger.js'

/*
* Модуль соединения с базой данных SQLite.
* Создаёт одно соединение с БД (файл).
* При запуске приложения необходимо использовать
* тестирование соединения с помощью вызова метода await testConnection()
* перед использованием БД.
*/

// Глобальная переменная для хранения соединения
let dbInstance = null;

// Создание соединения с базой данных
export async function createConnection() {
    try {
        const db = await open({
            filename: process.env.DB_PATH || 'database',
            driver: sqlite3.Database
        });

        //await testConnection();

        //console.log('Соединение с SQLite установлено, база данных: ' + process.env.DB_PATH);
        logger.info(`Соединение с SQLite установлено, база данных: ${process.env.DB_PATH}`);
        return db;
    } catch (error) {
        //console.error('Ошибка создания соединения:', error.message);
        logger.error(`Ошибка создания соединения: ${error.message}`);

        throw error;
    }
}

// Получение экземпляра БД
export async function getDb() {
    if (!dbInstance) {
        dbInstance = await createConnection();
    }
    return dbInstance;
}

/*
* Тестирование подключения к базе данных.
* Использовать при первом запуске приложения для проверки
* работоспособности источника данных.
*/
export async function testConnection() {
    try {
        const db = await getDb();
        await db.run('SELECT 1');
        logger.info(`База данных SQLite готова к работе`);
        //console.log('База данных SQLite готова к работе');
        return true;
    } catch (error) {
        //console.error('Ошибка подключения к БД:', error.message);
        logger.error(`Ошибка подключения к БД: ${error.message}`);
        throw new Error('Не удалось подключиться к базе данных SQLite');
    }
}

// Закрытие соединения (при завершении работы)
export async function closeConnection() {
    if (dbInstance) {
        await dbInstance.close();
        dbInstance = null;
        logger.info(`Соединение с БД закрыто`);
        //console.log('Соединение с БД закрыто');
    }
}