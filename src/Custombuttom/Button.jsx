import React from 'react'
import  "./Button.css"

const Custombutton = ({title}) => {
  return (
    <>
      <button class="button">
        <span class="button-content">{title} </span>
      </button>
    </>
  );
}

export default Custombutton