import { useEffect, useState } from "react";
import { db } from "../../firebase";
import classes from "./Comment.module.css";

export const Comment = () => {
  const [posts, setPosts] = useState([]);
  const [size, setSize] = useState();
  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
    db.collection("posts")
      .get()
      .then((snap) => {
        setSize(snap.size);
      });
  }, [db]);

  return (
    <ul className={classes.ThreadComent}>
      {posts.map((post) => (
        <li className={classes.comment} key={post.index}>
          {post.index}
          {post.name}:<b></b>
          <p>{post.text}</p>
          {/* <span>{post.createdAt}</span> */}
        </li>
      ))}
    </ul>
  );
};
