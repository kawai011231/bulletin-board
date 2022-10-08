import classes from "./Thread.module.css";
import { Comment } from "../Comment/Comment";
import { Form } from "../Form/Form";

export const Thread = () => {
  return (
    <div className={classes.thread}>
      <h2 className={classes.threadTitle}>
        お題：<span>人生とは</span>
      </h2>
      <Comment />
      <Form />
    </div>
  );
};
