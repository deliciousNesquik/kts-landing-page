import type { NextFunction, Request, Response } from 'express';
import type { NewRequestPayload } from '../types/request';

type RequestWithValidatedData = Request & {
  validatedData?: NewRequestPayload;
};

export const validateRequest = (
  req: RequestWithValidatedData,
  res: Response,
  next: NextFunction,
) => {
  const { name, phone } = req.body as Partial<NewRequestPayload>;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({
      success: false,
      field: 'name',
      message: 'Имя обязательно и должно быть строкой',
    });
  }

  if (!phone || typeof phone !== 'string' || !isValidPhone(phone)) {
    return res.status(400).json({
      success: false,
      field: 'phone',
      message: 'Телефон обязателен и должен быть в формате +7XXXXXXXXXX',
    });
  }

  if (name.length > 100) {
    return res.status(400).json({
      success: false,
      field: 'name',
      message: 'Имя слишком длинное (максимум 100 символов)',
    });
  }

  req.validatedData = {
    name: name.trim(),
    phone: phone.trim(),
    problem: typeof req.body?.problem === 'string' ? req.body.problem.trim() : undefined,
  };

  return next();
};

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+7|8)[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}
