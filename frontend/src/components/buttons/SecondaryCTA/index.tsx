import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './SecondaryCTA.css';

interface SecondaryCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  text?: ReactNode;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  className?: string;
}

const SecondaryCTA = ({
  icon,
  text,
  onClick,
  disabled = false,
  href,
  target,
  className = '',
  ...props
}: SecondaryCTAProps) => {
  const classes = `secondary-cta ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {icon && <span className="secondary-cta__icon">{icon}</span>}
        {text && <span className="secondary-cta__text">{text}</span>}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {icon && <span className="secondary-cta__icon">{icon}</span>}
      {text && <span className="secondary-cta__text">{text}</span>}
    </button>
  );
};

export default SecondaryCTA;
