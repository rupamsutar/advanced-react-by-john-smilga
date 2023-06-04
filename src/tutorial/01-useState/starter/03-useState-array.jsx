import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [newData, setNewData] = useState(data);

  const removeHandler = (id) => {
    setNewData(newData.filter((item) => item.id !== id))
  }

  const clearHandler = () => {
    setNewData([]);
  }

  return (
    <>
    {newData.map((item) => {
      return(
        <div key={item.id} className="">
          <h4>{item.name}</h4>
          <button type="button" className="btn" onClick={() => {
            removeHandler(item.id);
          }}>remove</button>
        </div>
      )
    })}

    <button onClick={clearHandler}>Clear List</button>
    </>
  );
};

export default UseStateArray;
