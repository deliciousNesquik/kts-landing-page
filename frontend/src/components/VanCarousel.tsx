import { useRef, useState, useEffect, type ReactNode } from 'react';
import { IconButton, PrimaryCTA } from './buttons/index';
import '../assets/van-carousel.css';
import Icon from './Icon';

interface CarouselProps {
  title: ReactNode;
  icon?: ReactNode;
  cards: ReactNode[];
  catalogLink?: string;
  catalogButtonText?: string;
}

const Carousel = ({ title, icon, cards, catalogLink = '/catalog', catalogButtonText = 'Смотреть все' }: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const track = trackRef.current;
    if (track) {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'next' | 'prev') => {
    const track = trackRef.current;
    if (track) {
      const cardWidth = 280;
      const gap = 20;
      const scrollAmount = (cardWidth + gap) * 2;

      track.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <div className="carousel-title">
          {icon && <span className="carousel-title__icon">{icon}</span>}
          {title}
        </div>
        <div className="carousel-divider"></div>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef} onScroll={checkScrollability}>
          {cards.map((card, index) => (
            <div key={index} className="carousel-card">
              {card}
            </div>
          ))}
        </div>

        <div className="carousel-blur carousel-blur--left"></div>
        <div className="carousel-blur carousel-blur--right"></div>
      </div>

      <div className="carousel-controls">
        <div className="carousel-nav-buttons">
          <IconButton
            icon={<Icon name="arrow_left" />}
            onClick={() => scroll('prev')}
            disabled={!canScrollLeft}
            ariaLabel="Предыдущие карточки"
            className="carousel-nav-btn"
          />
          <IconButton
            icon={<Icon name="arrow_right" />}
            onClick={() => scroll('next')}
            disabled={!canScrollRight}
            ariaLabel="Следующие карточки"
            className="carousel-nav-btn"
          />
        </div>

        <PrimaryCTA icon={<Icon name="van" />} text={catalogButtonText} href={catalogLink} className="carousel-catalog-btn" />
      </div>
    </section>
  );
};

export default Carousel;
