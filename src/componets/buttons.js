import React from 'react';
import '../styles/buttons.css';

function Buttons(props) {

  const operator = v => {
    return isNaN(v) && (v != '.') && (v != '=');
  };

  return(
    <div
      className={`btn-container ${operator(props.children) ? 'operator' : 'number'}`}
      onClick={() => props.managerClick(props.children)} >
      {props.children}
    </div>
  )
}

export default Buttons;
