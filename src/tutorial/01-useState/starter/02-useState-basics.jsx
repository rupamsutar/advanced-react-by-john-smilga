import { useState } from "react";
 
const UseStateBasics = () => {
  // console.log(useState("Rupam"));
  // console.log(useState("Rupam")[]);
  // const value = useState("rupam")[0];
  // console.log(value);
  // const fun = useState("rupam")[1];
  // console.log(fun)

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h4>You Clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>Increase</button>
    </div>
  )
};



export default UseStateBasics;
