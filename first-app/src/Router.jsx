import React from "react"
import Header from "./CommonComponent/Header"
import Footer from "./CommonComponent/Footer"
import { Outlet } from "react-router-dom"

export default function Router() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
