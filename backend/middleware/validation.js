export const validateRequest = (req, res, next) => {
    const { name, phone } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({
            success: false,
            field: 'name',
            message: 'Имя обязательно и должно быть строкой'
        });
    }

    if (!phone || typeof phone !== 'string' || !isValidPhone(phone)) {
        return res.status(400).json({
            success: false,
            field: 'phone',
            message: 'Телефон обязателен и должен быть в формате +7XXXXXXXXXX'
        });
    }

    // Опционально: валидация длины поля
    if (name.length > 100) {
        return res.status(400).json({
            success: false,
            field: 'name',
            message: 'Имя слишком длинное (максимум 100 символов)'
        });
    }

    req.validatedData = { name: name.trim(), phone: phone.trim(), problem: req.body.problem?.trim() };
    next();
};

function isValidPhone(phone) {
    // Пример валидации для России/Казахстана
    const phoneRegex = /^(\+7|8)[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}