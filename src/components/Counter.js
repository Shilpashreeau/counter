import { useState } from "react";

function Counter() {
  //state variable
  const [counter, setCounter] = useState(0);
 /*counter is the initial state
 let useState=0; current state
 setCounter: what it wants to be
 useState+=1;*/
  //we can have multiple number of useStates
  //Ex: const [counter2,setCounter2]=useState(1);
  //Handle click function by one
  const handleClick = () => {
    setCounter(counter + 1);
    //console.log(counter);
  };

  //Handle count by two
  const handleCountByTwo = () => {
    setCounter(counter + 2);
  };

  //Handle multiply by 3
  const multiplyByThree = () => {
    setCounter(counter * 3);
  };

  //Handle division by 9
  const division = () => {
    setCounter(counter / 4);
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleCountByTwo}>-2</button>
      <button onClick={multiplyByThree}>*3</button>
      <button onClick={division}>/4</button>
    </div>
  );
}
export default Counter;
