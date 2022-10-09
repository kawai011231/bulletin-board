import classes from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <h1 className={classes.h1}>掲示板作ってみました</h1>
      </Link>
    </header>
  );
};
