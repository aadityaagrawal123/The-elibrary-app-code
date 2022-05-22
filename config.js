import firebase from "firebase";


const firebaseConfig = {
 apiKey: "AIzaSyAiLeuFGTO8rcqOMRZYqXW55W6uidMqVaU",
  authDomain: "e-library-app-db.firebaseapp.com",
  projectId: "e-library-app-db",
  storageBucket: "e-library-app-db.appspot.com",
  messagingSenderId: "658102656305",
  appId: "1:658102656305:web:4b6bf18cfa61b84d9de410"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();