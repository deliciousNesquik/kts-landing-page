export interface VanModel {
  id: string;
  image: string;
  title: string;
  vehicle_class: string;
  description: string;
  serviceTags: string[];
  maintenanceLevel: 'Регулярно обслуживаем' | 'Обслуживаем по записи';
}

export default function getVansData(): VanModel[] {
  return [
    {
      id: 'mercedes-sprinter',
      image: '/vans/mercedes-sprinter.png',
      title: 'Mercedes Sprinter',
      vehicle_class: 'Большой коммерческий фургон',
      description: 'Премиальный микроавтобус с высоким уровнем комфорта и надежной платформой для ежедневной работы.',
      serviceTags: ['Двигатель', 'Трансмиссия', 'Подвеска'],
      maintenanceLevel: 'Регулярно обслуживаем',
    },
    {
      id: 'volkswagen-transporter',
      image: '/vans/volkswagen_transporter.png',
      title: 'Volkswagen Transporter',
      vehicle_class: 'Компактный городской фургон',
      description: 'Компактный и маневренный вариант для города и коротких маршрутов с европейской эргономикой.',
      serviceTags: ['Ходовая часть', 'Электрика', 'ТО'],
      maintenanceLevel: 'Регулярно обслуживаем',
    },
    {
      id: 'volkswagen-crafter',
      image: '/vans/volkswagen-crafter.png',
      title: 'Volkswagen Crafter',
      vehicle_class: 'Среднетоннажный фургон',
      description: 'Универсальный коммерческий фургон для грузовых и пассажирских задач с прочной архитектурой.',
      serviceTags: ['Тормозная система', 'Топливная система', 'ТО'],
      maintenanceLevel: 'Регулярно обслуживаем',
    },
    {
      id: 'ford-transit',
      image: '/vans/ford-transit.png',
      title: 'Ford Transit',
      vehicle_class: 'Универсальный коммерческий фургон',
      description: 'Надежный рабочий микроавтобус с просторным салоном и большим ресурсом для интенсивной эксплуатации.',
      serviceTags: ['Двигатель', 'Диагностика', 'Подвеска'],
      maintenanceLevel: 'Регулярно обслуживаем',
    },
    {
      id: 'fiat-ducato',
      image: '/vans/fiat-ducato.png',
      title: 'Fiat Ducato',
      vehicle_class: 'Легкий коммерческий фургон',
      description: 'Экономичный и популярный коммерческий транспорт с доступным обслуживанием и простыми запчастями.',
      serviceTags: ['ТО', 'Тормоза', 'Рулевое управление'],
      maintenanceLevel: 'Регулярно обслуживаем',
    },
    {
      id: 'peugeot-boxer',
      image: '/vans/peugeot-boxer.png',
      title: 'Peugeot Boxer',
      vehicle_class: 'Легкий коммерческий фургон',
      description: 'Практичная модель для доставки и сервиса с простым доступом к основным агрегатам.',
      serviceTags: ['Подвеска', 'Сцепление', 'Электрика'],
      maintenanceLevel: 'Регулярно обслуживаем',
    },
    {
      id: 'citroen-jumper',
      image: '/vans/citroen-jumper.png',
      title: 'Citroen Jumper',
      vehicle_class: 'Легкий коммерческий фургон',
      description: 'Сбалансированный вариант для бизнеса с хорошей ремонтопригодностью и доступными комплектующими.',
      serviceTags: ['ТО', 'Система охлаждения', 'Трансмиссия'],
      maintenanceLevel: 'Регулярно обслуживаем',
    },
    {
      id: 'gaz-next',
      image: '/vans/gaz-next.png',
      title: 'Газ NEXT',
      vehicle_class: 'Российский коммерческий фургон',
      description: 'Модель, адаптированная к местным условиям эксплуатации и интенсивной рабочей нагрузке.',
      serviceTags: ['Ремонт ходовой', 'Электрика', 'Капремонт узлов'],
      maintenanceLevel: 'Обслуживаем по записи',
    },
    {
      id: 'iveco-daily',
      image: '/vans/daily-furgone.png',
      title: 'Iveco Daily',
      vehicle_class: 'Профессиональный коммерческий фургон',
      description: 'Усиленная конструкция и широкие варианты комплектации для сложных коммерческих задач.',
      serviceTags: ['Диагностика', 'Тормоза', 'Топливная аппаратура'],
      maintenanceLevel: 'Обслуживаем по записи',
    },
  ];
}
