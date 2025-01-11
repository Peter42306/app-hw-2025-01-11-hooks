import React, { useState } from 'react';
import PropTypes from 'prop-types';


const SimpleTimer = () => {
  const [currentTime, setCurrentTime] = useState("00:00");
  let id=0;

  React.useEffect(()=>{
    id = setTimeout(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return(
    <div>
      <p>SimpleTimer Component</p>      
      <p>Current Time: {currentTime}</p>
      <input type='button' value="Stop" onClick={() => {clearTimeout(id)}}></input>
    </div>
  );
} 

SimpleTimer.propTypes = {};

SimpleTimer.defaultProps = {};

export default SimpleTimer;
