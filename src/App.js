import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    personNames : [
      {name: 'John', age: 30},
      { name: 'James', age: 25 },
      { name: 'Johathan', age: 32 },
    ]
  };

  switchNameHandler = (name1, name2) => {
    this.setState ({
      personNames: [
        { name: name1, age: 35 },
        { name: name2, age: 25 },
        { name: 'Johathan', age: 32 },
      ]  
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      personNames: [
        { name: 'John', age: 35 },
        { name: event.target.value, age: 25 },
        { name: 'Johathan', age: 32 },
      ]
    });
  };

  render() {
    const btnStyle = {
      backgroudColor: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid blue',
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={btnStyle} 
          onClick={this.switchNameHandler.bind(this, 'Jojo', 'Mojo')}>
            Switch name
        </button>
        <Person name={this.state.personNames[0].name} age={this.state.personNames[0].age}/>
        <Person 
          name={this.state.personNames[1].name} 
          age={this.state.personNames[1].age} 
          clickMethod={this.switchNameHandler.bind(this, 'Lily', 'Silly')}
          changeMethod={this.changeNameHandler}>I love chocolates.</Person>
        <Person name={this.state.personNames[2].name} age={this.state.personNames[2].age} />        
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