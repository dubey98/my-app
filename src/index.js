import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Book from "./library-app/library";


ReactDOM.render(
  <React.StrictMode>
    <Book name="Hobbit" author="unknown" pages="456" isRead="true" />
    <Book name="Hobbit" author="unknown" pages="456" isRead="true" />
    <Book name="Hobbit" author="unknown" pages="456" isRead="true" />
    <Book name="Hobbit" author="unknown" pages="456" isRead="true" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
