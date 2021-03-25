import React, { useEffect, useState } from "react";
import "./feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

import StoryReel from "./StoryReel";
import db from "./firbase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        //docs is predefined method
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* Messagesender */}
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}
