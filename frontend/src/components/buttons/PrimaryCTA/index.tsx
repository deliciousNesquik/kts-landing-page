import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './PrimaryCTA.css';

interface PrimaryCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  text?: ReactNode;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  className?: string;
}

const PrimaryCTA = ({
  icon,
  text,
  onClick,
  disabled = false,
  href,
  target,
  className = '',
  ...props
}: PrimaryCTAProps) => {
  const classes = `primary-cta ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {icon && <span className="primary-cta__icon">{icon}</span>}
        {text && <span className="primary-cta__text">{text}</span>}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {icon && <span className="primary-cta__icon">{icon}</span>}
      {text && <span className="primary-cta__text">{text}</span>}
    </button>
  );
};

export default PrimaryCTA;
