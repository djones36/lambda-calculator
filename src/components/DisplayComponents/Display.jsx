import React,{useState} from "react";


const Display = (props) => {
  console.log(props);
  const [disState] = useState(0) 
  return <div className="display-container">{/* Display any props data here */}
  {disState}
  </div>;
};
export default Display;