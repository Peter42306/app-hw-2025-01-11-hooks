import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';


const User2 = () => {
  const [user, setUser] = useState({ name: "", age: null });

  function handleNameChange(event){
    setUser({ ...user, name: event.target.value });
  }

  function handleAgeChange(event){
    setUser({ ...user, age: event.target.value });
  }

  return(
    <div>      
      <p>User2 Component</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <p>Name in input:<input type='text' value={user.name} onChange={handleNameChange}></input></p>
      <p>Age in input:<input type='number' value={user.age} min={0} max={120} onChange={handleAgeChange}></input></p>
    </div>
  )
};

User2.propTypes = {};

User2.defaultProps = {};

export default User2;
