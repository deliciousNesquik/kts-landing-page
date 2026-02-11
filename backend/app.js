import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api-routes.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

const app = express();

app.set('trust proxy', 1);

// Middleware
app.use(cors(config.cors));
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api', apiRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(config.server.port, config.server.host, () => {
    logger.info(`The server is running on https://${config.server.host}:${config.server.port}`);
    logger.info(`To check the functionality go to /health`);
    logger.info(`Mode: ${config.server.environment}`);
    logger.info(`CORS: ${config.cors.origin}`);
});