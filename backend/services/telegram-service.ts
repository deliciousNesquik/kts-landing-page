import axios from 'axios';
import { config } from '../config';
import { logger } from '../utils/logger';

interface TelegramSendResult {
  success: boolean;
  messageId?: number;
  chatId: string;
  error?: unknown;
}

export class TelegramService {
  private readonly botToken: string | undefined;
  private readonly apiUrl: string;
  private readonly timeout: number;

  constructor() {
    this.botToken = config.telegram.botToken;
    this.apiUrl = config.telegram.apiUrl;
    this.timeout = 5000;
  }

  async sendMessage(chatId: string, message: string): Promise<TelegramSendResult> {
    if (!this.botToken) {
      throw new Error('TELEGRAM_BOT_TOKEN не задан в .env');
    }

    try {
      const response = await axios.post(
        `${this.apiUrl}${this.botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        },
        { timeout: this.timeout },
      );

      logger.info('Сообщение отправлено', { chatId, messageId: response.data.result.message_id });

      return {
        success: true,
        messageId: response.data.result.message_id,
        chatId,
      };
    } catch (error) {
      const axiosError = error as { response?: { data?: unknown }; message?: string };

      logger.error('Ошибка отправки в Telegram', {
        chatId,
        error: axiosError.response?.data || axiosError.message,
      });

      return {
        success: false,
        error: axiosError.response?.data || axiosError.message,
        chatId,
      };
    }
  }

  async sendToMultipleChats(chatIds: string[], message: string): Promise<TelegramSendResult[]> {
    const results = await Promise.allSettled(chatIds.map((chatId) => this.sendMessage(chatId, message)));

    return results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value;
      }

      return {
        success: false,
        chatId: chatIds[index],
        error: result.reason,
      };
    });
  }
}
