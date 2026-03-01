import type { ReactNode } from 'react';
import '../assets/van-list-item.css';

export interface VanListItemProps {
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

export default function VanListItem({
  image,
  title,
  vehicle_class,
  description,
  serviceTags = [],
  maintenanceLevel = 'Регулярно обслуживаем',
  loading = false,
}: VanListItemProps) {
  if (loading) {
    return (
      <article className="van-list-item van-list-item--loading" aria-busy="true">
        <div className="van-list-item__thumb-skeleton" />
        <div className="van-list-item__content-skeleton">
          <div className="van-list-item__line-skeleton van-list-item__line-skeleton--title" />
          <div className="van-list-item__line-skeleton" />
          <div className="van-list-item__line-skeleton" />
        </div>
      </article>
    );
  }

  return (
    <article className="van-list-item">
      <div className="van-list-item__thumb-wrap">
        <img src={image} alt={typeof title === 'string' ? title : 'Микроавтобус'} className="van-list-item__thumb" loading="lazy" />
      </div>

      <div className="van-list-item__content">
        <div className="van-list-item__top">
          <div>
            <h3 className="van-list-item__title">{title}</h3>
            <p className="van-list-item__class">{vehicle_class}</p>
          </div>
          <span className="van-list-item__status">{maintenanceLevel}</span>
        </div>

        <p className="van-list-item__description">{description}</p>

        {serviceTags.length > 0 && (
          <div className="van-list-item__chips" aria-label="Ключевые работы по модели">
            {serviceTags.map((tag) => (
              <span key={tag} className="van-list-item__chip">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
