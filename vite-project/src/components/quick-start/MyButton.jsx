import React, { useState } from "react";

const MyButton = ({ count, onClick }) => {
  //   const [count, setCount] = useState(0);
  //   // Responding to events
  //   function handleClick() {
  //     setCount(count + 1);
  //   }
  return (
    <>
      {/* only need to pass it down. React will call  */}
      <button onClick={onClick}>Clicked {count} times</button>
    </>
  );
};

export default MyButton;
