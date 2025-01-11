import React, { useState } from 'react';
import PropTypes from 'prop-types';


const User1 = () => {
  const [user, setUser] = useState({ name: "John", age: 55 });

  function handleNameChange(event){
    setUser({ name: event.target.value, age: user.age });
  }
  function handleAgeChange(event){
    setUser({ name: user.name, age: event.target.value })
  }

  return(
    <dev>
      <p>User1 Component</p>
      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
      <p>User input name: <input type='text' onChange={handleNameChange}></input></p>
      <p>User input age <input type='number' min={0} max={120} onChange={handleAgeChange}></input></p>

    </dev>
  )
};

User1.propTypes = {};

User1.defaultProps = {};

export default User1;
