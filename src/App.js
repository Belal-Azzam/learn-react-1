import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

    state = {
        persons: [
            {name: 'max', age:28},
            {name: 'belal', age:22},
            {name: 'mezo', age:24},
        ],

    }

     switchNameHandler = (newName) => {
        // DONT DO THIS this.state.persons[0].name = 'bebo';
        this.setState({persons: [
            {name: 'maximilian', age:28},
            {name: newName, age:22},
            {name: 'mezo', age:24},
        ]})
    }

  render() {
    return (
        <div className="App">
        <h1>hello i am a react app</h1>
         <p>this is rly working</p>
            <button onClick={() => this.switchNameHandler('maximilian !!!') }>Switch Name</button>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Max!!')}
            > my hobbies: bedan </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
    );
    //   return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'hi i am react app'))
  }
}

export default App;
