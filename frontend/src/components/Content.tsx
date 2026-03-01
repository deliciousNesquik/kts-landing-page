import type { ReactNode } from 'react';
import '../assets/container/content.css';

interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <div className="content">{children}</div>;
}
