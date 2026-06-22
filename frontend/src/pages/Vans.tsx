import { useState } from 'react';
import Content from '../components/Content';
import Search from '../components/Search';
import { ToggleButton } from '../components/buttons/index';
import Icon from '../components/Icon';
import '../assets/base.css';
import '../assets/page/vans.css';
import VanView from '../components/VanView';
import getVansData from '../data/vansData';

const VANS_DATA = getVansData();

type ViewMode = 'card' | 'list';

// Склонение слова «модель» по числу.
function pluralModels(n: number): string {
  const forms = ['модель', 'модели', 'моделей'];
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
  return forms[2];
}

export default function Vans() {
  const [view, setView] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVans = VANS_DATA.filter((van) => {
    if (!searchQuery.trim()) return true;
    return van.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Content>
      <div className="vans2">
        {/* Вступление: сразу ясно, что это за страница */}
        <section className="vans-intro">
          <p className="eyebrow">
            <span className="eyebrow__mark" aria-hidden="true" />
            Модельный ряд · что мы ремонтируем
          </p>
          <h1 className="vans-intro__title">Микроавтобусы, которые мы обслуживаем</h1>
          <p className="vans-intro__lede">
            Коммерческие модели, по которым у нас есть опыт, запчасти и отработанные регламенты
            ремонта. По любой из них — диагностика, ремонт и плановое обслуживание.
          </p>
          <div className="vans-intro__legend">
            <span className="legend"><i className="legend__dot legend__dot--go" aria-hidden="true" />Регулярно обслуживаем</span>
            <span className="legend"><i className="legend__dot legend__dot--wait" aria-hidden="true" />Обслуживаем по записи</span>
          </div>
        </section>

        {/* Панель: поиск + переключатель вида */}
        <div className="vans-bar">
          <Search
            className="vans-bar__search"
            placeholder="Поиск по названию модели…"
            onSearch={setSearchQuery}
            onChange={setSearchQuery}
          />
          <div className="vans-bar__view" role="group" aria-label="Вид отображения">
            <span className="vans-bar__view-label">Вид</span>
            <ToggleButton
              icon={<Icon name="list" />}
              onClick={() => setView('list')}
              active={view === 'list'}
              text="Список"
            />
            <ToggleButton
              icon={<Icon name="cards" />}
              onClick={() => setView('card')}
              active={view === 'card'}
              text="Карточки"
            />
          </div>
        </div>

        <p className="vans-count">
          <strong>{filteredVans.length}</strong> {pluralModels(filteredVans.length)} в работе
          {searchQuery.trim() && <> по запросу «{searchQuery.trim()}»</>}
        </p>

        {filteredVans.length > 0 ? (
          <VanView vans={filteredVans} view={view} />
        ) : (
          <div className="vans-empty">
            <Icon name="search" size={28} />
            <h2 className="vans-empty__title">Модель не найдена</h2>
            <p className="vans-empty__text">
              По запросу «{searchQuery.trim()}» в списке ничего нет. Проверьте название или
              позвоните нам — возможно, мы всё равно сможем помочь.
            </p>
          </div>
        )}
      </div>
    </Content>
  );
}
