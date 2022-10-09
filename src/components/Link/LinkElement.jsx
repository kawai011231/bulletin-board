import classes from "./LinkElement.module.css";
import Link from "next/link";

export const LinkElement = (props) => {
  return (
    <Link href={`${props.link}`}>
      <a className={classes.link}>{props.linkText}</a>
    </Link>
  );
};
