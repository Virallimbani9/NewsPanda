
import './App.css';
import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import News from './componets/News';
import { Route, Router } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
       
        <Router>
        {/* <News pageSize={5} country="in" category="sports"/> */}
        <Navbar/>
        <Route path='/'><News pageSize={5} country="in"/></Route>
        <Route path='/business'><News pageSize={5} country="in" category="business"/></Route>
        <Route path='/entertainment'><News pageSize={5} country="in" category="entertainment"/></Route>
        <Route path='/sports'><News pageSize={5} country="in" category="sports"/></Route>
        <Route path='/general'><News pageSize={5} country="in" category="general"/></Route>
        <Route path='/health'><News pageSize={5} country="in" category="health"/></Route>
        <Route path='/science'><News pageSize={5} country="in" category="science"/></Route>
        <Route path='/technology'><News pageSize={5} country="in" category="technology"/></Route>

        </Router>
      </div>
    )
  }
}






