const origins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((item) => item.trim())
  : 'http://localhost:3000';

export const config = {
  server: {
    port: Number(process.env.PORT || 5001),
    host: process.env.HOST || 'localhost',
    environment: process.env.NODE_ENV || 'development',
  },

  logger: {
    level: process.env.LOG_LEVEL || 'info',
    error_file: process.env.LOG_ERROR_FILE || 'logs/error.log',
    combined_file: process.env.LOG_COMBINED_FILE || 'logs/combined.log',
  },

  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN,
    apiUrl: 'https://api.telegram.org/bot',
  },

  cors: {
    origin: origins,
    credentials: true,
  },

  messages: {
    success: 'Заявка отправлена! Мы скоро вам перезвоним.',
    error: 'Ошибка при отправке заявки',
    validation: {
      nameRequired: 'Имя обязательно для заполнения',
      phoneRequired: 'Телефон обязателен для заполнения',
      invalidPhone: 'Некорректный формат телефона',
    },
  },

  limits: {
    sendRequest: {
      windowMs: 15 * 60 * 1000,
      max: 5,
      message: 'Слишком много заявок с вашего IP, пожалуйста, попробуйте через 15 минут.',
    },
  },

  telegramMessages: {
    newRequest: {
      title: '<b>📥 Поступила заявка на звонок</b>',
      name: '<b>Контакт:</b>',
      phone: '<b>Телефон:</b>',
      problem: '<b>Проблема:</b>',
      date: '<b>Время:</b>',
      notSpecified: 'Не указана',
    },
  },
};
