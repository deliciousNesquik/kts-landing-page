import type { Request, Response } from 'express';
import { NotificationService } from '../services/notification-service';
import { logger } from '../utils/logger';
import type { NewRequestPayload } from '../types/request';

type RequestWithValidatedData = Request & { validatedData?: NewRequestPayload };

export class RequestController {
  private readonly notificationService: NotificationService;

  constructor() {
    this.notificationService = new NotificationService();
  }

  async handleNewRequest(req: RequestWithValidatedData, res: Response) {
    const { name, phone, problem } = req.validatedData || ({} as NewRequestPayload);

    try {
      logger.info('Новая заявка получена', { name, phone });

      const result = await this.notificationService.sendNewRequestNotification({
        name,
        phone,
        problem,
      });

      if (!result.success) {
        return res.status(500).json({
          success: false,
          message: 'Не удалось отправить уведомление ни в один чат',
          details: result,
        });
      }

      logger.info('Заявка успешно обработана', {
        name,
        phone,
        sentToChats: result.sentCount,
      });

      return res.json({
        success: true,
        message: 'Заявка отправлена! Мы скоро вам перезвоним.',
        details: {
          sentTo: result.sentCount,
          totalChats: result.totalCount,
        },
      });
    } catch (error) {
      logger.error('Ошибка обработки заявки', {
        error: (error as Error).message,
        name,
        phone,
      });

      return res.status(500).json({
        success: false,
        message: 'Произошла ошибка при обработке заявки',
      });
    }
  }
}
