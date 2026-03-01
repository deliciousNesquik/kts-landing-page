import Content from '../components/Content';
import Icon from '../components/Icon';
import { PrimaryCTA } from '../components/buttons';
import '../assets/page/info.css';

const PROMISES = [
  {
    icon: 'certificates',
    title: 'Честная диагностика и смета',
    text: 'Сначала показываем проблему и объясняем решение, затем фиксируем стоимость и только после согласования начинаем работы.',
  },
  {
    icon: 'clock',
    title: 'Прогнозируемые сроки',
    text: 'Понимаем, что простой транспорта = потери. Поэтому сразу даем реалистичный срок и держим вас в курсе статуса ремонта.',
  },
  {
    icon: 'smile',
    title: 'Сервис, который не подводит',
    text: 'Говорим простым языком, отвечаем по делу и делаем так, чтобы после визита у вас не осталось вопросов по автомобилю.',
  },
];

const FLOW = [
  {
    step: '01',
    title: 'Связываемся и уточняем задачу',
    text: 'Вы оставляете заявку, мы уточняем симптомы, загрузку авто и подбираем удобное окно для приема.',
  },
  {
    step: '02',
    title: 'Проводим диагностику',
    text: 'Проверяем ключевые узлы, определяем точную причину неисправности и согласовываем план работ.',
  },
  {
    step: '03',
    title: 'Возвращаем авто в работу',
    text: 'После ремонта делаем контрольную проверку и выдаем рекомендации, чтобы снизить риск повторной поломки.',
  },
];

const METRICS = [
  { value: '10+', label: 'лет в коммерческом ремонте' },
  { value: '95%', label: 'клиентов приходят повторно' },
  { value: '7/7', label: 'прием заявок каждый день' },
  { value: '1 день', label: 'частый срок типового ремонта' },
];

export default function Info() {
  return (
    <Content>
      <section className="info-hero fade-in-up">
        <div className="info-hero__main">
          <span className="info-hero__badge">
            <Icon name="stars" size={16} />
            Экспертный сервис коммерческого транспорта
          </span>

          <h1 className="info-hero__title">Сервис, которому можно доверить рабочий транспорт без риска для бизнеса</h1>

          <p className="info-hero__subtitle">
            Мы ремонтируем микроавтобусы так, чтобы вы как можно быстрее вернулись в работу. Прозрачная коммуникация,
            понятная смета и ответственность за результат на каждом этапе.
          </p>

          <div className="info-hero__actions">
            <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Записаться на сервис" />
            <PrimaryCTA href="/contacts" icon={<Icon name="map_picker" />} text="Посмотреть контакты" className="info-hero__ghost" />
          </div>
        </div>

        <aside className="info-hero__aside">
          <h2>Что вы получаете уже с первого обращения</h2>
          <ul>
            <li>
              <Icon name="certificates" size={16} />
              Понятный перечень работ без скрытых пунктов
            </li>
            <li>
              <Icon name="clock" size={16} />
              Согласованные сроки и статус ремонта по ходу работ
            </li>
            <li>
              <Icon name="spanner" size={16} />
              Решение причины поломки, а не временный компромисс
            </li>
          </ul>
        </aside>
      </section>

      <section className="info-metrics fade-in-up">
        {METRICS.map((item) => (
          <article key={item.label} className="info-metrics__item">
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="info-promises fade-in-up">
        <header className="info-section-header">
          <h2>Почему владельцы микроавтобусов выбирают нас</h2>
          <p>Мы строим сервис вокруг вашей операционной задачи: минимальный простой и предсказуемый результат.</p>
        </header>

        <div className="info-promises__grid">
          {PROMISES.map((item) => (
            <article key={item.title} className="info-promises__card">
              <div className="info-promises__icon">
                <Icon name={item.icon} size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-flow fade-in-up">
        <header className="info-section-header">
          <h2>Как мы работаем</h2>
          <p>Простой и удобный процесс без лишней бюрократии и непредсказуемых итогов.</p>
        </header>

        <div className="info-flow__grid">
          {FLOW.map((item) => (
            <article key={item.step} className="info-flow__item">
              <span className="info-flow__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-final-cta fade-in-up">
        <div>
          <h2>Оставьте заявку сейчас и получите план работ уже сегодня</h2>
          <p>Мы свяжемся с вами, оценим задачу и предложим оптимальный маршрут ремонта под ваш микроавтобус.</p>
        </div>
        <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Оставить заявку" />
      </section>
    </Content>
  );
}
