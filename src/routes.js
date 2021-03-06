import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Todo from "./pages/todo";

const Routing = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route element = { <Login /> }  path="/" exact />
            <Route element = { <Register /> }  path="/register" />
            <Route element = { <Home /> }  path="/home" />
            <Route element = { <Todo /> }  path="/todo" />
        </Routes>
    </BrowserRouter>
   )
}

export default Routing;