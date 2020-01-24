import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCnCuj0CMHQVRXAo-OtI_J9wCiuSaVZSV0",
    authDomain: "comments-js.firebaseapp.com",
    databaseURL: "https://comments-js.firebaseio.com",
    projectId: "comments-js",
    storageBucket: "comments-js.appspot.com",
    messagingSenderId: "89690528798",
    appId: "1:89690528798:web:928f6a28fbc28538c2220f",
    measurementId: "G-HYKZSN9F7H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  //firebase.analytics();

  export const database = firebase.database()