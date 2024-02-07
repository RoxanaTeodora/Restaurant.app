// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/nav-bar/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/pages/Menu";
import Home from "./components/pages/Home";
import Order from "./components/pages/Order";
import Reservation from "./components/pages/Reservation";
// import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
