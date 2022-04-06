import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './clock';
import ScrollingList from './ScrollingList';
import Example from './Example';
// import FunctionBasedComponent from './FunctionBasedComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
{/* <UseEffectExample /> */}
<Example />
{/* <ScrollingList />  */}
<Clock />
{/* <FunctionBasedComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
