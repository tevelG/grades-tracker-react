import Subject from './Subject';
import Card from '../UI/Card';
import SubjectsContext from '../../store/subjects-context';

import { useContext } from 'react';
import { DarkModeContext } from '../../store/DarkModeContext';

const SubjectsList = (props) => {
  const subjectCtx = useContext(SubjectsContext);
  const { darkMode } = useContext(DarkModeContext);

  const removeSubjectHandler = (title) => {
    subjectCtx.removeSubject(title);
  };

  const subList = subjectCtx.subjects.map((subject) => (
    <Card className={`subject ${darkMode ? 'subject-dark' : 'subject-light'}`}>
      <li className="grid-item">
        <Subject
          key={Math.random().toString()}
          title={subject.title}
          description={subject.description}
          grades={subject.grades}
          avgGrade={subject.avgGrade}
          onRemoveSubject={removeSubjectHandler.bind(null, subject.title)}
        />
      </li>
    </Card>
  ));

  let content = <p>No subjects found. Maybe add one?</p>;

  if (subList.length > 0) {
    content = subList;
  }

  return (
    <section className="subjects">
      <ul className="grid subjects-list">{content}</ul>
    </section>
  );
};

export default SubjectsList;
