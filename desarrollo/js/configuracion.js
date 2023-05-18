//En este archivo se establece la configuración para conectarnos a firebase.

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
firebase.initializeApp({
    apiKey: "AIzaSyCt_Eux6Mp6QDGFByVfbNhOgfZDxvlzipM",
  authDomain: "ecofresh-project.firebaseapp.com",
  databaseURL: "https://ecofresh-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ecofresh-project",
  storageBucket: "ecofresh-project.appspot.com",
  messagingSenderId: "744495400271",
  appId: "1:744495400271:web:0bc9a1c2a9b396e89b313a"
});

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();
