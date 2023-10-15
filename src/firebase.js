// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDUlF-XdzpUOzS5wDruenvHpdj5a4asR68",
    authDomain: "linkedin-clone-yt-a0ccd.firebaseapp.com",
    projectId: "linkedin-clone-yt-a0ccd",
    storageBucket: "linkedin-clone-yt-a0ccd.appspot.com",
    messagingSenderId: "876049377076",
    appId: "1:876049377076:web:81abac6c43728e0f6be761"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};