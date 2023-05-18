
function guardar(){
  db.collection("Consultas").add({
      nombre: document.getElementById("fname").value,
      apellidos: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      informacion: document.getElementById("select").value,
      consulta: document.getElementById("comment").value,   
  })
  .then((docRef)=>{
    // La operación de guardado se completó exitosamente
    alert("Petición registrada con éxito.")
    
  })
  .catch((error)=>{
    // Ocurrió un error durante la operación de guardado
    alert("Algo ha fallado.")
  });
}




