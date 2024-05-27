import React from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom';
// import Home from './components/Home/Home';

function Router() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Router
