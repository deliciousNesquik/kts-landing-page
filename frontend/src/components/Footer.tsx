import React from 'react';
import '../assets/footer.css';
import Icon from "./Icon";
import Heading from "./texts/Heading";
import Text from "./texts/Text";
import {linkContact, displayContact} from '../data/contactData'

const Footer = () => {
    // Данные для контактов
    const contactsData = [
        {
            icon: "phone",
            title: displayContact[0],
            description: "Нажмите чтобы позвонить нам!",
            onClick: () => window.location.href = linkContact[0]
        },
        {
            icon: "phone",
            title: displayContact[1],
            description: "Нажмите чтобы позвонить нам!",
            onClick: () => window.location.href = linkContact[1]
        },
        {
            icon: "phone",
            title: displayContact[2],
            description: "Нажмите чтобы позвонить нам!",
            onClick: () => window.location.href = linkContact[2]
        },
        {
            icon: "email",
            title: displayContact[3],
            description: "Нажмите чтобы написать нам!",
            onClick: () => window.location.href = linkContact[3]
        }
    ];

    // Данные для адресов
    const addressesData = [
        {
            icon: "location",
            title: displayContact[4],
            description: "Основной адрес автосервиса. Нажмите чтобы открыть карту и увидеть идеальный маршрут до нас!",
            onClick: () => window.open(linkContact[4], '_blank')
        }
    ];

    // Данные для социальных сетей
    const socialData = [
        {
            icon: "vk",
            title: "Комтранссервис",
            description: "Новости, события и прочие интересные посты!",
            onClick: () => {}
        },
        {
            icon: "telegram",
            title: "Комтранссервис",
            description: "Скидки, акции",
            onClick: () => {}
        }
    ];

    const ListItem = ({ icon, title, description, onClick, clickable = true }) => (
        <div className={`footer-item ${clickable ? 'clickable' : ''}`} onClick={onClick}>
            <div className="footer-item-icon">
                <Icon name={icon} size={24} /> {/* Используем компонент */}
            </div>
            <div className="footer-item-content">
                <div className="footer-item-title">
                    <Text level={"2-1"} text={title} weight={"inverse"}></Text>
                </div>
                {description && <div className="footer-item-description">{
                    <Text level={"4-1"} text={description} weight={"inverse"}></Text>
                }</div>}
            </div>
        </div>
    );

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-header">
                    <Heading level={3} text={"КомТрансСервис"} color={"inverse"}></Heading>
                    <Text level={"2-1"} text={"®"} weight={"inverse"}></Text>
                </div>

                <div className="footer-main">
                    <div className="footer-column">
                        <h3 className="footer-subtitle">
                            <Text level={"2-2"} text={"Контакты:"} weight={"inverse"}></Text>
                        </h3>
                        <div className="footer-list">
                            {contactsData.map((item, index) => (
                                <ListItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    onClick={item.onClick}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-subtitle">
                            <Text level={"2-2"} text={"Адреса:"} weight={"inverse"}/>
                        </h3>
                        <div className="footer-list">
                            {addressesData.map((item, index) => (
                                <ListItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    onClick={item.onClick}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-subtitle">
                            <Text level={"2-2"} text={"Социальные сети:"} weight={"inverse"}/>
                        </h3>
                        <div className="footer-list">
                            {socialData.map((item, index) => (
                                <ListItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    onClick={item.onClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-legal">
                    <p className="footer-disclaimer">
                        <Text level={"5-2"} weight={"inverse"} text={"Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 (2) ГК РФ. Все цены, указанные на данном сайте, носят информационный характер."}></Text>
                    </p>

                    <div className="footer-links">
                        <a href="/privacy-policy" className="footer-link">
                            <Text level={"5-2"} weight={"inverse"} text={"Политика конфиденциальности"}></Text>
                        </a>
                        <a href="/terms-of-use" className="footer-link">
                            <Text level={"5-2"} weight={"inverse"} text={"Условия пользования"}></Text>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;