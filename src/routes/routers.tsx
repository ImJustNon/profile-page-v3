import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import { ReactElement, useEffect } from 'react';
import React from "react";
import Home from "../pages/HomePage";

function Routers(): ReactElement {
    const navigate = useNavigate();

    return (
        <Routes>
            <Route 
                path={'/'} 
                element={
                    <Home />
                } 
            />
        </Routes>
    );
}



export default Routers;