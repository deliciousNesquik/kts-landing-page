import React from 'react';
import './SecondaryCTA.css';

const SecondaryCTA = ({
                          icon,
                          text,
                          onClick,
                          disabled = false,
                          href,
                          target,
                          className = '',
                          ...props
                      }) => {
    const classes = `secondary-cta ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={classes}
                {...props}
            >
                {icon && <span className="secondary-cta__icon">{icon}</span>}
                {text && <span className="secondary-cta__text">{text}</span>}
            </a>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="secondary-cta__icon">{icon}</span>}
            {text && <span className="secondary-cta__text">{text}</span>}
        </button>
    );
};

export default SecondaryCTA;