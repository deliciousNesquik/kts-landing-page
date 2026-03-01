import type { ReactNode } from 'react';
import '../../assets/text/heading.css';

interface HeadingProps {
  text: ReactNode;
  level?: number | string;
  color?: string;
}

export default function Heading({ text, level = 1, color }: HeadingProps) {
  const headingClass = ['heading', color ? `heading--color-${color}` : null, `heading--level-${level}`]
    .filter(Boolean)
    .join(' ');

  return <h1 className={headingClass}>{text}</h1>;
}
