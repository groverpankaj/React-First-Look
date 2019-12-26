import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const person = (props) => {

  const StyledDiv =  styled.div`
    width: 60%;
    margin: 16px auto;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    border: 1px solid #eee;

    &:hover {
      background: #ffe;
    }

    @media (min-width: 550px) : {
      width: '450px'
  `;

  

  return (
    <StyledDiv>
      <p onClick={props.clickMethod}>I am {props.name} and my age is {props.age}. {props.children}</p>
      <input type='text' onChange={props.changeMethod}></input>
    </StyledDiv>
  )
};


export default person;

