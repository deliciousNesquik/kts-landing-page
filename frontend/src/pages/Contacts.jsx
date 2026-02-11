import Content from "../components/Content.js";
import Heading from "../components/texts/Heading.js";
import Icon from "../components/Icon.js";
import InfoBlock from "../components/InfoBlock.js";
import ListBlock from "../components/ListBlock.js";
import ListBlockItem from "../components/ListBlockItem.js";
import '../assets/page/contact.css';
import Text from "../components/texts/Text.js";
import React from "react";
import {linkContact, displayContact} from '../data/contactData.js'

export default function Contact() {
    return (
        <Content>
            <Heading level={1} text="Мы всегда рядом" />
            <div className="spacer" />

            <InfoBlock
                icon={<Icon name="map_picker"/>}
                title={<Text level={"2-1"} text={"Расположение на карте"}/>}
                description={<Text
                    weight={"other"}
                    level={"4-1"}
                    text={"Для детальной информации и расположении нашего автосервиса просмотрите карту, которая находится ниже. Также присутствует возможность перейти в приложение 'Яндекс Карты' чтобы подробно изучить маршрут до нас."}/>}>
            </InfoBlock>

            <div className="spacer" />

            {/* Адаптивная карта */}
            <div className="map-container">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A70510da9903e0419888b8d3da88c7c64b70cedf3fad72b41f26c47073161bdc7&amp;source=constructor"
                    className="responsive-map"
                    title="Карта расположения автосервиса"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>

            <div className="spacer" />
            <Heading level={3} text={"Контакты:"}/>
            <div className="spacer" />

            <ListBlock>
                <ListBlockItem
                    icon={<Icon name="phone"/>}
                    title={<Text level={"2-1"} text={displayContact[0]}/>}
                    description={<Text weight={"other"} level={"4-1"} text={"Нажмите чтобы позвонить нам!"}/>}
                    onClick={() => window.location.href = linkContact[0]}
                />
                <div className="divider" />
                <ListBlockItem
                    icon={<Icon name="phone"/>}
                    title={<Text level={"2-1"} text={displayContact[1]}/>}
                    onClick={() => window.location.href = linkContact[1]}
                />
                <div className="divider" />
                <ListBlockItem
                    icon={<Icon name="phone"/>}
                    title={<Text level={"2-1"} text={displayContact[2]}/>}
                    onClick={() => window.location.href = linkContact[2]}
                />
                <div className="divider" />
                <ListBlockItem
                    icon={<Icon name="email"/>}
                    title={<Text level={"2-1"} text={displayContact[3]}/>}
                    description={<Text weight={"other"} level={"4-1"} text={"Нажмите чтобы написать нам!"}/>}
                    onClick={() => window.location.href = linkContact[2]}
                />
            </ListBlock>
        </Content>
    );
}