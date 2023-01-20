import "./App.scss";
import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;