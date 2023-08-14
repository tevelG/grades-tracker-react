import './sass/style.scss';

import SubjectForm from './components/Subjects/SubjectForm';
import SubjectsList from './components/Subjects/SubjectsList';
import NavBar from './components/Header/NavBar';
import SubjectsProvider from './store/SubjectsProvider';

import { useContext, useState } from 'react';
import { DarkModeContext } from './store/DarkModeContext';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  const toggleThemeHandler = () => {
    toggleDarkMode();
    console.log(darkMode);
  };

  return (
    <SubjectsProvider>
      <div className={`app ${darkMode ? 'app-dark' : 'app-light'}`}>
        <NavBar
          onToggleTheme={toggleThemeHandler}
          onShowForm={showFormHandler}
        />
        {formIsShown && <SubjectForm onHideForm={hideFormHandler} />}
        <div>
          <SubjectsList />
        </div>
      </div>
    </SubjectsProvider>
  );
}

export default App;
