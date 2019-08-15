import React from "react";

const OperatorButton = (props) => {
  console.log(props.optButton);
  return (

    <button className="operator-button" value={props.optButton} >
      {/* Display a button element rendering the data being passed down from the parent container on props */}{props.optButton}
    </button>

  );
};

export default OperatorButton;