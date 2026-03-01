import { Router } from 'express';
import { RequestController } from '../controllers/request-controller';
import { validateRequest } from '../middleware/validation';
import { requestRateLimiter } from '../middleware/rate-limiter';

const router = Router();
const requestController = new RequestController();

router.post(
  '/send-request',
  requestRateLimiter,
  validateRequest,
  requestController.handleNewRequest.bind(requestController),
);

export default router;
