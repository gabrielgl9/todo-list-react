import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Todo from "./pages/todo";

const Routing = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route element = { <Login /> }  path="/" exact />
            <Route element = { <Todo /> }  path="/todo" />
        </Routes>
    </BrowserRouter>
   )
}

export default Routing;