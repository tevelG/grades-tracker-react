import Grade from './Grade';

const GradesList = (props) => {
  const gradesList = props.grades.map((grade) => {
    return (
      <li>
        <Grade
          key={Math.random().toString()}
          score={grade.score}
          date={grade.date}
        />
      </li>
    );
  });

  let content = <p style={{ color: 'black' }}>No grades yet.</p>;

  if (gradesList.length > 0) {
    content = gradesList;
  }

  return <ul className={`grades-list`}>{content}</ul>;
};

export default GradesList;
