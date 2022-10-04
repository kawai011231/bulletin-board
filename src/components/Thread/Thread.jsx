import classes from "./Thread.module.css";
import db from "../../firebase.env";
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
  console.log(posts.length);

  return (
    <div className={classes.thread}>
      <h2 className={classes.threadTitle}>
        お題：<span>タイトル</span>
      </h2>
      <ol className={classes.ThreadComent}>
        {posts.map((post) => (
          <li className={classes.userName} key={post.id}>
            {post.name}:<b>{post.text}</b>
            {/* <span>{post.timestamp}</span> */}
          </li>
        ))}
      </ol>
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
