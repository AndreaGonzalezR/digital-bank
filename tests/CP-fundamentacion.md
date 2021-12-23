# Casos de prueba en el Log in de Digital Bank

### CP 1: **Log in con credenciales correctas**

Este caso de prueba verifica que cuando un usuario ingresa con las credenciales correctas en la pantalla de login de Digital Bank, el sitio web lo redirige a la pagina de Inicio. Se realiza este caso de prueba para comprobar que el sistema funciona correctamente si un usuario ingresa las credenciales válidas.

En este caso las credenciales correctas para poder loguearse son las siguientes:

* Username: jsmith@demo.io

* Password: Demo123!

El resultado observado luego de ejecutar este caso de prueba es que el usuario logra acceder a la página web de Digital Bank.

### CP 2: **Login con username incorrecto y password correcta**

Este caso de prueba tiene el objetivo de verificar que no sea posible hace log in con un username diferente a jsmith@demo.io 

Para realizar este caso de prueba se intenta acceder a la aplicacion Digital Bank con las siguientes credenciales:

* Username: andrea@demo.io

* Password: Demo123!

El resultado observado es que no se puede acceder al sitio web de Digital Bank y se visualiza un mensaje de error.

### CP 3: **Login con username correcto y password incorrecta**

En este caso de prueba se intenta acceder al sitio con el username correcto, pero la password es incorrecta:

* Username: jsmith@demo.io

* Password: Abc

El resultado observado es un mensaje de error, y no es posible iniciar sesion en el sitio de Digital Bank.


### CP 4: **Login con credenciales correctas y casilla de Remember me seleccionada**

En este caso de prueba se ingresan las credenciales válidas para ingresar al sitio, pero la diferencia en relación al CP 1, es que se activa un checkbox que se denomina "Remember me". 
Se decidió realizar este caso de prueba con la finalidad de verificar que es posible acceder a la página de Inicio de Digital Bank, con las credenciales correctas y con esta checkbox seleccionada.

El resultado observado es que sí se puede acceder al sitio web.