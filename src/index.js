import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const themes = {
    count: 10,
};

export const MyContext = React.createContext(themes);


ReactDOM.render(
  <React.StrictMode>
      <MyContext.Provider value={themes}>
          <App />
      </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);