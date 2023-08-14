import { useReducer } from 'react';
import SubjectsContext from './subjects-context';

const defaultSubjectsState = {
  subjects: [],
};

const subjectsReducer = (state, action) => {
  let updatedSubjects = state.subjects;

  if (action.type == 'ADD_SUBJECT') {
    updatedSubjects = updatedSubjects.concat(action.subject);
    return { subjects: updatedSubjects };
  }

  if (action.type == 'REMOVE_SUBJECT') {
    updatedSubjects = updatedSubjects.filter(
      (subject) => subject.title !== action.title
    );
    return { subjects: updatedSubjects };
  }

  if (action.type == 'ADD_GRADE') {
    const subjectIndex = updatedSubjects.findIndex(
      (subject) => subject.title === action.title
    );

    const subject = updatedSubjects.filter(
      (subject) => subject.title === action.title
    )[0];

    const updatedSubject = {
      ...subject,
      grades: subject.grades.concat(action.grade),
    };

    updatedSubjects[subjectIndex] = updatedSubject;

    return { subjects: updatedSubjects };
  }

  if (action.type === 'CLEAR') {
    console.log('jjj');
    return { subjects: [] };
  }
  return defaultSubjectsState;
};

const SubjectsProvider = (props) => {
  const [subjectsState, dispatchSubjectsAction] = useReducer(
    subjectsReducer,
    defaultSubjectsState
  );

  const addSubjectHandler = (subject) => {
    dispatchSubjectsAction({ type: 'ADD_SUBJECT', subject: subject });
  };

  const removeSubjectHandler = (title) => {
    dispatchSubjectsAction({ type: 'REMOVE_SUBJECT', title: title });
  };

  const addGradeHandler = (title, grade) => {
    dispatchSubjectsAction({
      type: 'ADD_GRADE',
      grade: grade,
      title: title,
    });
  };

  const removeGradeHandler = (id, title) => {
    dispatchSubjectsAction({ type: 'REMOVE_GRADE', id: id, title: title });
  };

  const clearAllHandler = () => {
    console.log('kkk');
    dispatchSubjectsAction({ type: 'CLEAR' });
  };

  const subjectsContext = {
    subjects: subjectsState.subjects,
    addGrade: addGradeHandler,
    removeGrade: removeGradeHandler,
    addSubject: addSubjectHandler,
    removeSubject: removeSubjectHandler,
    clearAll: clearAllHandler,
  };

  return (
    <SubjectsContext.Provider value={subjectsContext}>
      {props.children}
    </SubjectsContext.Provider>
  );
};

export default SubjectsProvider;
