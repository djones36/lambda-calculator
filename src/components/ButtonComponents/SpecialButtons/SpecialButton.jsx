import React from "react";

const SpecialButton = (props) => {
  console.log(props.specButton);
  return (
    <div className="Special-div">
      <button className="special-button" value={props.specButton} >
        {/* Display a button element rendering the data being passed down from the parent container on props */}{props.specButton}
      </button>
    </div>
  );
};
export default SpecialButton;