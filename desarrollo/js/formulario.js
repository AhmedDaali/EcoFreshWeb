import { saveForm } from "./configuracion.js"


window.addEventListener('DOMContentLoaded', () =>{

})

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

 const nombre = contactForm['fname']
 const apellidos = contactForm['lname']
 const email = contactForm['email']
 const informacion = contactForm['select']
 const consulta = contactForm['comment']

 if(nombre.value === "" || email.value === ""){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'El nombre y el email son obligatorios',
    footer: '<strong>Copyright &copy; 2023 ECOFRESH.</strong>'   
  })
 }else{

  saveForm(nombre.value, apellidos.value, email.value, informacion.value, consulta.value);
  Swal.fire({
    icon: 'success',
    title: 'Tu solicitud ha sido enviada con éxito',
    text: 'En breve nos pondremos en contacto con usted',
    footer: '<strong>Copyright &copy; 2023 ECOFRESH.</strong>'
    
  })
  contactForm.reset();
 }
 
})



