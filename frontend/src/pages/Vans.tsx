import { useState } from 'react';
import Content from '../components/Content';
import Heading from '../components/texts/Heading';
import Section from '../components/Section';
import Search from '../components/Search';
import { ToggleButton } from '../components/buttons/index';
import Icon from '../components/Icon';
import '../assets/base.css';
import '../assets/page/vans.css';
import Text from '../components/texts/Text';
import VanView from '../components/VanView';
import getVansData from '../data/vansData';

const VANS_DATA = getVansData();

type ViewMode = 'card' | 'list';

export default function Vans() {
  const [view, setView] = useState<ViewMode>('card');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVans = VANS_DATA.filter((van) => {
    if (!searchQuery.trim()) return true;
    return van.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewChange = (newView: ViewMode) => {
    setView(newView);
  };

  return (
    <Content>
      <Heading level={1} text="Модельный ряд" />
      <div className="search-layout">
        <Section
          header={<Text text="Поиск" level="4-1" weight="other" />}
          content={<Search placeholder="Поиск микроавтобусов..." onSearch={handleSearch} onChange={handleSearch} />}
        />
        <div className="margin-15" />
        <Section
          header={<Text text="Отображение" level="4-1" weight="other" />}
          content={
            <div className="wrapper horizontal gap-10">
              <ToggleButton
                icon={<Icon name="cards" />}
                onClick={() => handleViewChange('card')}
                active={view === 'card'}
                text="Карточки"
              />
              <ToggleButton
                icon={<Icon name="list" />}
                onClick={() => handleViewChange('list')}
                active={view === 'list'}
                text="Список"
              />
            </div>
          }
        />
      </div>
      <div className="margin-15" />
      <VanView vans={filteredVans} view={view} />
    </Content>
  );
}
