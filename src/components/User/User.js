import React, { useState } from 'react';
import PropTypes from 'prop-types';


const User = () => {
  const [name, setName] = useState("Tom");
  const [age, setAge] = useState(36);

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleAgeChange(event){
    setAge(event.target.value);
  }

  return(
    <dev>      

      <p>User Component</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      
      <div>
        <p>Name in input:<input type='text' onChange={handleNameChange}></input></p>
        <p>Age in input:<input type='number' min="0" max="120" onChange={handleAgeChange}></input></p>
      </div>

    </dev>
  )
};


User.propTypes = {};

User.defaultProps = {};

export default User;
