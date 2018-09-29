import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header1 from "./Header1";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Journal Display</h1>
        </header>
        <p className="App-intro">
         Hello fello user, hope you enjoy the site!
        </p>
          <Header1/>
      </div>
    );
  }
}

export default App;
