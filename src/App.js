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
        showPersons: false
    }

     switchNameHandler = (newName) => {
        // DONT DO THIS this.state.persons[0].name = 'bebo';
        this.setState({persons: [
            {name: 'maximilian', age:28},
            {name: newName, age:22},
            {name: 'mezo', age:24},
        ]})
    }

    nameChangedHandler = (event) =>
    {
        this.setState({persons: [
            {name: 'max', age:28},
            {name: event.target.value, age:22},
            {name: 'mezo', age:24},
        ]})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow});

    }

  render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
    return (
        <div className="App">
        <h1>hello i am a react app</h1>
         <p>this is rly working</p>
            <button
                style={style}
                onClick={this.togglePersonHandler }>Switch Name</button>
            { this.state.showPersons ?
                <div>

            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Max!!')}
                changed={this.nameChangedHandler}

            > my hobbies: bedan </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
                : null
            }
        </div>
    );
    //   return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'hi i am react app'))
  }
}

export default App;
