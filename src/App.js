import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <h1>hello i am a react app</h1>
         <p>this is rly working</p>
            <Person/>
        </div>
    );
    //   return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'hi i am react app'))
  }
}

export default App;
