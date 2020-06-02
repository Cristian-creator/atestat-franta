import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Cards />
    </div>
  );
}

export default App;
