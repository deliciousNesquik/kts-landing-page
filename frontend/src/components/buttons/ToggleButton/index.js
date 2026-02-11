import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({
                          icon,
                          text,
                          active = false,
                          onClick,
                          disabled = false,
                          className = '',
                          ...props
                      }) => {
    return (
        <button
            className={`toggle-button ${active ? 'toggle-button--active' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled}
            aria-pressed={active}
            {...props}
        >
            {icon && <span className="toggle-button__icon">{icon}</span>}
            {text && <span className="toggle-button__text">{text}</span>}
        </button>
    );
};

export default ToggleButton;