import {getDb} from '../connectors/sqlite_connector.js';

let cachedChatIds = null;

/**
 * Загрузка активных chat_id в кэш из базы данных.
 * Используется при инициализации и для принудительного обновления кэша.
 */
async function loadChatCache() {
    try {
        const db = await getDb();
        const rows = await db.all(
            "SELECT chat_id FROM notification_chats WHERE is_active = 1"
        );

        if (rows.length === 0) {
            console.warn('Таблица notification_chats пуста или нет активных чатов');
            cachedChatIds = [];
        } else {
            cachedChatIds = rows.map(r => r.chat_id.toString());
            console.log(`Загружено ${cachedChatIds.length} активных chat_id в кэш`);
        }

        return cachedChatIds;
    } catch (error) {
        console.error('Ошибка загрузки кэша chat_id:', error.message);
        throw new Error('Не удалось загрузить данные из базы');
    }
}

/**
 * Получение списка активных chat_id.
 * Данные берутся из кэша. Если кэш пуст — загружается из БД.
 *
 * @returns {Promise<string[]>} Массив строковых идентификаторов чатов
 */
export async function getActiveChatIds() {
    if (!cachedChatIds) {
        await loadChatCache();
    }
    return cachedChatIds;
}

/**
 * Получение всех записей из таблицы notification_chats.
 * Прямой запрос к базе данных (без кэширования).
 *
 * @returns {Promise<Array>} Массив всех записей таблицы
 */
export async function getAllChats() {
    try {
        const db = await getDb();
        return await db.all(
            "SELECT * FROM notification_chats ORDER BY created_at DESC"
        );
    } catch (error) {
        console.error('Ошибка получения всех чатов:', error.message);
        throw new Error('Не удалось получить данные из базы');
    }
}

/**
 * Инициализация репозитория при запуске приложения.
 * Создаёт таблицу если не существует и загружает кэш.
 */
export async function initRepository() {
    try {
        const db = await getDb();

        // Создание таблицы если не существует
        await db.run(`
            CREATE TABLE IF NOT EXISTS notification_chats (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                chat_id INTEGER UNIQUE NOT NULL,
                chat_name TEXT,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('Таблица notification_chats готова');

        // Загрузка кэша
        await loadChatCache();

        console.log('Репозиторий инициализирован');
    } catch (error) {
        console.error('Ошибка инициализации репозитория:', error.message);
        throw error;
    }
}

/**
 * Принудительное обновление кэша из базы данных.
 * Используется если данные были изменены вручную.
 */
export async function refreshCache() {
    console.log('Принудительное обновление кэша...');
    await loadChatCache();
    console.log('Кэш обновлён');
}