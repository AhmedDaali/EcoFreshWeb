
//Este archivo establece la conexión con FireBase

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCt_Eux6Mp6QDGFByVfbNhOgfZDxvlzipM",
    authDomain: "ecofresh-project.firebaseapp.com",
    databaseURL: "https://ecofresh-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ecofresh-project",
    storageBucket: "ecofresh-project.appspot.com",
    messagingSenderId: "744495400271",
    appId: "1:744495400271:web:0bc9a1c2a9b396e89b313a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  //Función que nos va a guardar los datos recogidos en el formulario, en Firestore. La colección donde se va a guardar se llamará "Consultas".
  //Esta función tiene el atributo "export" para poder importarla en el archivo formulario.js.
  export const saveForm = (nombre,apellidos,email,informacion,consulta)=>{
      addDoc(collection(db, 'Consultas'), {nombre,apellidos,email,informacion,consulta})
  };

