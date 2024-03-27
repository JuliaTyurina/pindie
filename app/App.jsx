"use client"

import { Header } from "@/app/Components/Header/Header";
import { Footer } from "@/app/Components/Footer/Footer";
import { useEffect } from "react";
import { useStore } from "@/app/store/app-store";

export const App = (props) => {
    const store = useStore()

    useEffect(() => {
        store.checkAuth()
    }, [])

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
} 