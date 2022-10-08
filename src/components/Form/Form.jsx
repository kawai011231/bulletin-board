import classes from "./Form.module.css";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";

export const Form = () => {
  const [size, setSize] = useState();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    db.collection("posts")
      .get()
      .then((snap) => {
        setSize(snap.size);
      });
  }, [db]);
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
  };

  return (
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
  );
};
