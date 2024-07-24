import React from 'react';
import PasswordGenerator from './PasswordGenerator';
import { lazy, useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/User/Login'
import Register from './pages/User/Register'
import UserRoute from './components/route/UserRoute';

const App = () => {
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                limit={2}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={{ bounce: 'bounce' }} // Correct syntax for the transition prop
            />
            <BrowserRouter>
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<UserRoute><PasswordGenerator /></UserRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
