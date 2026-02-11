import React from 'react';
import './PrimaryCTA.css';

const PrimaryCTA = ({
                        icon,
                        text,
                        onClick,
                        disabled = false,
                        href,
                        target,
                        className = '',
                        ...props
                    }) => {
    const classes = `primary-cta ${className}`;

    // Если передан href - рендерим как ссылку
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={classes}
                {...props}
            >
                {icon && <span className="primary-cta__icon">{icon}</span>}
                {text && <span className="primary-cta__text">{text}</span>}
            </a>
        );
    }

    // Обычная кнопка
    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="primary-cta__icon">{icon}</span>}
            {text && <span className="primary-cta__text">{text}</span>}
        </button>
    );
};

export default PrimaryCTA;