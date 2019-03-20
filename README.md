# Challenge - Test Práctico - FrontEnd

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de
resultados, y la descripción del detalle del producto.

### Stack tecnológico usados para construir la aplicación:
  - Cliente:
      - HTML
      - JS (React JS)
      - CSS (Sass)
  - Servidor:
      - Node >= 6
      - Express

### Descarga e instalacion de dependencias del Proyecto
  - Clonación del proyecto:
    - ``` git clone https://github.com/jorgecardozo/challenge-test.git ```
  - Instalacion de dependencias: 
     - ``` npm install ```
     
## Esquema del Proyecto

  El proyecto consta de dos partes Cliente (FrontEnd) y Servidor (BackEnd)
  
  1. Cliente
    Comando para ejecutar el cliente:
      - npm start
      - Se de accceder a (http://localhost:3000/)
  2. Servidor
    Comandos para ejecutar el servidor:
     - npm start
     - Todas las solicitudes accederan a (http://localhost:4000/api/items)
     
     
--------------------------------------------------------------------------

## El uso de React se centro en las siguientes caracteristicas de este Freamwork
  React es una libreria para crear interfaces de usuario, es declarativo, basado en componentes e independiente del resto de las tecnologías.
  
  ### Caracteristicas principales:
   - Favorece la **reusabilidad** de componentes,
   - Orientado a desarrollo de UI(Interfaces de Usuario),
   - JSX para integrar HTML y Javascript de manera **elegante**,
   - Permite renderizado en el servidor,
   - Fácil de testear,
   - Se puede integrar en páginas existentes e incluso mezclar con frameworks JS,
   - Permite crear páginas webs, así como también aplicaciones móviles (nativas).
   
   ### Componentes
  Los componentes permiten **dividir la Interfaz de Usuario** (UI) en **partes independientes**, **reusables de código**, y pensar de manera **aislada** en ellos.
  
  ### JSX
   JSX es una extensión a JavaScript muy usada en React, permite de manera muy elegante usar componentes y elementos HTML mezclado con JavaScript.
    Es aún mejor que un lenguaje de templating, porque está disponible directamente en JavaScript.

 Componentes con JSX permiten combinar lógica y markup:
  - cómo se manejan los eventos, 
  - cómo cambia el estado en el tiempo, y
  - cómo la información es preparada para ser visualizada.
  
  ### Renderizado
   React está pensado para poder ser usado tanto en aplicaciones web como en aplicaciones móviles nativas.
   Eso explica la necesidad del paquete  'react-dom', que nos permite mostrar los componentes en una página web.
   
---------------------------------------------------------------------------------

## El Sass se centro en las siguientes caracteristicas de este preprocesasador de CSS
Es un lenguaje de script (SassScript) que una vez que es compilado es traducido a CSS. También proporciona mecanismos como el uso de variables, partials, import, nesting (anidamiento), mixins, y herencia de los selectores.

   ### Caracteristicas principales:
   
   El usar Sass apoya en la construcción de bloques de código de forma más **modular**, cosa que con CSS la verdad no era posible hacerlo. Pero que quiero decir de forma más modular, pues que te ***permite construir bloques de código y reutilizarlos e inclusive hacer herencia de estos bloques de código y heredarlos a otros selectores***, cosa muy parecida a lo que ofrece un lenguaje de programación.
   
   ### Algunos mecanismo que nos ofrece: 
   
   - **Definición de variables**: las variables comienzan con el signo de dolar **$** y la asignación de variables se hace con el uso de dos puntos :
  Estas variables permiten 4 tipos de datos los cuales son: números, String o cadenas de caracteres, colores en hexadecimal o por nombre (en ingles) y valores de tipo booleano.

  - **Partials**:  Un **partial** es un **archivo Sass nombrado al principio con un subrayado inicial**. Puedes asignarle un nombre como **_variables.scss** y escribir en él la declaración y asignación de variables en **Sass** de tu proyecto. Es importante destacar que el guión bajo le permite a **Sass** saber que el archivo es solo un archivo partial y que este sera llamado con la directiva **@import** desde el archivo principal **.scss** o **.sass**. Esto ayuda a ordenar, separar o modularizar a nivel de archivo tu código **Sass**.
  - **Import**: La opción o directiva de importación **@import** te permite dividir junto con los archivos partials el **CSS** en partes pequeñas y fáciles de mantener. Solo hay un inconveniente que se detalla en la documentación oficial y es que cada vez que se utiliza un **@import** en **CSS** se crea otra solicitud **HTTP**.
  - **Nesting (anidamiento)**: **Sass** te permitirá anidar tus selectores **CSS** de una manera que siga una jerarquía visual de tipo **HTML**. Pero hay que tener en cuenta que las reglas excesivamente anidadas resultarán en **CSS** difícil de mantener y se considera una mala práctica. Así que no abusar de muchos anidamientos y sobre-anidamientos de tus selectores.
  - **Mixins**: Un mixins es parecida a una función (semejante a la de un lenguaje de programación) que podrá ser usada en distintos **selectores**, lo que permitirá escribir valores o atributos **CSS** y reutilizarlos adecuadamente. Esto  es uno de los aportes que mencionaba que **Sass** ayudaba a hacer bloques de código de forma modular.
  - **Herencia**: Esta es otra de las caracteristicas más utiles de **Sass**. Haciendo uso de la palabra reservada **@extend** te permite compartir un conjunto de **propiedades CSS** de un selector a otro.
  - **Operators**: **Sass** ofrece un puñado de operadores matemáticos estándar como son: **Adición (+)**, **Sustracción (–)**, **Multiplicación (*)**, **División (/)** y **Modulo (%)**.
   


  
