import React, { Component } from 'react';
import './App.css';
// import Radium , { StyleRoot } from 'radium';
import styled from 'styled-components';

import Person from './Person/Person';

class App extends Component {

  state = {
    personNames : [
      { id: 0, name: 'John', age: 30},
      { id: 1, name: 'James', age: 25 },
      { id: 2, name: 'Johathan', age: 32 },
    ], 
    showPersons: false
  };

  switchNameHandler = (name1, name2) => {
    this.setState ({
      personNames: [
        { id: 0, name: name1, age: 35 },
        { id: 1, name: name2, age: 25 },
        { id: 2, name: 'Johathan', age: 32 },
      ]  
    });
  };

  deleteNameHandler = (personsIndex) => {
    let tempPersons = this.state.personNames.slice();
    tempPersons.splice(personsIndex, 1);
    this.setState({personNames : tempPersons});
  }

  changeNameHandler = (event, personId) => {
    let tempPersons = [...this.state.personNames];
    
    let personIndex = tempPersons.findIndex( ele => {
      return ele.id === personId;
    });

    tempPersons[personIndex].name = event.target.value;

    this.setState({personName: tempPersons});
  };

  showNamesHandler = () => {
    let presentPos = this.state.showPersons;
    this.setState({
      showPersons: !presentPos
    });
  }  

  render() {
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      margin: '4px',
      cursor: 'pointer',
      border: '1px solid blue',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    const ToggleBtn =  styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      padding: 8px;
      margin: 4px;
      cursor: pointer;
      border: 1px solid blue;

      &:hover {
        background-color: ${props => props.alt ? 'Coral' : 'lightgreen'};
        color: black;
      }
    `;

    let personsEle = null;

    if(this.state.showPersons) {
      personsEle = (
        <div>
          {
            this.state.personNames.map( (ele, index) => {
              return (
                <Person 
                  name = {ele.name}
                  age = {ele.age}
                  key = {ele.id}
                  clickMethod = { () => this.deleteNameHandler(index) }
                  changeMethod = { (event) => this.changeNameHandler(event, ele.id) }
                >
                </Person>
              );
            })
          }
        </div>
      );
      
      btnStyle.backgroundColor = 'red';

    }

    const firstLineStyle = [];

    if(this.state.personNames.length <= 2) {
      firstLineStyle.push('red');
    }

    if(this.state.personNames.length <= 1) {
      firstLineStyle.push('bold');
    }

    if(this.state.personNames.length <= 0) {
      firstLineStyle.push('blink');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={ firstLineStyle.join(' ') }>List of persons</p>
          <button
            style={btnStyle} 
            onClick={this.switchNameHandler.bind(this, 'Jojo', 'Mojo')}>
              Switch name
          </button>
          <br/>
          <ToggleBtn 
            alt = {this.state.showPersons ? 1: 0}
            key = 'toggleBtn'
            onClick = {this.showNamesHandler}>
              Toggle Persons
          </ToggleBtn>
          {personsEle}
        </div>
      );
    
    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "manually creating elements"));
  }
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {

//   const [personsState, setPersonsState] = useState({
//     personNames : [
//       {name: 'John', age: 30},
//       { name: 'James', age: 25 },
//       { name: 'Johathan', age: 32 },
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonsState ({
//       personNames: [
//         { name: 'Johnny', age: 35 },
//         { name: 'James', age: 25 },
//         { name: 'Johathan', age: 32 },
//       ]  
//     });
//   };

//   return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <button onClick={switchNameHandler}>Switch name</button>
//           <Person name={personsState.personNames[0].name} age={personsState.personNames[0].age}/>
//           <Person name={personsState.personNames[1].name} age={personsState.personNames[1].age} >I love chocolates.</Person>
//           <Person name={personsState.personNames[2].name} age={personsState.personNames[2].age} />        
//       </div>
//     );

// };

// export default app;