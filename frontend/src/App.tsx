import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Appointments from './pages/Appointments';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Vans from './pages/Vans';
import Info from './pages/Info';
import NotFoundPage from './pages/NotFound';
import Contacts from './pages/Contacts';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/vans" element={<Vans />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/appointments" element={<Appointments />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
