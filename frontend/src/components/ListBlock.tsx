import type { ReactNode } from 'react';
import '../assets/container/list-block.css';

interface ListBlockProps {
  children: ReactNode;
}

export default function ListBlock({ children }: ListBlockProps) {
  return <div className="list-block">{children}</div>;
}
