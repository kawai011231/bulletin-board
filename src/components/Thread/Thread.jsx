import classes from "./Thread.module.css";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";

export const Thread = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [size, setSize] = useState();

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const handleNameChange = (e) => {
    setName(() => e.target.value);
  };

  const handleTextChange = (e) => {
    setText(() => e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: name,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      index: size + 1,
    });
    setName("");
    setText("");
    db.collection("posts")
      .get()
      .then((snap) => {
        setSize(snap.size);
      });
  };

  return (
    <div className={classes.thread}>
      <h2 className={classes.threadTitle}>
        お題：<span>人生とは</span>
      </h2>
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
      <form>
        <div className={classes.nameForm}>
          <p>名前</p>
          <input onChange={handleNameChange} type="text" value={name} />
        </div>
        <div className={classes.commentForm}>
          <p>このスレッドに書き込む</p>
          <textarea
            onChange={handleTextChange}
            name=""
            id=""
            cols="30"
            rows="10"
            value={text}
          ></textarea>
          <button onClick={handleClick}>投稿</button>
        </div>
      </form>
    </div>
  );
};
