import { NotificationService } from '../services/notification-service.js';
import { logger } from '../utils/logger.js';

export class RequestController {
    constructor() {
        this.notificationService = new NotificationService();
    }

    async handleNewRequest(req, res) {
        const { name, phone, problem } = req.validatedData;

        try {
            logger.info('Новая заявка получена', { name, phone });

            const result = await this.notificationService.sendNewRequestNotification({
                name,
                phone,
                problem
            });

            if (!result.success) {
                return res.status(500).json({
                    success: false,
                    message: 'Не удалось отправить уведомление ни в один чат',
                    details: result
                });
            }

            logger.info('Заявка успешно обработана', {
                name,
                phone,
                sentToChats: result.sentCount
            });

            res.json({
                success: true,
                message: 'Заявка отправлена! Мы скоро вам перезвоним.',
                details: {
                    sentTo: result.sentCount,
                    totalChats: result.totalCount
                }
            });

        } catch (error) {
            logger.error('Ошибка обработки заявки', { error: error.message, name, phone });

            res.status(500).json({
                success: false,
                message: 'Произошла ошибка при обработке заявки'
            });
        }
    }
}