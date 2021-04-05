import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJZ4LSZwNb96Qvll_qxrhs1rdJgG_nx6U",
    authDomain: "pulse-app-e402c.firebaseapp.com",
    databaseURL: "https://pulse-app-e402c.firebaseio.com",
    projectId: "pulse-app-e402c",
    storageBucket: "pulse-app-e402c.appspot.com",
    messagingSenderId: "957065885201",
    appId: "1:957065885201:web:3947aa1e37186e11b6e3b0",
    measurementId: "G-JE4BEKSELT"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  //Preparing the Authentication Module

  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider();



  export {auth, provider}
  export default db;


