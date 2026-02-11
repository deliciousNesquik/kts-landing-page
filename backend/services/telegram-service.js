import axios from 'axios';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

export class TelegramService {
    constructor() {
        this.botToken = config.telegram.botToken;
        this.apiUrl = config.telegram.apiUrl;
        this.timeout = 5000;
    }

    async sendMessage(chatId, message) {
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
                    disable_web_page_preview: true
                },
                { timeout: this.timeout }
            );

            logger.info('Сообщение отправлено', { chatId, messageId: response.data.result.message_id });

            return {
                success: true,
                messageId: response.data.result.message_id,
                chatId
            };
        } catch (error) {
            logger.error('Ошибка отправки в Telegram', {
                chatId,
                error: error.response?.data || error.message
            });

            return {
                success: false,
                error: error.response?.data || error.message,
                chatId
            };
        }
    }

    async sendToMultipleChats(chatIds, message) {
        const results = await Promise.allSettled(
            chatIds.map(chatId => this.sendMessage(chatId, message))
        );

        return results.map((result, index) => ({
            chatId: chatIds[index],
            ...result.value
        }));
    }
}