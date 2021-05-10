import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDyedgLAChUU0jbL0pD1aCO3S0sHns2JA4",
    authDomain: "mead-react-course-expensify.firebaseapp.com",
    databaseURL: "https://mead-react-course-expensify-default-rtdb.firebaseio.com",
    projectId: "mead-react-course-expensify",
    storageBucket: "mead-react-course-expensify.appspot.com",
    messagingSenderId: "412896013992",
    appId: "1:412896013992:web:6aa829109cd6646ffedc9d",
    measurementId: "G-SMT1TP8ZJR"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
    name: 'Satya Kumar'  
  })