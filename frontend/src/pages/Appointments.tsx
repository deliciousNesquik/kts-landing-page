import { useState, type ChangeEvent, type FormEvent, type CSSProperties } from 'react';
import Heading from '../components/texts/Heading';
import InfoBlock from '../components/InfoBlock';
import Icon from '../components/Icon';
import Text from '../components/texts/Text';
import Content from '../components/Content';
import { PrimaryCTA } from '../components/buttons/index';

interface FormData {
  name: string;
  phone: string;
  problem: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export default function Appointments() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    problem: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const originalText = submitButton?.textContent;

    if (submitButton) {
      submitButton.textContent = 'Отправка...';
      submitButton.disabled = true;
    }

    try {
      const response = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as ApiResponse;

      if (result.success) {
        alert(result.message);
        setFormData({
          name: '',
          phone: '',
          problem: '',
        });
      } else {
        alert(`Ошибка: ${result.message}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка сети. Попробуйте еще раз.');
    } finally {
      if (submitButton && typeof originalText === 'string') {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    }
  };

  return (
    <Content>
      <Heading level={1} text="Обратный звонок" />

      <div style={{ width: '100%', height: '15px' }} />

      <InfoBlock
        icon={<Icon name="clock" />}
        title={<Text level="2-1" text="Перезвоним сами!" />}
        description={
          <Text
            weight="other"
            level="4-1"
            text="Заполните форму для обратного звонка ниже, указав свое имя, номер телефона на который поступит звонок. По возможности опишите проблему, чтобы мы помогли Вам быстрее."
          />
        }
      />

      <div style={{ width: '100%', height: '15px' }} />

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            <Text level="3-1" text="Ваше имя*" weight="medium" />
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

        <div style={{ width: '100%', height: '10px' }} />

        <div style={styles.inputGroup}>
          <label htmlFor="phone" style={styles.label}>
            <Text level="3-1" text="Номер телефона*" weight="medium" />
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

        <div style={{ width: '100%', height: '10px' }} />

        <div style={styles.inputGroup}>
          <label htmlFor="problem" style={styles.label}>
            <Text level="3-1" text="Описание проблемы" weight="medium" />
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

        <div style={{ width: '100%', height: '20px' }} />

        <PrimaryCTA type="submit" icon={<Icon name="phone" />} text="Записаться на сервис" className="filled" />
      </form>
    </Content>
  );
}

const styles: Record<string, CSSProperties> = {
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
};

const styleSheet = document.styleSheets[0];
if (styleSheet) {
  styleSheet.insertRule(
    `
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(233, 21, 45, 0.1);
    }
  `,
    styleSheet.cssRules.length,
  );

  styleSheet.insertRule(
    `
    button:hover {
      background-color: #c51225;
      transform: translateY(-1px);
    }
  `,
    styleSheet.cssRules.length,
  );

  styleSheet.insertRule(
    `
    button:active {
      transform: translateY(0);
    }
  `,
    styleSheet.cssRules.length,
  );
}
