// Guarda la información recogida de cada uno de los usuarios en localStorage

    // Implementa validación que obligue a rellenar todos los campos
    // Implementa una validación para el correo
    // Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2
    // Implementa una validación de contraseña

// Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca

// Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.

// Muestra los mensajes utilizando los alerts de bootstrap

// Crea la vista Usuarios la cual debe mostrar en cards de bootstrap los usuarios guardados en localStorage con los siguientes campos:
    //Nombre
    //Correo


// Llamar al DOM elementos formulario
const formTag = document.querySelector("form")
const inputUser = document.querySelector("#exampleInputUser")
const inputEmail = document.querySelector("#exampleInputEmail1")
const inputPass1 = document.querySelector("#exampleInputPassword1")
const inputPass2 = document.querySelector("#exampleInputPassword2")
const btnSave = document.querySelector("#btnSave")
const msg = document.querySelector("#msg")
const card = document.querySelector("#cardContainer") 


// Funcion onSubmit cuando se envia formulario
function onSubmit(e) {

    e.preventDefault();
    
    if (inputUser.value === "" || inputEmail.value === "" || inputPass1.value === "") {
        console.log("Please enter all fields");
        msg.innerHTML = `<div id="msgError" class="alert alert-danger" role="alert">Please enter all fields</div>`

    } else if (/(^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$)/.test(inputEmail.value) !== true) {
      msg.innerHTML = `<div id="msgError" class="alert alert-danger" role="alert">Please enter a correct email</div>`

    } else if(inputPass1.value !== inputPass2.value){
        msg.innerHTML =  `<div id="msgError" class="alert alert-danger" role="alert">Passwords don't match</div>`
        inputPass1.value = ""
        inputPass2.value = ""
        
    } else {
      msg.innerHTML = `<div id="msgSucces" class="alert        alert-success" role="alert">User created successfully</div>`

      // Almacenar datos Local Storage
      let userArray = JSON.parse(localStorage.getItem("users")) || [] 

        const userName = inputUser.value
        const email = inputEmail.value
        const password = inputPass1.value

        const userObject = {userName, email, password}   

        userArray.push(userObject)

        localStorage.setItem("users", JSON.stringify(userArray))

        // Delay en tiempo desde que se envia formulario
        setTimeout(() => {
            window.location.href = "usuarios.html"
            pintarPantalla() 
          }, 1000);


    }  
    
}


// Funcion pintar en pantlla las propiedades de user y email en cards
function pintarPantalla() {
    const userArray = JSON.parse(localStorage.getItem("users")) || []
    for(i=0; i < userArray.length; i++){
            if(card){
                card.innerHTML += `<div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                  <li id= "nameStrong" class="list-group-item">${userArray[i].userName}</li>
                  <li class="list-group-item">${userArray[i].email}</li>
                </ul>
              </div>`
            }
    }
    
}

// Lamada funcion pintarPantalla()
pintarPantalla()

// Si hay formulario se hace la fucnion onSubmit
if(formTag){
    formTag.addEventListener("submit", onSubmit)
}

