import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/storage";
// import "firebase/compat/firestore";

firebase.initializeApp({
apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
// databaseURL: process.env.REACT_APP_databaseURL,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_storageBucket,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

