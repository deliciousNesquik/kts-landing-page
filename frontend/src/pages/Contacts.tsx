import Content from '../components/Content';
import Icon from '../components/Icon';
import '../assets/page/contact.css';
import { linkContact, displayContact } from '../data/contactData';

const MAP_SRC =
  'https://yandex.ru/map-widget/v1/?um=constructor%3A70510da9903e0419888b8d3da88c7c64b70cedf3fad72b41f26c47073161bdc7&amp;source=constructor';

// Способы связи из данных контактов.
const METHODS = [
  { icon: 'phone', label: 'Телефон', value: displayContact[0], href: linkContact[0], mono: true },
  { icon: 'phone', label: 'Телефон', value: displayContact[1], href: linkContact[1], mono: true },
  { icon: 'phone', label: 'Телефон', value: displayContact[2], href: linkContact[2], mono: true },
  { icon: 'email', label: 'Почта', value: displayContact[3], href: linkContact[3], mono: false },
  { icon: 'map_picker', label: 'Адрес', value: displayContact[4], href: linkContact[4], mono: false },
];

export default function Contact() {
  return (
    <Content>
      <div className="contacts2">
        <section className="cintro">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            Контакты · Санкт-Петербург
          </p>
          <h1 className="cintro__title">Мы всегда на связи</h1>
          <p className="cintro__lede">
            Позвоните или напишите — поможем с диагностикой, ремонтом и записью на сервис.
            Заявки принимаем ежедневно.
          </p>
        </section>

        <div className="ccols">
          {/* Способы связи */}
          <div className="cpanel">
            <ul className="cmethods">
              {METHODS.map((m, i) => {
                const external = m.href.startsWith('http');
                return (
                  <li key={i}>
                    <a
                      className="cmethod"
                      href={m.href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      <span className="cmethod__icon"><Icon name={m.icon} size={20} /></span>
                      <span className="cmethod__body">
                        <span className="cmethod__label">{m.label}</span>
                        <span className={`cmethod__value ${m.mono ? 'is-mono' : ''}`}>{m.value}</span>
                      </span>
                      <span className="cmethod__go" aria-hidden="true">
                        <Icon name="arrow_right" size={18} />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="cstatus">
              <span className="cstatus__dot" aria-hidden="true" />
              Заявки принимаем ежедневно, без выходных
            </p>
          </div>

          {/* Карта */}
          <div className="cmap">
            <div className="cmap__frame">
              <iframe
                src={MAP_SRC}
                title="Карта расположения автосервиса"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <a className="cmap__link" href={linkContact[4]} target="_blank" rel="noreferrer">
              <Icon name="map_picker" size={16} />
              <span>Построить маршрут в Яндекс.Картах</span>
              <Icon name="arrow_right" size={16} />
            </a>
          </div>
        </div>
      </div>
    </Content>
  );
}
