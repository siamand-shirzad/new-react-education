import { Fragment, useState } from "react";
import "./App.css";
import UserComponent from "./UserComponent";
import GuestComponent from "./GuestComponent";

function App() {
  const [isLogined , setIsLogined] = useState(false);
  return (
    <>
    <button onClick={()=> setIsLogined(!isLogined)}>
      {isLogined ? "logout": "login"}
    </button>

    {isLogined ?<UserComponent/>: <GuestComponent/>}
    </>
  );
}

export default App;
