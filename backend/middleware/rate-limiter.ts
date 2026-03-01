import rateLimit from 'express-rate-limit';
import { config } from '../config';

export const requestRateLimiter = rateLimit({
  windowMs: config.limits.sendRequest.windowMs,
  max: config.limits.sendRequest.max,
  message: {
    status: 429,
    message: config.limits.sendRequest.message,
  },
  standardHeaders: true,
  legacyHeaders: false,
});
