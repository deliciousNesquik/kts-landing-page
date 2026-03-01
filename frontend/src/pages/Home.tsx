import Content from '../components/Content';
import Icon from '../components/Icon';
import VanCard from '../components/VanCard';
import Carousel from '../components/VanCarousel';
import { PrimaryCTA } from '../components/buttons';
import getVansData from '../data/vansData';
import '../assets/page/home.css';

const TRUST_METRICS = [
  { value: '10+', label: 'лет с коммерческим транспортом' },
  { value: '95%', label: 'клиентов возвращаются повторно' },
  { value: '1 день', label: 'средний срок типового ремонта' },
  { value: '7/7', label: 'прием заявок без выходных' },
];

const ADVANTAGES = [
  {
    icon: 'certificates',
    title: 'Прозрачная диагностика',
    text: 'Показываем причину поломки, согласовываем стоимость до начала ремонта и фиксируем перечень работ.',
  },
  {
    icon: 'spanner',
    title: 'Специализация на микроавтобусах',
    text: 'Работаем именно с коммерческим транспортом, поэтому быстро находим типовые проблемы и не тратим ваше время.',
  },
  {
    icon: 'clock',
    title: 'Понятные сроки',
    text: 'Сразу называем план ремонта и держим в курсе статуса, чтобы вы могли планировать рейсы и загрузку.',
  },
];

const WORKFLOW = [
  {
    step: '1',
    title: 'Принимаем заявку',
    text: 'Оставляете номер телефона, мы уточняем симптомы и записываем на удобное время.',
  },
  {
    step: '2',
    title: 'Проводим диагностику',
    text: 'Фиксируем точную причину неисправности и согласовываем смету до начала работ.',
  },
  {
    step: '3',
    title: 'Выдаём исправный автомобиль',
    text: 'Перед выдачей проводим контрольную проверку и даем рекомендации по дальнейшему обслуживанию.',
  },
];

export default function Home() {
  const vans = getVansData();

  return (
    <Content>
      <section className="home-hero fade-in-up">
        <div className="home-hero__left">
          <div className="home-hero__badge">
            <Icon name="stars" size={18} />
            <span>Сервис для коммерческого транспорта в Санкт-Петербурге</span>
          </div>

          <h1 className="home-hero__title">
            Ремонт микроавтобусов,
            <span> которому доверяют владельцы бизнеса</span>
          </h1>

          <p className="home-hero__subtitle">
            Возвращаем транспорт в работу быстро, аккуратно и с понятной коммуникацией на каждом этапе. Наша цель -
            чтобы ваш автомобиль зарабатывал, а не простаивал в ремонте.
          </p>

          <div className="home-hero__actions">
            <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Записаться на сервис" />
            <PrimaryCTA href="/contacts" icon={<Icon name="map_picker" />} text="Как нас найти" className="home-hero__ghost" />
          </div>
        </div>

        <aside className="home-hero__panel">
          <h2>Почему к нам едут снова</h2>
          <ul>
            <li>
              <Icon name="certificates" size={16} />
              <span>Согласование стоимости до начала ремонта</span>
            </li>
            <li>
              <Icon name="clock" size={16} />
              <span>Соблюдение сроков и быстрые ответы по статусу</span>
            </li>
            <li>
              <Icon name="smile" size={16} />
              <span>Человечный сервис и ориентация на долгосрочное сотрудничество</span>
            </li>
          </ul>
        </aside>
      </section>

      <section className="home-metrics fade-in-up">
        {TRUST_METRICS.map((item) => (
          <article key={item.label} className="home-metrics__item">
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="home-advantages fade-in-up">
        <header className="home-section-header">
          <h2>Почему этот сервис безопасно рекомендовать коллегам</h2>
          <p>Мы строим ремонт вокруг ваших задач: минимизируем простой транспорта и убираем неопределенность.</p>
        </header>

        <div className="home-advantages__grid">
          {ADVANTAGES.map((item) => (
            <article key={item.title} className="home-advantages__card">
              <div className="home-advantages__icon-wrap">
                <Icon name={item.icon} size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-carousel-section fade-in-up">
        <Carousel
          title={<h2 className="home-carousel-title">Какие микроавтобусы обслуживаем</h2>}
          icon={<Icon name="van" />}
          cards={vans.map((van, index) => (
            <VanCard key={index} {...van} />
          ))}
          catalogLink="/vans"
          catalogButtonText="Смотреть полный список"
        />
      </section>

      <section className="home-workflow fade-in-up">
        <header className="home-section-header">
          <h2>Как проходит работа с нами</h2>
          <p>Простой процесс без лишних созвонов и непредсказуемых итогов.</p>
        </header>

        <div className="home-workflow__grid">
          {WORKFLOW.map((item) => (
            <article key={item.step} className="home-workflow__item">
              <span className="home-workflow__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-final-cta fade-in-up">
        <div>
          <h2>Оставьте заявку и получите план ремонта уже сегодня</h2>
          <p>Мы свяжемся с вами, уточним детали и предложим оптимальный вариант обслуживания под ваш транспорт.</p>
        </div>

        <div className="home-final-cta__actions">
          <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Оставить заявку" />
        </div>
      </section>
    </Content>
  );
}
