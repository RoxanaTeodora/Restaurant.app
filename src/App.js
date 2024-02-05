// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
