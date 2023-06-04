import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState("David");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Reading");

  return (
    <>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
    <h4>Enjoys: {hobby}</h4>
    <button className="btn" onClick={() => {
      setName("John");
      setAge(28);
      setHobby("Screaming at computer");
    }}>Update</button>
    </>
  );
};

export default UseStateObject;
