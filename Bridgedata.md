# Proyecto BridgeData con Bootstrap


_El proyecto BridgeData consiste en la realización de una investigación sobre distintas funcionalidades del framework de font-end Bootstrap, aplicadas a la creación de una página web en la que se implementan dichas funcionalidades del mismo._

### **Comenzando** 🚀
---
Hemos comenzado el proyecto realizando un Readme de investigación sobre qué es Bootstrap, por qué utilizarlo y qué elementos nos permite desarrollar para crear distintos tipos de proyectos.

## **Estructura de la investigación "Bootstrap"** 📋
---
Primero hemos plasmado las definiciones y contenidos de los items de Bootstrap que nos requería el proyecto. Acto seguido, hemos complementado las explicaciones con imagenes y estructuras de codigo claras para mejor entendimiento por parte del usuario

### * Ejemplo:  "_¿Que es un navBar de bootstrap? Pon un ejemplo_"
---
(Definición)
_"Es el potente encabezado de navegación sensible de Bootstrap. Incluye soporte para marca, navegación y más, incluido soporte para nuestro complemento de colapso._

(imagen)
![imagen](/media/navbar.png)

(Estructura de código)
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
* Acceda a la [**investigación completa de Bootstrap**](/bootstrap.md)

##  **Bridgedata** 🔧 
---
Bridgedata es una página web implementada con funcionalidades de Bootstrap que nos permite la creació n de usuarios y almacenamiento de datos en local Storage.

El proyecto consta de tres fases:

--> 1. Implementar un NavBar de Bootstrap con movilidad por las 2 vistas de la página.

--> 2. Crear la vista "Crear Usuario" con el formulario de contacto para obtener la información y guardarla en Local Storage, además de conformar las validaciones.

--> 3. Crear la vista "Usuario" donde se muestren los items "nombre y email" almacenada en Local Storage en Cards de Bootstrap

A continuación, se muestra como han quedado conformadas todas las fases del proyecto.


### **Ejecutando las pruebas** ⚙️
---
#### **NavBar**

_En la imagen se observa la barra de navegación con un menú desplegable y las dos vistas, al tener formato responsive, el menú permite en función de los navegadores, abrir el desplegable o ver ya desplegadas las dos opciones de vista_

![imagen NavBar](/media/imgnavbar.png)

#### **Vista "Crear Usuario"**

_En la imagen se muestra la página del formulario con uno de los mensajes de validación._

![imagen vista crear usuario](/media/imgvalidacion.png)

#### **Vista "Usuario"**

_En la imagen se ve como en la vista "Usuario" 
se van mostrando los items requeridos de todos los usuarios que se van creando_

![imagen vista ususario](/media/imgusuarios.png)



### **Codificación** ⌨️
----


## Construido con 🛠️

* [Bootstrap](https://getbootstrap-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sc) - Framework front-end
* [Visual Studio Code](https://code.visualstudio.com/) - Editor de código usado


## Autores ✒️

* Ismael Cervera - [amsiceza](https://github.com/amsiceza)
* Jose Llanas - [jllanas1986](https://github.com/jllanas1986)
