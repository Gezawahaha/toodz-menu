import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyC5ah7V8wdGYKXlq-50oIrcJrezaIXKEmE",
    authDomain: "toodzhouse-6abde.firebaseapp.com",
    projectId: "toodzhouse-6abde",
    storageBucket: "toodzhouse-6abde.appspot.com",
    messagingSenderId: "1004229586573",
    appId: "1:1004229586573:web:fe3fe3f6f0a1b8801dfcc4",
    measurementId: "G-CKDKN4Q84K"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;