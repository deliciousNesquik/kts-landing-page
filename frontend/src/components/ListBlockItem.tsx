import type { ReactNode } from 'react';
import '../assets/container/list-block.css';

interface ListBlockItemProps {
  icon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
  clickable?: boolean;
}

export default function ListBlockItem({ icon, title, description, onClick, clickable = true }: ListBlockItemProps) {
  return (
    <div className={`item ${clickable ? 'clickable' : ''}`} onClick={onClick}>
      {icon}
      <div>
        {title}
        {description}
      </div>
    </div>
  );
}
