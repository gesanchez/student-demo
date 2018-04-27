# Student-Demo

Proyecto demo para realizar un registro de estudiantes haciendo uso del framework Angular


## Login
Se debe desarrollar un login que luzca lo mas parecido al mostrado en la imagen siguiente:

![](/src/assets/images/login.png)

## Registro
Se debe desarrollar un regstro que luzca lo mas parecido al mostrado en la imagen siguiente:

![](/src/assets/images/signup.png)

### Instalar dependencias

Antes de comenzar el desarrollo sobre el proyecto es necesario realizar la descarga de las dependencias necesarias para su ejecucion, para esto ejecutaremos el siguiente comando sobre la raiz del proyecto:
```sh
$ npm install
```

### Modo Desarrollo

Para ejecutar el proyecto en modo desarrollo se debe ejecutar el siguiente comando en la raiz del proyecto
```sh
$ ng serve
```

Por defecto el proyecto estara corriendo en el puerto **4200**

### Backend

El proyecto cuando con un servicio de backend mock que usaremos como storage, para invocarlo solo se debe ir a la carpeta **backend** e ejecutar la siguiente instruccion:

```sh
$ node index
```

Por defaul el server sera ejecutado en el puerto **3000**