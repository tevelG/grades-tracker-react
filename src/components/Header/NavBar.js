import Button from '../UI/Button';
import SubjectsContext from '../../store/subjects-context';
import { useContext } from 'react';

const NavBar = (props) => {
  const subjectCtx = useContext(SubjectsContext);
  const clearAllHandler = () => {
    subjectCtx.clearAll();
  };

  return (
    <div className="container">
      <div className="nav">
        <h1 className="heading">Grades Tracker</h1>
        <Button className="button-add-subject" onClick={props.onShowForm}>
          Add a subject
        </Button>
        <Button className="button-change-mode" onClick={props.onToggleTheme}>
          Mode
        </Button>
        <Button onClick={clearAllHandler}>Clear all</Button>
      </div>
    </div>
  );
};

export default NavBar;
