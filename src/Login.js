import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
// import auth and provider from our local firebase
import { auth, provider } from "./firbase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

export default function Login() {
  const [state, dispatch] = useStateValue();
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://th.bing.com/th/id/OIP.A4k1z25xge4FBEBOiP-5MwHaHa?w=188&h=188&c=7&o=5&dpr=1.25&pid=1.7"
          alt="fb_logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signin}>
        {" "}
        Sign In
      </Button>
    </div>
  );
}
