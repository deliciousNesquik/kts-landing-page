// components/Carousel/Carousel.jsx
import React, { useRef, useState, useEffect } from 'react';
import {IconButton, PrimaryCTA} from './buttons/index.js';
import '../assets/van-carousel.css';
import Icon from "./Icon.js";

const Carousel = ({
                      title,
                      icon,
                      cards,
                      catalogLink = "/catalog",
                      catalogButtonText = "Смотреть все"
                  }) => {
    const trackRef = useRef(null);
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

    const scroll = (direction) => {
        const track = trackRef.current;
        if (track) {
            const cardWidth = 280; // Ширина карточки
            const gap = 20; // gap между карточками
            const scrollAmount = (cardWidth + gap) * 2; // Прокрутка на 2 карточки

            track.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        checkScrollability();
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    return (
        <section className="carousel-section">
            {/* Заголовок с разделителем */}
            <div className="carousel-header">
                <div className="carousel-title">
                    {icon && <span className="carousel-title__icon">{icon}</span>}
                    {title}
                </div>
                <div className="carousel-divider"></div>
            </div>

            {/* Область карточек с блюром по бокам */}
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    ref={trackRef}
                    onScroll={handleScroll}
                >
                    {cards.map((card, index) => (
                        <div key={index} className="carousel-card">
                            {card}
                        </div>
                    ))}
                </div>

                {/* Блюр эффекты по бокам */}
                <div className="carousel-blur carousel-blur--left"></div>
                <div className="carousel-blur carousel-blur--right"></div>
            </div>

            {/* Панель управления */}
            <div className="carousel-controls">
                <div className="carousel-nav-buttons">
                    <IconButton
                        icon={<Icon name={"arrow_left"}/>}
                        onClick={() => scroll('prev')}
                        disabled={!canScrollLeft}
                        ariaLabel="Предыдущие карточки"
                        className="carousel-nav-btn"
                    />
                    <IconButton
                        icon={<Icon name={"arrow_right"}/>}
                        onClick={() => scroll('next')}
                        disabled={!canScrollRight}
                        ariaLabel="Следующие карточки"
                        className="carousel-nav-btn"
                    />
                </div>

                <PrimaryCTA
                    icon={<Icon name={"van"}/>}
                    text={catalogButtonText}
                    href={catalogLink}
                    className="carousel-catalog-btn"
                />
            </div>
        </section>
    );
};

export default Carousel;