import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./messagesender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from './firbase';
import firebase from 'firebase';

export default function MessageSender() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const[{user},dispatch]=useStateValue()
  
  const handleSubmit = (e) => {
    e.preventDefault(); // it stops refreshing when we submit our forms
    //some db stuff
    db.collection('posts').add({
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilPic:user.photoURL,
      username:user.displayName,
      image:imgUrl
    })
    setInput("");
    setImgUrl("");
  };
  return (
    <div className="messsagesender">
      <div className="messagesender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messagesender_input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder="image URL (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Handle Submit
          </button>
        </form>
      </div>
      <div className="messagesender_bottom">
        <div className="messagesender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messagesender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}
