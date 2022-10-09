import { LinkElement } from "../Link/LinkElement";
import classes from "./Links.module.css";

export const Links = (props) => {
  return (
    <div className={classes.linksWrap}>
      <LinkElement link="/corona" linkText="ころなかーい!!!" />
      <LinkElement link="/goodes" linkText="女神の集まり" />
      <LinkElement link="/test" linkText="テスト" />
    </div>
  );
};
