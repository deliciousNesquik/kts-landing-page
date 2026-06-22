import Content from '../components/Content';
import Icon from '../components/Icon';
import VanCard from '../components/VanCard';
import Carousel from '../components/VanCarousel';
import { PrimaryCTA } from '../components/buttons';
import getVansData from '../data/vansData';
import '../assets/page/home.css';

// Ключевые цифры — показания «приборов» в фирменном блоке героя.
const READOUTS = [
  { value: '10+', unit: 'лет', label: 'с коммерческим транспортом' },
  { value: '1', unit: 'день', label: 'средний срок типового ремонта' },
  { value: '95', unit: '%', label: 'клиентов возвращаются повторно' },
];

// Почему к нам возвращаются. Mono-метка — из лексикона цеха, не декоративная нумерация.
const VALUES = [
  {
    tag: 'диагностика',
    icon: 'certificates',
    title: 'Прозрачная диагностика',
    text: 'Показываем причину поломки и согласовываем стоимость до начала работ — без сюрпризов в счёте.',
  },
  {
    tag: 'специализация',
    icon: 'spanner',
    title: 'Только коммерческий транспорт',
    text: 'Работаем с микроавтобусами каждый день, поэтому типовые неисправности находим быстро.',
  },
  {
    tag: 'сроки',
    icon: 'clock',
    title: 'Сроки, которые держим',
    text: 'Называем план ремонта сразу и держим вас в курсе статуса — вы планируете рейсы спокойно.',
  },
];

// Реальная последовательность приёмки → нумерация здесь несёт смысл.
const PROCESS = [
  {
    title: 'Принимаем заявку',
    text: 'Оставляете номер — уточняем симптомы и записываем на удобное время.',
  },
  {
    title: 'Диагностика и смета',
    text: 'Фиксируем точную причину неисправности и согласовываем стоимость до начала работ.',
  },
  {
    title: 'Выдаём на ходу',
    text: 'Контрольная проверка перед выдачей и рекомендации по дальнейшему обслуживанию.',
  },
];

export default function Home() {
  const vans = getVansData();

  return (
    <Content>
      <div className="home2">
        {/* HERO — тезис + фирменный «диспетчерский» блок */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__lead">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              Коммерческий автосервис · Санкт-Петербург
            </p>

            <h1 id="hero-title" className="hero__title">
              Возвращаем микроавтобусы<br />
              <span className="accent">в работу.</span>
            </h1>

            <p className="hero__lede">
              Диагностика, ремонт и обслуживание коммерческого транспорта — с понятной
              сметой и сроком, который мы держим.
            </p>

            <div className="hero__actions">
              <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Записаться на сервис" />
              <a className="btn-ghost" href="/contacts">
                <Icon name="map_picker" size={18} />
                <span>Как нас найти</span>
              </a>
            </div>
          </div>

          {/* Signature: сервисный талон / приборный блок */}
          <aside className="ticket" aria-label="Статус сервиса">
            <div className="ticket__status">
              <span className="ticket__dot" aria-hidden="true" />
              <span className="ticket__state">На линии</span>
              <span className="ticket__meta">приём заявок 7/7</span>
            </div>

            <dl className="ticket__readouts">
              {READOUTS.map((r) => (
                <div className="readout" key={r.label}>
                  <dt className="readout__value">
                    {r.value}
                    <span className="readout__unit">{r.unit}</span>
                  </dt>
                  <dd className="readout__label">{r.label}</dd>
                </div>
              ))}
            </dl>

            <p className="ticket__note">
              <Icon name="phone" size={15} />
              <span>Перезвоним в течение рабочего дня</span>
            </p>
          </aside>
        </section>

        {/* ПОЧЕМУ ВОЗВРАЩАЮТСЯ */}
        <section className="block" aria-labelledby="values-title">
          <div className="block__head">
            <h2 id="values-title" className="block__title">Почему к нам возвращаются</h2>
            <p className="block__sub">Меньше простоя, никакой неопределённости.</p>
          </div>

          <div className="values">
            {VALUES.map((v) => (
              <article className="value" key={v.title}>
                <div className="value__icon"><Icon name={v.icon} size={22} /></div>
                <span className="value__tag">{v.tag}</span>
                <h3 className="value__title">{v.title}</h3>
                <p className="value__text">{v.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* КАТАЛОГ */}
        <section className="block block--carousel" aria-label="Микроавтобусы">
          <Carousel
            title={<h2 className="block__title">Какие микроавтобусы обслуживаем</h2>}
            icon={<Icon name="van" />}
            cards={vans.map((van, index) => (
              <VanCard key={index} {...van} />
            ))}
            catalogLink="/vans"
            catalogButtonText="Смотреть полный список"
          />
        </section>

        {/* ПРОЦЕСС — нумерованная последовательность */}
        <section className="block" aria-labelledby="process-title">
          <div className="block__head">
            <h2 id="process-title" className="block__title">Как проходит ремонт</h2>
            <p className="block__sub">Три шага без лишних созвонов и непредсказуемых итогов.</p>
          </div>

          <ol className="process">
            {PROCESS.map((p, i) => (
              <li className="step" key={p.title}>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__title">{p.title}</h3>
                <p className="step__text">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ФИНАЛЬНЫЙ CTA */}
        <section className="closer">
          <div className="closer__text">
            <h2 className="closer__title">Микроавтобус должен зарабатывать, а не стоять в ремонте.</h2>
            <p className="closer__sub">Оставьте заявку — перезвоним, уточним детали и предложим план ремонта под ваш транспорт.</p>
          </div>
          <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Оставить заявку" />
        </section>
      </div>
    </Content>
  );
}
