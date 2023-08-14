import Input from '../UI/Input';
import Button from '../UI/Button';
import { useContext, useRef, useState } from 'react';

const GradeForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const gradeInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredGrade = gradeInputRef.current.value;
    const enteredGradeNum = +enteredGrade;

    if (
      enteredGrade.trim().length === 0 ||
      enteredGradeNum < 0 ||
      enteredGradeNum > 100
    ) {
      setFormIsValid(false);
      return;
    }

    const date = new Date();
    const grade = {
      score: enteredGradeNum,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    };

    props.onAddGrade(grade);
    props.onHideForm();
  };

  return (
    <form className="form form-grade" onSubmit={submitHandler}>
      <Input
        ref={gradeInputRef}
        label="Grade"
        input={{
          id: Math.random().toString(),
          type: 'number',
          defaultValue: '',
        }}
      />
      <Button className="form-grade--button" type="submit">
        Add
      </Button>
      {!formIsValid && <p>Please enter a valid input</p>}
    </form>
  );
};

export default GradeForm;
