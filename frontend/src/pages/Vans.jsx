import Content from "../components/Content.js";
import Heading from "../components/texts/Heading.js";
import Section from "../components/Section.js";
import Search from "../components/Search.js";
import {ToggleButton} from '../components/buttons/index.js';
import Icon from "../components/Icon.js";
import '../assets/base.css'
import '../assets/page/vans.css'
import { useState } from "react";
import Text from "../components/texts/Text.js";
import VanView from "../components/VanView.js";
import getVansData from "../data/vansData.js";

const VANS_DATA = getVansData();

export default function Vans() {
    const [view, setView] = useState("card");
    const [searchQuery, setSearchQuery] = useState("");

    // Обработчик клика по микроавтобусу (опционально)
    const handleVanClick = (vanData) => {
        console.log('Выбран микроавтобус:', vanData);
    };

    // Фильтрация по поиску - ИСПРАВЛЕНО
    const filteredVans = VANS_DATA.filter(van => {
        if (!searchQuery.trim()) return true;
        return van.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };

    return (
        <Content>
            <Heading level={1} text={"Модельный ряд"}></Heading>
            <div className="search-layout">
                <Section
                    header={<Text text="Поиск" level={"4-1"} weight={"other"}/>}
                    content={<Search
                        placeholder="Поиск микроавтобусов..."
                        onSearch={handleSearch}
                        onChange={handleSearch}
                    />}
                />
                <div className="margin-15"/>
                <Section
                    header={<Text text="Отображение" level={"4-1"} weight={"other"}/>}
                    content={
                        (<div className="wrapper horizontal gap-10">
                            <ToggleButton
                                icon={<Icon name={"cards"}/>}
                                onClick={() => handleViewChange("card")}
                                active={view === "card"}
                                text={"Карточки"}
                            />
                            <ToggleButton
                                icon={<Icon name={"list"}/>}
                                onClick={() => handleViewChange("list")}
                                active={view === "list"}
                                text={"Список"}/>
                        </div>)
                    }
                />
            </div>
            <div className="margin-15"/>
            <VanView
                vans={filteredVans}
                view={view}
                onVanClick={handleVanClick}
            />
        </Content>
    );
}