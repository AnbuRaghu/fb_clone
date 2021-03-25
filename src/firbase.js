// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAtbQ2wwU8g2JHQD1NJfhofJCpJYVIAixE",
    authDomain: "fb-clone-1f196.firebaseapp.com",
    projectId: "fb-clone-1f196",
    storageBucket: "fb-clone-1f196.appspot.com",
    messagingSenderId: "912609483548",
    appId: "1:912609483548:web:04e9be764ecba92b03f8d9",
    measurementId: "G-PM5XW8NWWH"
  };

  const firbaseApp=firebase.initializeApp(firebaseConfig)
  const db=firbaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth,provider};//explicit export
  export default db;



