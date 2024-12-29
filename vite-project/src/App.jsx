import { useState } from "react";
import "./App.css";
import MyButton from "./components/quick-start/MyButton";
import About from "./components/quick-start/About";
import AdminPanel from "./components/quick-start/AdminPanel";
import ShoppingList from "./components/quick-start/ShoppingList";
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }
  const isLoggedIn = true; // mutable
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <h2>Counters that update separatel</h2>
        {/* <MyButton />
        <MyButton /> */}
        <MyButton count={count} onClick={handleClick} />
        {/* information you pass down like this is called props */}
        <MyButton count={count} onClick={handleClick} />
        <hr />
        {/* Notice that <MyButton /> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase. */}

        <About />
        <hr />
        <p>
          If you have a lot of HTML to port to JSX, you can use an{" "}
          <a href="https://transform.tools/html-to-jsx">online converter.</a>{" "}
        </p>
        <hr />

        <img className="avatar" width={"90px"} height={"90px"} />
        <hr />
        {/* Displaying data  */}
        <Profile />
        <hr />
        {/* Conditional rendering  */}
        <div>{isLoggedIn && <AdminPanel />}</div>
        <hr />
        {/* Rendering lists  */}
        <ShoppingList />

        {/* Updating the screen refer button comp */}
        {/* Using Hooks - Hooks are more restrictive than other functions */}
        {/* Sharing data between components */}
        {/* To make both MyButton components *display the same* count and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them. */}
        <hr />
        {/* Next Step - Tic-Tac-Toe build practice */}
      </div>
    </>
  );
}

export default App;

export function Profile() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
