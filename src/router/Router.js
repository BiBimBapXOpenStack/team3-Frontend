import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import MainPage from "../page/MainPage";
import MainPageLogin from "../page/MainPageLogin";
import RegisterPage from "../page/RegisterPage"
import MyPage from "../page/MyPage"
import WritePage from "../page/WritePage"

export default function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<MainPageLogin />} />
            <Route exact path='/user/login' element={<LoginPage />} />
            <Route exact path = '/users/register' element={<RegisterPage />} />
            <Route exact path = '/user' element={<MyPage />} />
            <Route exact path = '/boards' element={<WritePage />} />
        </Routes>
    );
}