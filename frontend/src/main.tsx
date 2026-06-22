import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/theme/theme.css'; // глобальные токены темы — должны грузиться всегда
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals(console.log);
