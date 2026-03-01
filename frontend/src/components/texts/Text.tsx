import type { ReactNode } from 'react';
import '../../assets/text/text.css';

interface TextProps {
  level?: number | string;
  text: ReactNode;
  weight?: string;
}

export default function Text({ level = '1', text, weight }: TextProps) {
  const textClass = ['text', `text--level-${level}`, weight ? `text--weight-${weight}` : null]
    .filter(Boolean)
    .join(' ');

  return <p className={textClass}>{text}</p>;
}
