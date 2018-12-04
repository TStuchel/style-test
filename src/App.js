import React, { Component } from 'react';
import './App.css';
import Card from './components/card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card text="A" x="100" y="0" background='green'/>
        <Card text="B" x="300" y="0" background='red'/>
      </div>
    );
  }
}

export default App;
