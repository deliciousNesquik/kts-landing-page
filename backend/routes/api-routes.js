import express from 'express';
import { RequestController } from '../controllers/request-controller.js';
import { validateRequest } from '../middleware/validation.js';
import { requestRateLimiter } from '../middleware/rate-limiter.js'; // Импортируем защиту

const router = express.Router();
const requestController = new RequestController();

// Добавляем requestRateLimiter в цепочку обработки
router.post(
    '/send-request',
    requestRateLimiter, // Сначала проверяем лимиты
    validateRequest,    // Затем валидируем данные
    requestController.handleNewRequest.bind(requestController)
);

export default router;