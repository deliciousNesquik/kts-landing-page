import React from 'react';
import './IconButton.css';

const IconButton = ({
                        icon,
                        onClick,
                        disabled = false,
                        ariaLabel,
                        className = '',
                        ...props
                    }) => {
    return (
        <button
            className={`icon-button ${className}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            {...props}
        >
            {icon}
        </button>
    );
};

export default IconButton;