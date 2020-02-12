import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');

  firebase.initializeApp({
    apiKey: "AIzaSyDaJi7pWCt9DKKuL_wQUV_h306k_R2Ofnw",
    authDomain: "evernote-ec2f1.firebaseapp.com",
    databaseURL: "https://evernote-ec2f1.firebaseio.com",
    projectId: "evernote-ec2f1",
    storageBucket: "evernote-ec2f1.appspot.com",
    messagingSenderId: "287012329231",
    appId: "1:287012329231:web:ce0e473ebeb21490"
  });



ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
