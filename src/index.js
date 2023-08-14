import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { DarkModeProvider } from './store/DarkModeContext';

ReactDOM.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>,
  document.getElementById('root')
);
