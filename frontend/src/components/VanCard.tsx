import type { ReactNode } from 'react';
import '../assets/van-card.css';

export interface VanCardProps {
  id?: number | string;
  image: string;
  flags?: ReactNode | null;
  title: ReactNode;
  vehicle_class?: ReactNode;
  description: ReactNode;
  serviceTags?: string[];
  maintenanceLevel?: string;
  loading?: boolean;
}

export default function VanCard({
  image,
  title,
  vehicle_class,
  description,
  serviceTags = [],
  maintenanceLevel = 'Регулярно обслуживаем',
  loading = false,
}: VanCardProps) {
  if (loading) {
    return (
      <article className="van-card van-card--loading" aria-busy="true">
        <div className="van-card__image-skeleton" />
        <div className="van-card__line-skeleton van-card__line-skeleton--title" />
        <div className="van-card__line-skeleton van-card__line-skeleton--meta" />
        <div className="van-card__line-skeleton" />
        <div className="van-card__line-skeleton" />
      </article>
    );
  }

  return (
    <article className="van-card">
      <div className="van-card__media">
        <img src={image} alt={typeof title === 'string' ? title : 'Микроавтобус'} loading="lazy" />
        <span className="van-card__badge">{maintenanceLevel}</span>
      </div>

      <div className="van-card__body">
        <div className="van-card__heading">
          <h3 className="van-card__title">{title}</h3>
          <p className="van-card__class">{vehicle_class}</p>
        </div>

        <p className="van-card__description">{description}</p>

        {serviceTags.length > 0 && (
          <div className="van-card__chips" aria-label="Ключевые работы по модели">
            {serviceTags.map((tag) => (
              <span key={tag} className="van-card__chip">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
