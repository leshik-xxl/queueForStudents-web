import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import {Login} from "./page/Login";
import {Header} from "./page/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserContextProvider} from "./context/UserContex";

function App() {

    return (
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="login"/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="queue" element={<Header/>}/>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>

    );
}

export default App;
