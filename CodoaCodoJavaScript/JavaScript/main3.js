//* ------------------------------------------------------------------------- */
//*                    ASINCRONÍA - EJECUCIÓN EN 2° PLANO                     */
//* ------------------------------------------------------------------------- */
/* asincronicas -> en segundo plano corren funciones que demoran mas (quedando
a la espera de resultados) pero mientras, lo demas se sigue ejecutando */

console.clear();

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log("Hola")

//* ------------------------------- TIME OUT -------------------------------- */
// console.log(1)
// console.log(2)

// window.setTimeout(function() {
//     console.log("Hola")
// }, 3000)

// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

// el "hola" se ejecuta después de 3 segundos, ejecución en segundo plano
// el código se sigue ejecutando y después de los 3 seg, se ejecuta el "hola"



//* ------------------------------------------------------------------------- */
//*                           XHR - XMLHttpRequest                            */
//* ------------------------------------------------------------------------- */
//* permite viajar a traves de la web -> XMLHttpRequest()

/* 
Pasos:
1- hay que declarar una variable de este tipo -> xhr = new XMLHttpRequest
2- xhr.open("que quiero hacer", "donde buscarlo") -> metodo
get -> ir a buscar algo
3- xhr.send -> método para disparar el metodo (conseguir este recurso con esta orden)
*/

// var xhr = new XMLHttpRequest();

// console.log(xhr.readyState);

// xhr.open("get", "archivo.txt"); //* busca un recurso dentro de mi propio host/servidor
// console.log(xhr.readyState);

// xhr.send();
// console.log(xhr.readyState);

// // setTimeout(() =>{
// //     console.log("Texto recibido: " + xhr.responseText)
// // }, 5000);

//* xhr -> tipo de objeto creado para poder viajar por la web / caracteristica -> asincronía
//* xhr -> tipo de dato XMLHttpRequest()

//* readyState ->

//*open -> que quiero hacer y donde lo busque (dirección)
//* send -> donde lo mando
//* va a buscar algo -> GET / a donde? -> "archivo.txt"

// xhr.addEventListener("readystatechange", () => {
//     if(xhr.readyState == 4){
//         console.log("Texto recibido: " + xhr.responseText);
//     }
// })

//* xhr.responseText -> trae el texto (la respuesta la pedido de traer archivo.txt)

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */
//* -------------------------- Lo anterior...ordenado ------------------------ */

//* Ejemplo -> traer un archivo

// var xhr = new XMLHttpRequest();

// xhr.open("get", "archivo.txt");
//

// console.log(xhr.readyState);

// xhr.addEventListener("readystatechange", () => {
//     console.log(xhr.readyState);
//     if(xhr.readyState ==4){
//         console.log("Texto recibido: " + xhr.responseText);
//     }
// })

// xhr.send();

// setTimeout(() => {
//     console.log("texto recibido: " + xhr.responseText);
// }, 5000);

/* -------------------------------------------------------------------------- */
/*                                    LOAD                                    */
/* -------------------------------------------------------------------------- */
// cuando lo cargues, mostralo en consola -> load
// Verificar si llego bien -> xhr.status (errores o éxitos)

// var xhr = new XMLHttpRequest();

// xhr.open("get", "archivo.txt");

// // console.log(xhr.readyState);

// //ejemplo 1
// xhr.addEventListener("load", () => {
//     if(xhr.status == 200){
//         console.log("Texto recibido: " + xhr.responseText);
//     } else {
//         console.log("Algo salió mal");
//     }
// })

// // ejemplo 2
// xhr.addEventListener("load", () => {
//     if(xhr.status == 400){
//         console.log("Texto recibido: " + xhr.responseText);
//     } else {
//         console.log("Algo salió mal");
//     }
// })

// xhr.send();

/* -------------------------------------------------------------------------- */
/*                                 GET + LOAD                                 */
/* -------------------------------------------------------------------------- */

//* Ejemplo -> traer una parte de HTML -> PLANTILLAS

// let boton = document.getElementById("boton");
// let cuerpo = document.body;
// let xhr;


// boton.addEventListener("click", () => {

//   xhr = new XMLHttpRequest();

//   xhr.open("get", "inicio.html");

//   xhr.addEventListener("load", () => {
//     if (xhr.status == 200) {
//       //console.log("Texto recibido: " + xhr.response); //aparece por consola hasta acá

//       //* para que aparezca el contenido en el DOOM (lo de abajo hasta "else")
//         let main = document.createElement("main"); // onbjeto de tipo main
//         main.innerHTML = xhr.response;
//         cuerpo.appendChild(main);
//     } else {
//       console.log("Otro error");
//     }
//   });

//   xhr.send();
// });

/* -------------------------------------------------------------------------- */
/*                                    JSON                                    */
/* -------------------------------------------------------------------------- */



// let boton = document.getElementById("boton");
// let cuerpo =document.body;

// let xhr;


// boton.addEventListener("click", () => {

//   xhr = new XMLHttpRequest();

//   xhr.open("get", "datos.json");

//   xhr.addEventListener("load", () => {
//     if (xhr.status == 200) {

//         // console.log(xhr.response); //lo trae en formato JSON   
//         console.log(JSON.parse(xhr.response)); // desenvolver y transformarlo en objeto 
//     } else {
//       console.log("Otro error");
//     }
//   });

//   xhr.send();
// });


//* parse -> buscar! -> "desenvolver"

/* --------------------- crear array con los datos JSON --------------------- */

// let boton = document.getElementById("boton");
// let cuerpo =document.body;

// let xhr;
// let datos;

// boton.addEventListener("click", () => {

//   xhr = new XMLHttpRequest();

//   xhr.open("get", "datos.json");

//   xhr.addEventListener("load", () => {
//     if (xhr.status == 200) {

//        datos = JSON.parse(xhr.response); // variable que es un array de objetos
//     } else {
//       console.log("Otro error");
//     }
//   });

//   xhr.send();
// });

//"datos" -> desenvuelvo los datos json y los convierto en un array de objetos
// tengor que llamar "datos" desde la consola -> para ver el arreglo


/* -------------------------------------------------------------------------- */
/*                    Buscar datos JSON afuera del servidor                   */
/* -------------------------------------------------------------------------- */

//*json.placeholder web -> api rest / backend pública (de mentira, para pruebas)
//* buscar archivos en una web o en fuentes externas

// let boton = document.getElementById("boton");
// let cuerpo =document.body;

// let xhr;
// let datos;

// boton.addEventListener("click", () => {
//   xhr = new XMLHttpRequest();

//   xhr.open("get", "https://jsonplaceholder.typicode.com/users");

//   xhr.addEventListener("load", () => {
//     if (xhr.status == 200) {
//       datos = JSON.parse(xhr.response);
//     } else {
//       console.log("Otro error" + xhr.status);
//     }
//   });

//   xhr.send();
// });

/* Datos -> datos  /  datos[2].name


/* -------------------------------------------------------------------------- */
/*                                  PROMESA ¿?                                */
/* -------------------------------------------------------------------------- */

//* ejemplo x

// let xhr;

// let promesa = new Promise((resuelta, rechazada) => {

//     xhr = new XMLHttpRequest();

//     xhr.open("get", "https://jsonplaceholder.typicode.com/users");

//     xhr.addEventListener("load", () => {
//             if (xhr.status == 200) {
//              resuelta(JSON.parse(xhr.response));

//             } else {
//               rechazada("Otro error");
//             }
//         });
        
//         xhr.send();
// })

// .then((valor) => {
//     console.log(valor);
// })

// .catch((error) => {
//     console.log(error);
// })

/* ---------------------------------- FETCH --------------------------------- */

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json()) // lo transforma en JSON y se lo da al "then" de abajo
//   .then(json => console.log(json)) // lo imprime

  /* FETCH -> es una instruccion (promesa) que cuando lo ejecutas, recien cuando
  termine el open y el get (los tiene implicitamente)...recien va a ejecutar el código
  THEN */

  //* Fetch hace lo mismo que el ejemplo x (anterior) - se ejecuta con los .then

  /* -------------------------------------------------------------------------- */

