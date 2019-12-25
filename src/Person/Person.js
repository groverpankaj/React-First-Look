import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.clickMethod}>I am {props.name} and my age is {props.age}. {props.children}</p>
      <input type='text' onChange={props.changeMethod}></input>
    </div>
  )
};


export default person;

