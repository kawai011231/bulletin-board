import classes from "./Thread.module.css";
import { Comment } from "../Comment/Comment";
import { Form } from "../Form/Form";

export const Thread = (props) => {
  return (
    <div className={classes.thread}>
      <h2 className={classes.threadTitle}>
        お題：<span>{props.title}</span>
      </h2>
      <Comment thread={props.thread} />
      <Form thread={props.thread} />
    </div>
  );
};
