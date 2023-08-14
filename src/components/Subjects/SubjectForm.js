import Input from '../UI/Input';
import Button from '../UI/Button';
import SubjectsContext from '../../store/subjects-context';
import { useContext, useRef, useState } from 'react';

var message = '';

const SubjectForm = (props) => {
  const subjectCtx = useContext(SubjectsContext);

  const [formIsValid, setFormIsValid] = useState(true);
  const subjectInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredSubject = subjectInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    console.log(subjectCtx.subjects);
    const titles = subjectCtx.subjects.map((subject) => subject.title);
    console.log(titles);

    if (
      enteredSubject.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      message = 'Please enter all fields';
      setFormIsValid(false);
      return;
    } else if (titles.includes(enteredSubject)) {
      message = 'This subject already exists';
      setFormIsValid(false);
      return;
    } else {
      setFormIsValid(true);
      props.onHideForm();
    }

    subjectCtx.addSubject({
      title: enteredSubject,
      description: enteredDescription,
      grades: [],
      avgGrade: 0,
    });
  };

  return (
    <form className="form form-subject" onSubmit={submitHandler}>
      <Input
        ref={subjectInputRef}
        label="Subject"
        input={{
          id: 'subject',
          type: 'text',
          defaultValue: '',
        }}
      />
      <Input
        ref={descriptionInputRef}
        label="Description"
        input={{
          id: 'description',
          type: 'text',
          defaultValue: '',
        }}
      />
      <Button className="button-add" type="submit">
        Add
      </Button>
      {!formIsValid && <p>{message}</p>}
    </form>
  );
};

export default SubjectForm;
