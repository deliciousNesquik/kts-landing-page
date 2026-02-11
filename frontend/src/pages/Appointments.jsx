import Heading from '../components/texts/Heading.js'
import InfoBlock from '../components/InfoBlock.js'
import Icon from '../components/Icon.js'
import Text from "../components/texts/Text.js";
import Content from "../components/Content.js";
import {PrimaryCTA} from "../components/buttons/index.js";
import { useState } from 'react';
//import {get} from '../../data/vansData.js'

export default function Appointments() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        problem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Показываем загрузку
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Отправка...';
        submitButton.disabled = true;

        try {
            // Отправляем данные на наш бэкенд
            const response = await fetch('/api/send-request', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                alert(result.message);
                setFormData({
                    name: '',
                    phone: '',
                    problem: ''
                });
            } else {
                alert('Ошибка: ' + result.message);
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка сети. Попробуйте еще раз.');
        } finally {
            // Восстанавливаем кнопку
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    };

    return (
        <Content>
            <Heading level={1} text={"Обратный звонок"}/>

            <div style={{ width: "100%", height: "15px" }}/>

            <InfoBlock
                icon={<Icon name="clock"/>}
                title={<Text level={"2-1"} text={"Перезвоним сами!"}/>}
                description={<Text
                    weight={"other"}
                    level={"4-1"}
                    text={"Заполните форму для обратного звонка ниже, указав свое имя, номер телефона на который поступит звонок. По возможности опишите проблему, чтобы мы помогли Вам быстрее."}/>}>
            </InfoBlock>

            <div style={{ width: "100%", height: "15px" }}/>

            {/* Форма для заявки */}
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Поле Имя */}
                <div style={styles.inputGroup}>
                    <label htmlFor="name" style={styles.label}>
                        <Text level={"3-1"} text={"Ваше имя*"} weight="medium"/>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="Введите ваше имя"
                    />
                </div>

                <div style={{ width: "100%", height: "10px" }}/>

                {/* Поле Телефон */}
                <div style={styles.inputGroup}>
                    <label htmlFor="phone" style={styles.label}>
                        <Text level={"3-1"} text={"Номер телефона*"} weight="medium"/>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="+7 (XXX) XXX-XX-XX"
                    />
                </div>

                <div style={{ width: "100%", height: "10px" }}/>

                {/* Поле Описание проблемы */}
                <div style={styles.inputGroup}>
                    <label htmlFor="problem" style={styles.label}>
                        <Text level={"3-1"} text={"Описание проблемы"} weight="medium"/>
                    </label>
                    <textarea
                        id="problem"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        style={styles.textarea}
                        placeholder="Опишите вашу проблему подробнее..."
                        rows={4}
                    />
                </div>

                <div style={{ width: "100%", height: "20px" }}/>

                {/* Кнопка отправки формы */}
                <PrimaryCTA
                    type="submit"
                    icon={<Icon name="phone" />}
                    text="Записаться на сервис"
                    className="filled"
                />
            </form>
        </Content>
    )
}

const styles = {
    form: {
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    inputGroup: {
        width: '100%',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        color: 'var(--color-text-primary)',
    },
    input: {
        width: '100%',
        padding: '12px 16px',
        border: '2px solid var(--color-surface-secondary)',
        borderRadius: '8px',
        backgroundColor: 'var(--color-surface-primary)',
        color: 'var(--color-text-primary)',
        fontSize: '16px',
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
        boxSizing: 'border-box',
    },
    textarea: {
        width: '100%',
        padding: '12px 16px',
        border: '2px solid var(--color-surface-secondary)',
        borderRadius: '8px',
        backgroundColor: 'var(--color-surface-primary)',
        color: 'var(--color-text-primary)',
        fontSize: '16px',
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
        resize: 'vertical',
        minHeight: '100px',
        boxSizing: 'border-box',
    },
    submitButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: '100%',
        padding: '14px 24px',
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-text-inverse)',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit',
    },
    buttonIcon: {
        width: '20px',
        height: '20px',
    }
}

// Добавляем стили для состояний hover и focus
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    input:focus, textarea:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(233, 21, 45, 0.1);
    }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
    button:hover {
        background-color: #c51225;
        transform: translateY(-1px);
    }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
    button:active {
        transform: translateY(0);
    }
`, styleSheet.cssRules.length);