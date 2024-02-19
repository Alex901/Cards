import { useState } from 'react'
import React, { Component } from 'react';
import Card from './Components/Card/Card';
import InputCard from './Components/Card/InputCard/InputCard';
import './App.css'
import CardList from './Components/CardList/CardList';


const testData = [
  {name: "Alex901", avatar_url: "https://avatars.githubusercontent.com/u/4184656?v=4",
  company: "Oddbits"}, 
  {name: "mojombo", avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  company: "Facebook"}, 
  {name: "defunkt", avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
  company: "NASA"}, 
  {name: "pjhyett", avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
  company: "Google"}, 
];

class App extends Component {
   state = {
     profiles: testData,
  }
  


  //style=... just testing
  render() {
    return (
      <div className='header'>
        <h2 style={{ color: Math.random() < 0.5 ? 'green' : 'red'}}>{this.props.title}</h2> 
        <InputCard />
        <CardList profiles={this.state.profiles}/>
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

