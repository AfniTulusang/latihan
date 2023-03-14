import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);*/
root.render(<h1>Afni</h1>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Afni',
    lastName: 'Tulusang'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!  </h1>
  );