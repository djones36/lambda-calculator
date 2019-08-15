import React from "react";


const NumberButton = (props) => {

  return (
    <div className="numbers-div">

      <button className='number-button' value={props.numButton}>
        {/* Display a button element rendering the data being passed down from the parent container on props */}{props.numButton}
        
      </button>
    </div>

  );
};
export default NumberButton;