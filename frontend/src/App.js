import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointments from "./pages/Appointments.jsx";
import { ThemeProvider } from './context/ThemeContext.js';
import {lazy} from "react";
import './App.css';

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import Vans from "./pages/Vans.jsx";
import Info from "./pages/Info.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import Contacts from "./pages/Contacts.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <BrowserRouter>
                    <Header/>

                    <Routes>
                        <Route path={"/"} element={<Home/>} />
                        <Route path={"/home"} element={<Home/>} />

                        <Route path={"/vans"} element={<Vans/>} />
                        <Route path={"/info"} element={<Info/>} />
                        <Route path={"/contacts"} element={<Contacts/>} />
                        <Route path={"/appointments"} element={<Appointments/>} />

                        <Route path={"*"} element={<NotFoundPage/>} />
                    </Routes>

                    <Footer/>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;