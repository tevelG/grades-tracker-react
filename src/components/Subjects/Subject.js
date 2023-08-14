import { useContext, useState } from 'react';
import GradesList from '../Grades/GradesList';
import Card from '../UI/Card';
import SubjectsContext from '../../store/subjects-context';
import Button from '../UI/Button';
import GradeForm from '../Grades/GradeForm';
import { DarkModeContext } from '../../store/DarkModeContext';

const Subject = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [showGrades, setShowGrades] = useState(false);

  const subjectCtx = useContext(SubjectsContext);
  const { darkMode } = useContext(DarkModeContext);

  const showFormHandler = () => {
    console.log('ooo');
    setFormIsShown(true);
  };
  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const showGradesHandler = () => {
    setShowGrades((prev) => {
      return !prev;
    });
  };

  const addGradeHandler = (grade, title) => {
    subjectCtx.addGrade(grade, title);
  };

  const sum = props.grades.reduce((sum, grade) => {
    return sum + grade.score;
  }, 0);

  const length = props.grades.length;

  let avgGrade = (sum / length).toFixed(2);

  if (isNaN(avgGrade)) {
    avgGrade = 0;
  }

  return (
    <div>
      <div className={`subject ${darkMode ? 'subject-dark' : 'subject-light'}`}>
        <Button className="button-remove" onClick={props.onRemoveSubject}>
          X
        </Button>
        <div>
          <h3 className="subject-heading">{props.title}</h3>
          <div className="subject-description">{props.description}</div>
        </div>

        <div>
          <span className="subject-avg">Average grade </span>
          <span className="subject-avg">{avgGrade}</span>
          <Button onClick={showFormHandler} className="button-add-grade">
            Add a grade
          </Button>
          {formIsShown && (
            <GradeForm
              onAddGrade={addGradeHandler.bind(null, props.title)}
              onHideForm={hideFormHandler}
            />
          )}
          <Button className="button-show-grades" onClick={showGradesHandler}>
            {showGrades ? <span>-</span> : <span>+</span>}
          </Button>

          {showGrades ? (
            <Card>
              <GradesList
                className={`card-grades-list`}
                grades={props.grades}
                formIsShown={formIsShown}
              ></GradesList>
            </Card>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Subject;
