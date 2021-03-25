import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import SideBar from "./SideBar";
import Widget from "./Widget";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/*  header  */}
          <Header />
          {/* App body */}
          <div className="app_body">
            {/* sidebar (inside app body)*/}
            <SideBar />

            <Feed />
            <Widget/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
