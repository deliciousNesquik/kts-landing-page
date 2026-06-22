import Content from '../components/Content';
import Icon from '../components/Icon';
import { PrimaryCTA } from '../components/buttons';
import '../assets/page/info.css';

const METRICS = [
  { value: '10+', unit: 'лет', label: 'в коммерческом ремонте' },
  { value: '95', unit: '%', label: 'клиентов приходят повторно' },
  { value: '7/7', unit: '', label: 'приём заявок каждый день' },
  { value: '1', unit: 'день', label: 'частый срок типового ремонта' },
];

const PROMISES = [
  {
    icon: 'certificates',
    tag: 'диагностика',
    title: 'Честная диагностика и смета',
    text: 'Сначала показываем проблему и объясняем решение, фиксируем стоимость — и только после согласования начинаем работы.',
  },
  {
    icon: 'clock',
    tag: 'сроки',
    title: 'Прогнозируемые сроки',
    text: 'Простой транспорта — это потери. Поэтому сразу даём реалистичный срок и держим вас в курсе статуса ремонта.',
  },
  {
    icon: 'smile',
    tag: 'сервис',
    title: 'Сервис, который не подводит',
    text: 'Говорим простым языком и делаем так, чтобы после визита у вас не осталось вопросов по автомобилю.',
  },
];

const FLOW = [
  {
    title: 'Связываемся и уточняем задачу',
    text: 'Вы оставляете заявку, мы уточняем симптомы и загрузку авто, подбираем удобное окно для приёма.',
  },
  {
    title: 'Проводим диагностику',
    text: 'Проверяем ключевые узлы, определяем точную причину неисправности и согласовываем план работ.',
  },
  {
    title: 'Возвращаем авто в работу',
    text: 'После ремонта — контрольная проверка и рекомендации, чтобы снизить риск повторной поломки.',
  },
];

export default function Info() {
  return (
    <Content>
      <div className="info2">
        {/* HERO с реальным фото цеха */}
        <section className="ihero">
          <div className="ihero__lead">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              О сервисе · Санкт-Петербург
            </p>
            <h1 className="ihero__title">
              Сервис, которому доверяют<br />
              <span className="accent">рабочий транспорт.</span>
            </h1>
            <p className="ihero__lede">
              Ремонтируем микроавтобусы так, чтобы вы быстрее вернулись в работу. Прозрачная
              коммуникация, понятная смета и ответственность за результат на каждом этапе.
            </p>
            <div className="ihero__actions">
              <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Записаться на сервис" />
              <a className="btn-ghost" href="/contacts">
                <Icon name="map_picker" size={18} />
                <span>Посмотреть контакты</span>
              </a>
            </div>
          </div>

          <figure className="ihero__photo">
            <img src="/photos/service-bay.jpg" alt="Микроавтобус Ford Transit на подъёмнике в нашем цеху" loading="lazy" />
            <figcaption>Наш цех · подъёмники под коммерческий транспорт</figcaption>
          </figure>
        </section>

        {/* МЕТРИКИ как приборные показания */}
        <section className="istats">
          {METRICS.map((m) => (
            <div className="istat" key={m.label}>
              <span className="istat__value">
                {m.value}
                {m.unit && <span className="istat__unit">{m.unit}</span>}
              </span>
              <span className="istat__label">{m.label}</span>
            </div>
          ))}
        </section>

        {/* ПОЧЕМУ ВЫБИРАЮТ */}
        <section className="iblock">
          <div className="iblock__head">
            <h2 className="iblock__title">Почему владельцы микроавтобусов выбирают нас</h2>
            <p className="iblock__sub">Сервис строится вокруг вашей задачи: минимальный простой и предсказуемый результат.</p>
          </div>
          <div className="iwhy">
            {PROMISES.map((p) => (
              <article className="iwhy__card" key={p.title}>
                <div className="iwhy__icon"><Icon name={p.icon} size={22} /></div>
                <span className="iwhy__tag">{p.tag}</span>
                <h3 className="iwhy__title">{p.title}</h3>
                <p className="iwhy__text">{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ГДЕ МЫ РАБОТАЕМ — фото базы и цеха */}
        <section className="iblock">
          <div className="iblock__head">
            <h2 className="iblock__title">Где мы работаем</h2>
            <p className="iblock__sub">
              Просторный отапливаемый цех с подъёмниками под фургоны и микроавтобусы — место,
              где вашим транспортом занимаются всерьёз.
            </p>
          </div>
          <div className="ishop">
            <figure className="ishop__photo ishop__photo--wide">
              <img src="/photos/exterior.jpg" alt="Здание нашего сервиса снаружи" loading="lazy" />
              <figcaption>Наша база</figcaption>
            </figure>
            <figure className="ishop__photo">
              <img src="/photos/hall.jpg" alt="Цех с микроавтобусом на подъёмнике" loading="lazy" />
              <figcaption>Ремонтный цех</figcaption>
            </figure>
          </div>
        </section>

        {/* КАК МЫ РАБОТАЕМ — последовательность */}
        <section className="iblock">
          <div className="iblock__head">
            <h2 className="iblock__title">Как мы работаем</h2>
            <p className="iblock__sub">Простой процесс без лишней бюрократии и непредсказуемых итогов.</p>
          </div>
          <ol className="iflow">
            {FLOW.map((s, i) => (
              <li className="istep" key={s.title}>
                <span className="istep__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="istep__title">{s.title}</h3>
                <p className="istep__text">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ФИНАЛЬНЫЙ CTA */}
        <section className="icta">
          <div className="icta__text">
            <h2 className="icta__title">Оставьте заявку — и получите план работ уже сегодня.</h2>
            <p className="icta__sub">Свяжемся, оценим задачу и предложим оптимальный маршрут ремонта под ваш микроавтобус.</p>
          </div>
          <PrimaryCTA href="/appointments" icon={<Icon name="phone" />} text="Оставить заявку" />
        </section>
      </div>
    </Content>
  );
}
