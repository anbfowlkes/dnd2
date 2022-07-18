import { useState } from 'react'
// import React from 'react'
import './App.css'

import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="screen">
      <video autoPlay muted loop id="myVideo">
        <source src={"public/fireVid.mov"} type="video/mp4" />
      </video>
      <div className="" id="fs-overlay">
      <img 
      id="header-img"
      src={'https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png'}
      />
      <div className="menu-links">
        <h3>{'Create a Character'}</h3>
        <h3>{'About Dungeons & Dragrons'}</h3>
      </div>
      </div>
    </div>
    )    
}

export default App;

/*
const useState = (initialValue) => {
  const setterFunction = () => {
    return [initialValue, setterFunction]
  }
}
//useState is a function that returns an array of two positions

*/