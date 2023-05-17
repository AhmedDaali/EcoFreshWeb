// Importar la biblioteca Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
//import firebase from 'firebase/app';
import 'firebase/database';

// Configurar la conexión con Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCt_Eux6Mp6QDGFByVfbNhOgfZDxvlzipM",
    authDomain: "ecofresh-project.firebaseapp.com",
    projectId: "ecofresh-project",
    storageBucket: "ecofresh-project.appspot.com",
    messagingSenderId: "744495400271",
    appId: "1:744495400271:web:0bc9a1c2a9b396e89b313a"
};
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtener referencia a la base de datos
//const databaseRef = database().ref("form-responses");

// Obtener referencia a la base de datos
//const database = firebase.database();
const database = getDatabase();
const databaseRef = ref(database, "form-responses");

// Obtener referencia al formulario y al botón de envío
const form = document.getElementById('contact-form');
const submitButton = document.getElementById('btn-form');

// Escuchar el evento de envío del formulario
btnEnviar.addEventListener('btn-form', (e) => {
  e.preventDefault(); // Evitar el envío tradicional del formulario
  
  // Obtener los valores del formulario
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const select = document.getElementById('Select').value;
  const comment = document.getElementById('comment').value;

  // Crear un objeto con los datos del formulario
  const formData = {
    fname: fname,
    lname: lname,
    email: email,
    select: select,
    comment: comment
  };

  // Enviar los datos a Firebase
  push(databaseRef, formData)
    .then(() => {
      // Datos enviados exitosamente
      console.log('Datos enviados a Firebase');
      alert('¡Mensaje enviado con éxito!');
    })
    .catch((error) => {
      // Ocurrió un error al enviar los datos
      console.error('Error al enviar los datos a Firebase:', error);
      alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    });
});

