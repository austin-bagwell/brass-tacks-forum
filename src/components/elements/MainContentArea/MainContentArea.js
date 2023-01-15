import Thread from "../Thread/Thread";
import "./MainContentArea.css";

function MainContentArea(props) {
  const threadList = [];
  props.threads.forEach((thread) => {
    threadList.push(
      <Thread title={thread.title} author={thread.author} key={thread.id} />
    );
  });
  return (
    <div>
      <h1>hi</h1>
      {threadList}
    </div>
  );
}

export default MainContentArea;
