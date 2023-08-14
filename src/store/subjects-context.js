import React from 'react';

const SubjectsContext = React.createContext({
  subjects: [],
  addGrade: (subject, grade) => {},
  removeGrade: (subject, id) => {},
  addSubject: (subject) => {},
  removeSubject: (subject) => {},
  clearAll: () => {},
});

export default SubjectsContext;
