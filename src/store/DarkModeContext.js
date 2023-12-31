import { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
