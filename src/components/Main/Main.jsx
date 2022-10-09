import { Thread } from "../Thread/Thread";

export const Main = (props) => {
  return (
    <main>
      <Thread title={props.title} thread={props.thread} />
    </main>
  );
};
