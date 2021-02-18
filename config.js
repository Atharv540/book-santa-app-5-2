
import firebase from 'firebase';
require('@firebase/firestore');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsTjwsUoD7SI_Pzcxlla48fiBt8WeFLSo",
    authDomain: "santa-app-9a522.firebaseapp.com",
    projectId: "santa-app-9a522",
    storageBucket: "santa-app-9a522.appspot.com",
    messagingSenderId: "63511150166",
    appId: "1:63511150166:web:9ad2f04d3f5fd7c6d105f7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
