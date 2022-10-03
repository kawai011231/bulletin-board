import classes from "./Thread.module.css";

export const Thread = () => {
  return (
    <div className={classes.thread}>
      <h2 className={classes.threadTitle}>
        お題：<span>こんにちは</span>
      </h2>
      <div className={classes.ThreadComent}>
        <p className={classes.userName}>
          1 名前:
          <b>こんにちは</b>
          <span>2022/9/27 16:24:01</span>
        </p>
      </div>
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
