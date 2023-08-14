const Grade = (props) => {
  return (
    <div className="grade">
      <span className="grade-item">grade: {props.score}</span>
      <span className="grade-item">date: {props.date}</span>
    </div>
  );
};

export default Grade;
