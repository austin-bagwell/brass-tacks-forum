// import "./Thread.css";

function Thread(props) {
  const { title, author } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
}

export default Thread;
