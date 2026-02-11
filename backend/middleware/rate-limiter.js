import rateLimit from 'express-rate-limit';
import { config } from '../config/index.js'; // Убедись, что путь к конфигу верный

export const requestRateLimiter = rateLimit({
    windowMs: config.limits.sendRequest.windowMs,
    max: config.limits.sendRequest.max,
    message: {
        status: 429,
        message: config.limits.sendRequest.message
    },
    standardHeaders: true, // Возвращает информацию о лимите в заголовках RateLimit-*
    legacyHeaders: false, // Отключает старые заголовки X-RateLimit-*
});