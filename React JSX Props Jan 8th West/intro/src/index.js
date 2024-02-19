import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const myName = "Alvin";

// const sayHello = () => {
//   return 'Hello, John!'
// }

// const Header = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }

root.render(
  <App />
);

// Components are just FUNCTIONS that return JSX