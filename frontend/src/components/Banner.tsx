import React from 'react';
import '../assets/banner.css';
import Icon from '../components/Icon';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__container">
                <div className="banner__content">
                    <div className="banner__badge">
                        <Icon name="stars" size={20} />
                        <span>Профессиональный сервис</span>
                    </div>

                    <h1 className="banner__title">
                        Ремонт микроавтобусов
                        <span className="banner__title-accent"> и коммерческой техники</span>
                    </h1>

                    <p className="banner__description">
                        Полный комплекс услуг по ремонту и обслуживанию микроавтобусов
                        и коммерческого транспорта. Качественно, быстро и с гарантией.
                    </p>

                    <div className="banner__features">
                        <div className="banner__feature">
                            <Icon name="warranty" size={24} />
                            <span>Гарантия на работы</span>
                        </div>
                        <div className="banner__feature">
                            <Icon name="quality" size={24} />
                            <span>Оригинальные запчасти</span>
                        </div>
                        <div className="banner__feature">
                            <Icon name="time" size={24} />
                            <span>Срочный ремонт</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;