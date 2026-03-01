import type { ReactNode } from 'react';
import '../assets/container/section.css';

interface SectionProps {
  header: ReactNode;
  content: ReactNode;
}

export default function Section({ header, content }: SectionProps) {
  return (
    <div className="title-block">
      {header}
      {content}
    </div>
  );
}
