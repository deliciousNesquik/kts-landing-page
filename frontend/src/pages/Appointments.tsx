import { useState, type ChangeEvent, type FormEvent } from 'react';
import Icon from '../components/Icon';
import Content from '../components/Content';
import '../assets/page/appointments.css';

interface FormData {
  name: string;
  phone: string;
  problem: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function Appointments() {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', problem: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as ApiResponse;

      if (result.success) {
        setStatus('ok');
        setFeedback(result.message || 'Заявка отправлена! Мы скоро вам перезвоним.');
        setFormData({ name: '', phone: '', problem: '' });
      } else {
        setStatus('error');
        setFeedback(result.message || 'Не удалось отправить заявку. Попробуйте ещё раз.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setStatus('error');
      setFeedback('Ошибка сети. Попробуйте ещё раз или позвоните нам.');
    }
  };

  const sending = status === 'sending';

  return (
    <Content>
      <div className="appt2">
        <div className="appt-grid">
          {/* Левая колонка: зачем и что будет дальше */}
          <aside className="appt-intro">
            <p className="eyebrow">
              <span className="eyebrow__mark" aria-hidden="true" />
              Запись · обратный звонок
            </p>
            <h1 className="appt-intro__title">
              Запишитесь<br />
              <span className="accent">на сервис.</span>
            </h1>
            <p className="appt-intro__lede">
              Оставьте номер — перезвоним в течение рабочего дня, уточним симптомы и согласуем
              удобное время. Хранить заявки и спамить не будем.
            </p>

            <ol className="appt-steps">
              <li><span className="appt-steps__dot" aria-hidden="true" />Перезвоним в течение рабочего дня</li>
              <li><span className="appt-steps__dot" aria-hidden="true" />Уточним симптомы и подберём время</li>
              <li><span className="appt-steps__dot" aria-hidden="true" />Назовём план ремонта и срок</li>
            </ol>
          </aside>

          {/* Правая колонка: форма */}
          <div className="appt-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="appt-field">
                <label htmlFor="name">Ваше имя <span className="req">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Как к вам обращаться"
                  autoComplete="name"
                />
              </div>

              <div className="appt-field">
                <label htmlFor="phone">Номер телефона <span className="req">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 (___) ___-__-__"
                  autoComplete="tel"
                />
              </div>

              <div className="appt-field">
                <label htmlFor="problem">Что случилось <span className="appt-field__opt">— необязательно</span></label>
                <textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Коротко опишите проблему — так мы поможем быстрее"
                />
              </div>

              <button type="submit" className="appt-submit" disabled={sending}>
                <Icon name="phone" size={18} />
                <span>{sending ? 'Отправляем…' : 'Записаться на сервис'}</span>
              </button>

              {status === 'ok' && (
                <p className="appt-msg appt-msg--ok" role="status">
                  <Icon name="smile" size={18} />
                  <span>{feedback}</span>
                </p>
              )}
              {status === 'error' && (
                <p className="appt-msg appt-msg--error" role="alert">
                  <Icon name="info" size={18} />
                  <span>{feedback}</span>
                </p>
              )}

              <p className="appt-note">Нажимая кнопку, вы соглашаетесь на обработку контактных данных для обратной связи.</p>
            </form>
          </div>
        </div>
      </div>
    </Content>
  );
}
