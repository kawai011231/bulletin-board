import { LinkElement } from "../Link/LinkElement";
import classes from "./Links.module.css";

export const Links = (props) => {
  return (
    <div className={classes.linksWrap}>
      <LinkElement link="/corona" linkText="ころなかーい!!!" />
      <LinkElement link="/goodes" linkText="女神の集まり" />
      <LinkElement link="/hutuka" linkText="第72回新湊高校野球部普通科" />
      <LinkElement link="/test" linkText="テスト" />
    </div>
  );
};
