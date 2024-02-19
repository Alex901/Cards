import { useState } from 'react'
import React, { Component } from 'react';
import Card from './Components/Card/Card';
import InputCard from './Components/Card/InputCard/InputCard';
import './App.css'
import CardList from './Components/CardList/CardList';



class App extends Component {
  //style=... just testing
  render() {
    return (
      <div className='header'>
        <h2 style={{ color: Math.random() < 0.5 ? 'green' : 'red'}}>{this.props.title}</h2> 
        <InputCard />
        <CardList />
      </div>
    );
  }
}

export default App;

/* export default App;


 const App = ({title}) => (

  <div className='header'> <h2>{title}</h2> </div>

);

export default App;  */

