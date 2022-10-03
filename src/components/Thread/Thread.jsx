import classes from "./Thread.module.css";
import db from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

export const Thread = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => doc.data()));
      setPosts(snapShot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className={classes.thread}>
      {posts.map((post) => (
        <div key={post.title}>
          <h2 className={classes.threadTitle}>
            お題：<span>{post.title}</span>
          </h2>
          <div className={classes.ThreadComent}>
            <p className={classes.userName}>
              1 {post.name}:<b>{post.text}</b>
              {/* <span>{post.timestamp}</span> */}
            </p>
          </div>
        </div>
      ))}
      <form>
        <div className={classes.nameForm}>
          <p>おなまえ</p>
          <input type="text" />
        </div>
        <div className={classes.commentForm}>
          <p>このスレッドに書き込む</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>投稿</button>
        </div>
      </form>
    </div>
  );
};
