import { getActiveChatIds } from 'komtransservice-database';
import { TelegramService } from './telegram-service.js';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

export class NotificationService {
    constructor() {
        this.telegram = new TelegramService();
    }

    async sendNewRequestNotification(requestData) {
        const { name, phone, problem } = requestData;

        try {
            const chatIds = await getActiveChatIds();

            if (chatIds.length === 0) {
                logger.warn('Нет активных чатов для отправки уведомлений');
                return {
                    success: false,
                    message: 'Нет активных чатов для отправки',
                    sentCount: 0
                };
            }

            const message = this.buildRequestMessage(name, phone, problem);

            const results = await this.telegram.sendToMultipleChats(chatIds, message);

            const successful = results.filter(r => r.success);
            const failed = results.filter(r => !r.success);

            logger.info('Отправка уведомлений завершена', {
                total: chatIds.length,
                successful: successful.length,
                failed: failed.length
            });

            return {
                success: successful.length > 0,
                sentCount: successful.length,
                totalCount: chatIds.length,
                failures: failed
            };

        } catch (error) {
            logger.error('Ошибка отправки уведомления', { error: error.message });
            throw error;
        }
    }

    buildRequestMessage(name, phone, problem) {
        const { newRequest } = config.telegramMessages;

        return `
${newRequest.title}

${newRequest.name} ${name}
${newRequest.phone} <code>${phone}</code>
${newRequest.problem} ${problem || newRequest.notSpecified}

${newRequest.date} ${new Date().toLocaleString('ru-RU')}
        `.trim();
    }
}