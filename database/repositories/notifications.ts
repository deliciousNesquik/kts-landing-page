import { getDb } from '../connectors/sqlite_connector';

interface NotificationChatRow {
  id: number;
  chat_id: number;
  chat_name: string | null;
  is_active: number;
  created_at: string;
  updated_at?: string;
}

let cachedChatIds: string[] | null = null;

async function loadChatCache(): Promise<string[]> {
  try {
    const db = await getDb();
    const rows = await db.all<Pick<NotificationChatRow, 'chat_id'>[]>(
      'SELECT chat_id FROM notification_chats WHERE is_active = 1',
    );

    if (rows.length === 0) {
      console.warn('Таблица notification_chats пуста или нет активных чатов');
      cachedChatIds = [];
    } else {
      cachedChatIds = rows.map((r) => r.chat_id.toString());
      console.log(`Загружено ${cachedChatIds.length} активных chat_id в кэш`);
    }

    return cachedChatIds;
  } catch (error) {
    console.error('Ошибка загрузки кэша chat_id:', (error as Error).message);
    throw new Error('Не удалось загрузить данные из базы');
  }
}

export async function getActiveChatIds(): Promise<string[]> {
  if (!cachedChatIds) {
    await loadChatCache();
  }
  return cachedChatIds || [];
}

export async function getAllChats(): Promise<NotificationChatRow[]> {
  try {
    const db = await getDb();
    return await db.all<NotificationChatRow[]>(
      'SELECT * FROM notification_chats ORDER BY created_at DESC',
    );
  } catch (error) {
    console.error('Ошибка получения всех чатов:', (error as Error).message);
    throw new Error('Не удалось получить данные из базы');
  }
}

export async function initRepository(): Promise<void> {
  try {
    const db = await getDb();

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
    await loadChatCache();
    console.log('Репозиторий инициализирован');
  } catch (error) {
    console.error('Ошибка инициализации репозитория:', (error as Error).message);
    throw error;
  }
}

export async function refreshCache(): Promise<void> {
  console.log('Принудительное обновление кэша...');
  await loadChatCache();
  console.log('Кэш обновлён');
}
