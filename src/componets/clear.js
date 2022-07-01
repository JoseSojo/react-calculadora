import React from 'react';
import '../styles/buttons.css';

const Clear = (props) => {
  return(
    <div
      className='btn-container clear'
      onClick={props.managerClear} >
      {props.children}
    </div>
  )
}

export default Clear;
