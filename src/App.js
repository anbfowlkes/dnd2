import { useState } from 'react'
// import React from 'react'
import './App.css'

import './App.css';
import MainMenu from './components/MainMenu'
import CreateACharacter from './components/CreateACharacter'


function App() {
  const [screen, setScreen] = useState('main')

  return (
    <div>
      {
        (screen === 'main') ? 
        <MainMenu setScreen={setScreen}/> :
        <CreateACharacter setScreen={setScreen} />
      }
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