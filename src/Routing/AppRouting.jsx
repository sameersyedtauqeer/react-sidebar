import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Layout from '../Pages/Layout';

const AppRouting = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AppRouting