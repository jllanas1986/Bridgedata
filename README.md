![Img](./media/bridgeData.jpg)
# Proyecto BridgeData con Bootstrap


_El proyecto BridgeData consiste en la realizaci贸n de una investigaci贸n sobre distintas funcionalidades del framework de font-end ```Bootstrap```, aplicadas a la creaci贸n de una p谩gina web en la que se implementan dichas funcionalidades del mismo._

### **Comenzando** 馃殌
---
Hemos comenzado el proyecto realizando un archivo ```(Markdown)``` de investigaci贸n sobre qu茅 es Bootstrap, por qu茅 utilizarlo y qu茅 elementos nos permite desarrollar para crear distintos tipos de proyectos.

## **Estructura de la investigaci贸n "Bootstrap"** 馃搵
---
Primero hemos plasmado las definiciones y contenidos de los items de Bootstrap que nos requer铆a el proyecto. Acto seguido, hemos complementado las explicaciones con imagenes y estructuras de codigo claras para mejor entendimiento por parte del usuario

###  驴Que es un navBar de bootstrap? Pon un ejemplo
---
Es el potente encabezado de navegaci贸n sensible de Bootstrap. Incluye soporte para marca, navegaci贸n y m谩s, incluido soporte para nuestro complemento de colapso.

![imagen](/media/navbar.png)

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```
Acceda a la [**investigaci贸n completa de Bootstrap**](/bootstrap.md)

##  **Bridgedata** 馃敡
---
Bridgedata es una p谩gina web implementada con funcionalidades de Bootstrap que nos permite la creaci贸 n de usuarios y almacenamiento de datos en local Storage.

**El proyecto consta de tres fases:**

* Implementar un ```NavBar``` de Bootstrap con movilidad por las 2 vistas de la p谩gina.

* Crear la vista ```"Crear Usuario"``` con el formulario de contacto para obtener la informaci贸n y guardarla en Local Storage, adem谩s de conformar las validaciones.

* Crear la vista ```"Usuario"``` donde se muestren los items "nombre y email" almacenada en Local Storage en Cards de Bootstrap

  
### **Ejecutando las pruebas** 鈿欙笍
---
#### **NavBar**

En la imagen se observa la barra de navegaci贸n con un men煤 desplegable y las dos vistas, al tener formato responsive, el men煤 permite en funci贸n de los navegadores, abrir el desplegable o ver ya desplegadas las dos opciones de vista.

![imagen NavBar](/media/imgnavbar.png)

--> Crear usuario   

En la imagen se muestra la p谩gina del formulario con uno de los mensajes de validaci贸n. Tenemos varias validaciones en el formulario.

* Que los campos esten todos rellenados.

* Que el email cumpla las condiciones pasadas por la expresion regular se cumplan.

* Que las contrase帽as sean completamente iguales.

![imagen vista crear usuario](/media/imgvalidacion.png)

```js
if (inputUser.value === "" || inputEmail.value === "" || inputPass1.value === "") {
        msg.innerHTML = `<div id="msgError" class="alert alert-danger" role="alert">Please enter all fields</div>`

    } else if (/(^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$)/.test(inputEmail.value) !== true) {
      msg.innerHTML = `<div id="msgError" class="alert alert-danger" role="alert">Please enter a correct email</div>`

    } else if(inputPass1.value !== inputPass2.value){
        msg.innerHTML =  `<div id="msgError" class="alert alert-danger" role="alert">Passwords don't match</div>`
        inputPass1.value = ""
        inputPass2.value = ""
        
    } else {
      msg.innerHTML = `<div id="msgSucces" class="alert alert-success" role="alert">User created successfully</div>`
```

--> Vista usuario

En la imagen se ve como en la vista "usuario", se van mostrando los items requeridos de todos los usuarios que se van creando y se almacenan dentro del local storage.

![imagen vista ususario](/media/imgusuarios.png)


## Construido con 馃洜锔?
* [Bootstrap](https://getbootstrap-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sc) - Framework
* [Visual Studio Code](https://code.visualstudio.com/) - Editor de c贸digo


## Autores 鉁掞笍
* Ismael Cervera - [amsiceza](https://github.com/amsiceza)
* Jose Llanas - [jllanas1986](https://github.com/jllanas1986)
