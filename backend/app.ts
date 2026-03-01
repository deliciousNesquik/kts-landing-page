import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api-routes';
import { config } from './config';
import { logger } from './utils/logger';

const app = express();

app.set('trust proxy', 1);
app.use(cors(config.cors));
app.use(express.json({ limit: '10mb' }));

app.use('/api', apiRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(config.server.port, config.server.host, () => {
  logger.info(`The server is running on https://${config.server.host}:${config.server.port}`);
  logger.info('To check the functionality go to /health');
  logger.info(`Mode: ${config.server.environment}`);
  logger.info(`CORS: ${config.cors.origin}`);
});
