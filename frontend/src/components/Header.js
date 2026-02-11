import '../assets/header.css'
import {useEffect, useState} from "react";
import Icon from "./Icon.js";
import {PrimaryCTA} from './buttons/index.js';
import Text from './texts/Text.js';
import {IconButton} from "./buttons/index.js";
import { useTheme } from '../context/ThemeContext.js';

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [menuOpen, setMenuOpen] = useState(false);
    const {toggleTheme, themeIcon } = useTheme();
    let currentTab = window.location.pathname.replace("/", "") === "" ? "home" : window.location.pathname.replace("/", "");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const menuItems = [
        {
            name: "Главная",
            reference: "/",
            icon: "home"
        },
        {
            name: "Микроавтобусы",
            reference: "/vans",
            icon: "van"
        },
        {
            name: "О Компании",
            reference: "/info",
            icon: "info"
        },
        {
            name: "Контакты",
            reference: "/contacts",
            icon: "contact"
        },
    ];

    return (
        <header className="header">
            <div className="accessibility">
                <button className="hamburger-menu" aria-label="Открыть меню" onClick={toggleMenu}>
                    <Icon name="hamburger" />
                </button>

                {isMobile && (
                    <IconButton
                        icon={<Icon name={themeIcon}/>}
                        onClick={toggleTheme}
                        className="icon-button--inverse"
                    />
                )}
            </div>

            {(menuOpen || !isMobile) && (
                <>
                    {menuOpen && isMobile && (
                        <div className="line-devider"></div>
                    )}

                    <nav className="navigations" role="navigation" aria-label="Главное меню">
                        {menuItems.map(item => (
                            <a key={item.name} className="navigation-link" href={item.reference}>
                                <Icon
                                    name={item.icon}
                                    fill={item.reference === currentTab ? "#E9152D" : "none"}
                                    size={isMobile ? 28 : 20}
                                />
                                <Text level={"2-2"} text={item.name} weight={"inverse"}></Text>
                            </a>
                        ))}
                        {!isMobile && <>
                            <PrimaryCTA
                                icon={<Icon name="phone" />}
                                text="Записаться на ремонт"
                                href="/appointments"
                            />
                            <IconButton
                                icon={<Icon name={themeIcon}/>}
                                onClick={toggleTheme}
                                className="icon-button--inverse"
                            />
                        </> }

                    </nav>

                    {menuOpen && isMobile && (
                        <div className="line-devider"></div>
                    )}

                    {isMobile && <PrimaryCTA
                        icon={<Icon name="phone" />}
                        text="Записаться на сервис"
                        className="filled"
                        href="/appointments"
                    />}
                </>
            )}

        </header>
    )
}