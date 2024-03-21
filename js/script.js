const myForm = document.getElementById('Form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('correoUsuario');
const contraseña = document.getElementById('contraseña'); 
const confirmContraseña = document.getElementById('repetirContraseña');
const fecha = document.getElementById('Fecha'); 
const mailFormato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const contraseñaFormato = /(?=(.*[0-9]))(?=(.*[A-Z]))(?=(.*[a-z]))/;  
myForm.addEventListener('submit', (event) => { 
    event.preventDefault(); 
    let mensajeExito = ""
    const currentDate = new Date()
    let nuevaFecha = new Date(fecha.value)
                //Validacion de Nombre
        if (nombre.value === '') {
            alert("Escribir un nombre valido")
            nombre.parentNode.classList.add('error');
            nombre.parentNode.classList.remove('success');
            mensajeExito += "Escribir un nombre valido"
        } else { 
          nombre.parentNode.classList.add('success');
          nombre.parentNode.classList.remove('error');
        }

            //Validacion de Email
        if (email.value === '') {
            alert("Escribir un email valido")
            nombre.parentNode.classList.add('error');
            nombre.parentNode.classList.remove('success');
        } else if ( !email.value.match(mailFormato)) {
            alert("Escribir un email valido")
            emailInput.parentNode.classList.add('error');
            emailInput.parentNode.classList.remove('success');
        }
          else { 
          nombre.parentNode.classList.add('success');
          nombre.parentNode.classList.remove('error');
        }
                //Validacion de Contraseña

        if (contraseña.value === '' || contraseña.value.length > 18 || contraseña.value.length <= 6) { 
            alert("Escribir una contraseña valida")
            nombre.parentNode.classList.add('error');
            nombre.parentNode.classList.remove('success');
        } else if (!contraseña.value.match(contraseñaFormato)) {
            alert("Escribir una contraseña valida")
            emailInput.parentNode.classList.add('error');
            emailInput.parentNode.classList.remove('success');
        }
          else { 
          nombre.parentNode.classList.add('success');
          nombre.parentNode.classList.remove('error');
        }    

                //Confirmacion de Contraseña
        if (confirmContraseña.value !=  contraseña.value) { 
            alert("Contraseñas deben ser iguales")
            nombre.parentNode.classList.add('error');
            nombre.parentNode.classList.remove('success');
        }  
          else { 
          nombre.parentNode.classList.add('success');
          nombre.parentNode.classList.remove('error');
        }  
        
                    //Validacion de Fecha
        if (fecha.value === '' ) { 
            alert("Fecha debe ser valida")
            nombre.parentNode.classList.add('error');
            nombre.parentNode.classList.remove('success');
        } else if (currentDate.getFullYear() - nuevaFecha.getFullYear() < 13) { 
            alert("Debe tener mas de 13 años para ingresar") 
            nombre.parentNode.classList.add('success');
            nombre.parentNode.classList.remove('error');
          }  
          else { 
          console.log(currentDate.getFullYear() - nuevaFecha.getFullYear() )  
          nombre.parentNode.classList.add('success');
          nombre.parentNode.classList.remove('error');
        }  

})    


  