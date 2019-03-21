# Challenge - Test Práctico - FrontEnd
------------------------------------------------------------------------------------------------

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de
resultados, y la descripción del detalle del producto.

------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------

### Stack tecnológico usados para construir la aplicación:
  - Cliente:
      - HTML
      - JS (React JS versión 16.6.3)
      - CSS (Sass versión 4.11.0) y Bootstrap versión 4.1.3
  - Servidor:
      - Node (versión 10.15.0)
      - Express (versión 1.0.0)
      
-------------------------------------------------------------------------------------------------

### Descarga e instalacion de dependencias del Proyecto
  - Clonación del proyecto:
    - ``` git clone https://github.com/jorgecardozo/challenge-test.git ```
  - Instalacion de dependencias: 
     - ``` npm install ```
     
-------------------------------------------------------------------------------------------------
 
## Esquema del Proyecto

  El proyecto consta de dos partes Cliente (FrontEnd) y Servidor (BackEnd)
  
  1. Cliente
    Comando para ejecutar el cliente:
      - npm start
      - Se debe accceder a (http://localhost:3000/)
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

## El uso de Sass se centro en las siguientes caracteristicas de este preprocesasador de CSS
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
  
-------------------------------------------------------------------------------------------------------------------
  
  ## El uso de Bootstrap se centro en las siguientes caracteristicas de este Frameowrk
  Bootstrap es un framework desarrollado y liberado por Twitter que tiene como objetivo facilitar el diseño web. Permite crear de forma sencilla webs de diseño adaptable, es decir, que se ajusten a cualquier dispositivo y tamaño de pantalla y siempre se vean igual de bien **(responsive)**. Es Open Source, por lo que lo podemos usar de forma gratuita y sin restricciones.
  
  ### Caracteristicas principales:
  
 Nos permite simplificar el **proceso de maquetación**, sirviéndonos de guía para aplicar las buenas prácticas y los diferentes estándares.

  - Puedes tener una web bien organizada de forma visual rápidamente: la curva de aprendizaje hace que su manejo sea asequible y rápido si ya sabes maquetar.

  - Permite utilizar muchos elementos web: desde iconos a desplegables, combinando HTML5, CSS y Javascript.
  - Sea lo que sea que creemos, el diseño será adaptable, no importa el dispositivo, la escala o resolución.
  - El grid system: maquetar por columnas nunca fue tan fácil. Además, son muy configurables.
  - Se integra muy bien con las principales librerías Javascript.
  - El haber sido creado por Twitter nos da ciertas garantías: está muy pensado y hay mucho trabajo ya hecho. Por lo tanto, hay una comunidad muy activa creando, arreglando cosas, ofreciendo plugins y mucho más..
  - Cuenta con implementaciones externas para WordPress, Drupal, etc.
  - Nos permite usar Less, para enriquecer aún más los estilos de la web.
   
----------------------------------------------------------------------------------------------------------------------

## Se tuvieron en cuenta los aspectos propuestos para el challenge:

### Usabilidad
  - Al iniciar la página de la aplicación se hace **foco** en el **input** del buscador, esto beneficia al usuario para no hacer **click** dentro del **input** y buscar. Tmbnien luego de cada busqueda se vuleve a hacer **foco** en dicho **input**.
  - Se agrego un **NotFound Page** para que el usuario se de cuenta de que su solicitud no fue encontrada o resuelta, y se vuelve a hacer **foco** en el **input** del buscador. 
    Esta **NotFound Page** se muestra en caso de que:
        - La ruta **url** no haga match.
        - La peticion de busqueda al servidor se erronea.
        - La busqueda del clienta sea vacia.
  - La aplicacion es adaptable a cualquier dispositivo usado por el cliente. Esto se logro al utilizar Bootstrap, el cual nos provee los beneficios de crear una app responsive.
### Escalabilidad
  Como anteriormente mencione las caracteristicas de por que use React y Sass, estos framework fueron esenciales a la hora de pensar en la ***escalabilidad*** de la app, ya que estan basados en **componentes**, ya que permiten reutilizar la funcionalidad de cada uno de ellos, y permite tener control independiente. 
  
### SEO (Search Engine Optimization)
  El posicionamiento en **buscadores** u optimización de **motores de búsqueda** es el proceso de mejorar la visibilidad de un sitio web en los resultados orgánicos de los diferentes buscadores.


  Para aplicar este conceptode SEO se utilizo la siguientet libreria para agregar ***meta tags***:
    - react-meta-tags
    
Las **Meta tags** sirven para que Google pueda detectar una web y colocarla en sus SERPs en base al tipo de contenido que poseen. El bueno uso de las palabras clave en ella es esencial para conseguir una visibilidad adecuada, por lo que saber construir estas etiquetas es uno de los caminos más rápidos hacia el buen posicionamiento **SEO**.

Su finalidad no es otra más que facilitar la **detección por parte de los motores de búsqueda**, aunque también traen consigo un importante **aumento de tráfico** si saben aprovecharse como es debido.

### Perfomance
  En cuanto a la performance, el uso de React fue algo clave para esto, ya que nos permite un desarrollo ágil, ordenado y con una arquitectura mantenible, focalizada en componentes y que nos ofrece un gran performance.



  
