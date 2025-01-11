import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ChangerTitle = () => {
  const [name, setName] = useState("Tommy");

  React.useEffect(()=>{
    document.title = `Hi ${name}`
    console.log("useEffect");
  },[]);

  function handleChangeName(event){
    setName(event.target.value);
  }

  return(
    <div>      
      <p>ChangerTitle Component</p>      
      <p>Name: {name}</p>
      <p>Name in input: <input type='text' value={name} onChange={handleChangeName}></input></p>
    </div>
  );
}

ChangerTitle.propTypes = {};

ChangerTitle.defaultProps = {};

export default ChangerTitle;
