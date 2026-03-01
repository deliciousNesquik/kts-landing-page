import type { ReactNode } from 'react';
import '../assets/container/info-block.css';

interface InfoBlockProps {
  icon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}

export default function InfoBlock({ icon, title, description }: InfoBlockProps) {
  return (
    <div className="info-block">
      <div className="info-block__title">
        {icon}
        {title}
      </div>
      {description}
    </div>
  );
}
