import {useState} from "react";

import "./App.css";

import Header from "./components/header";
import Footer from "./components/Footer";

function App(){
  function showDummyAlert() {
    alert("I am working");
  }

  return (
    <>
      <Header
        username={"Rukhsana Kausar"}
        isSunny={true}
        showDummyAlert={showDummyAlert}
      />

      <h1>Hellow Today we wil l do Components</h1>
      <Footer />
    </>
  );
}

export default App;

