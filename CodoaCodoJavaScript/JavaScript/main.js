//console.clear(); // para limpiar consola

// //* --------------------- Variables --> var / const / let -------------------- *//

// /* -------------------------------------------------------------------------- */
// /*                                   Strings                                  */
// /* -------------------------------------------------------------------------- */

// let nombre= "Romina";
// let apellido= "Doval";

// let nombreCompleto= nombre + " " + apellido;

// console.log (nombreCompleto)
// console.log (nombre, apellido)

// //* Concatenar
// console.log("Mi nombre es " + nombre + " y mi apellido es " + apellido);

// console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`); 
//* Templates strings

// /* -------------------------------------------------------------------------- */
// /*                                   Números                                  */
// /* -------------------------------------------------------------------------- */

// var numero1 = 6;
// var numero2 = 8;
// let suma = numero1 + numero2;

// console.log(suma)

// //* Aparece en el documento (página web)
// document.write("La suma de numero1 y numero2 es" + " " + suma)

/* -------------------------------- parseInt -------------------------------- */

// let numero3 = "16";
// console.log(numero2 + parseInt(numero3)); //* convierte un string en n° entero

/* -------------------------------------------------------------------------- */

// console.log("La suma de 5 + 4 = " + (5 + 4));

// console.log(`La suma de numero1 + numero2 = ${numero1+numero2}`);




/* -------------------------------------------------------------------------- */
/*                     Sentencias Condicionales - If/Else                     */
/* -------------------------------------------------------------------------- */

// let edad;
// let genero;

// edad = prompt("Ingrese su edad");
// genero = prompt("Ingrese su género");

// if(edad >= 18){
//     console.log("Es mayor de edad");
// }else{
//     console.log("Es menor de edad");
// }

/* -------------------------------------------------------------------------- */

// let edad=18;

// if (edad > 0 && edad < 18) {
//     console.log("Es menor de edad");
// } else if (edad >= 18 && edad < 110){
//     console.log("Es mayor de edad");
// } else {
//     console.log("Edad inexistente");
// }

/* -------------------------------------------------------------------------- */

// let ubicacionTorneo=3;

// if (ubicacionTorneo ==1) {
//   console.log("Medalla de Oro")
// } else if (ubicacionTorneo == 2) {
//     console.log("Medalla de Plata");
//   } else if (ubicacionTorneo == 3){
//     console.log("Medalla de Bronce");
//   } else {
//     console.log("No ha conseguido medalla");
//   }

/* --------------------------------- Ejemplo x -------------------------------- */

// let mayor; 
// let num1, num2;

// num1= 16;
// num2= 8;

// console.log("El mayor es ");

// if (num1 > num2){
//   mayor = num1;
// } else {
//   mayor = num2;
// }
// console.log (mayor);

/* -------------------------------- Ejemploxx ------------------------------- */
// En el próximo ejemplo suponemos que los 2 números son distintos, no iguales

// let mayor;

// console.log("El número mayor es ");

// let num3 = 25, num4 = 18;

// if(num3 > num4) {
//     mayor = num3;
// } else {
//     mayor = num4;
// };

/* ---------------------------- Operador ternario --------------------------- */

// mayor = num3 > num4 ? num3 : num4;

// console.log(num3 > num4 ? num3 : num4)

// console.log(mayor);  

 /* -------------------------------------------------------------------------- */
 /*                             && -> Y   / || -> O                            */
 /* -------------------------------------------------------------------------- */

// let edad = prompt("Edad (sólo números)?");
// let genero = prompt("Género (M/F)?");

// if ((edad >= 60 && genero == 'F') || (edad >= 65 && genero == 'M')){
//     console.log("Puede jubilarse")
//     alert("Puede jubilarse")
// } else {
//     console.log("No puede jubilarse")
//     alert("No puede jubilarse")
// }


/* ---------------------- Operador condicional / ternario --------------------- */
/* ----------------------    condición ? expr1 : expr2    --------------------- */


// let mayor;
// let num1, num2;

// num1 = 6;
// num2 = 8;

// console.log("El número mayor es ");

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// mayor = num1 > num2 ? num1 : num2; //* operador ternario


/* -------------------------------- Ternario x -------------------------------- */

// let mayor; 
// let num1, num2;

// num1= 16;
// num2= 8;

// console.log("El mayor es ");

// mayor = num1 > num2 ? num1 : num2; //* operador ternario

// console.log (mayor);


/* -------------------------------------------------------------------------- */
/*                                   Switch                                   */
/* -------------------------------------------------------------------------- */

//* Forma 1
// let numero = 1;

// if (numero == 1) {
//   console.log("Uno");
// } else if (numero == 2) {
//   console.log("Dos");
// } else if (numero == 3) {
//   console.log("Tres");
// } else if (numero == 4) {
//   console.log("Cuatro");
// } else {
//   console.log("Número incorrecto");
// }


//* Forma 2 (lo anterior se puede hacer de esta forma (con switch))
// let numero=5

// switch (numero) {
//     case 1: console.log("Uno");
//             break;
//     case 2: console.log("Dos");
//             break;
//     case 3: console.log("Tres");
//             break;
//     case 4: console.log("Cuatro");
//             break;
//     default: console.log("Número incorrecto");
// }

// console.log("Despues del switch")


/* -------------------------------------------------------------------------- */

// let day;

// switch (new Date().getDay()) {
//     case 0:
//       day = "Domingo";
//       break;
//     case 1:
//       day = "Lunes";
//       break;
//     case 2:
//        day = "Martes";
//       break;
//     case 3:
//       day = "Miércoles";
//       break;
//     case 4:
//       day = "Jueves";
//       break;
//     case 5:
//       day = "Viernes";
//       break;
//     case 6:
//       day = "Sábado";
//       break;
//     default: day = "Inexistente"  
//   }
  
// console.log(day);

// consola new Date() -> nos muestra dia, fecha y hora de el día que estemos


/* -------------------------------------------------------------------------- */
/*                        WHILE / Estructuras Cíclicas                       */
/* -------------------------------------------------------------------------- */

// let indice = 10;

// while (indice >= 1){
//     console.log(indice);
//     indice = indice - 1; // Contador
// }

// console.log("Valor del indice al final: " + indice);

/* -------------------------------------------------------------------------- */

// let i = 1;

// console.log("Antes del While");

// while (i <= 10) {
//   console.log(i);
//   i = i + 1;
// }

// console.log("Después del While");

/* -------------------------------------------------------------------------- */

// let i = 1;

// do {
//   console.log(i);
//   i = i + 1;
// } while (i <= 3);

/* -------------------------------------------------------------------------- */
// let i = 0;

// do {
//   i = i + 1;
//   console.log(i);
// } while (i < 3);

/* -------------------------------------------------------------------------- */
// i = 1;

// do{
//     console.log(i)
//     i = i + 1;
// } while(i <= 4)
// va a ejecutarlo tantas veces mientras la condicion sea verdadera (i<=4)

/* -------------------------------------------------------------------------- */
/*                         FOR / Estructuras Cíclicas                         */
/* -------------------------------------------------------------------------- */

// let i;

// for( i=1; i <= 10; i++){
//     console.log(i);
// }

/* -------------------------------------------------------------------------- */
// for( i=10; i >= 1; i = i - 1){
//     console.log(i);
// }

// /* -------------------------------------------------------------------------- */
// for( i=2; i <= 10; i+=2){
//         console.log(i);
//     }

/* -------------------------------------------------------------------------- */
// for (let j=1; j <= 3; j=j+1){
//   console.log("J" + j);
// }

/* -------------------------------------------------------------------------- */
/*                                  Contador                                  */
/* -------------------------------------------------------------------------- */
//es aquella variable que se incrementa de 1 en 1


// for (let j=1; j <= 3; j++){
//     console.log(j);
//   }

/* --------------- Primero lo imprime y despues lo suma/resta --------------- */

// let contador = 0; // 0

// contador = contador + 1; // 1

// contador ++; // 2
// contador --;

/* --------------- Primero lo suma/resta y después lo imprime --------------- */
// ++contador;
// --contador;


/* -------------------------------------------------------------------------- */
/*                                 Acumulador                                 */
/* -------------------------------------------------------------------------- */

// let totalVentas = 0;

// totalVentas = totalVentas + 30;
// totalVentas = totalVentas + 56;
// totalVentas = totalVentas + 10;

// totalVentas += 30;
// totalVentas += 56;
// totalVentas += 10;

/* -------------------------------------------------------------------------- */

// let totVentas = 0;

// totVentas = totVentas + 78000;

// totVentas = totVentas + 102000;

// totVentas = totVentas + 53000;

// totVentas += 78000;
// totVentas += 102000;
// totVentas += 53000;

/* -------------------------------------------------------------------------- */

// let totalSuma = 100;
// totalSuma -= 30; // 100 - 30
// totalSuma = totalSuma - 30;  // 70 - 30

// let valor = 100;
// valor = valor - 10;
// valor -= 10;

/* -------------------------------------------------------------------------- */

// valor = 10;

// valor = valor * 3;
// valor *= 3;

// valor = valor / 9;
// valor /= 2;


//* ------------------------------------------------------------------------- */
//*                             Arrays - Arreglos                             */
//* ------------------------------------------------------------------------- */

// let numeros = [10,2,50,26,78];
// console.log(numeros[0])

// let nombres = ["Fernando", "Nancy", "Ana", "Oscar"];

// let varios =[1, true, "Juan"]; // puede tener elementos de distinto tipo

// const array = ["a", "b", "c"];


/* ------------------------------- Push - Pop ------------------------------- */

// let nombres = ["Fernando", "Nancy", "Ana", "Oscar"];

// nombres.push("Marcela");
// nombres.push("Pedro", "Paula");

// nombres.pop() // elimina el último elemento que agrege y lo guarda

// let ultimoEliminado = nombres.pop();


/* ----------------------------- Unshift - Shift ---------------------------- */

// let nombres = ["Fernando", "Nancy", "Ana", "Oscar", "Marcela"];

// nombres.unshift("Silvina");
// nombres.shift()

/* --------------------------------- Concat --------------------------------- */
//* concatena elementos pasados por parámetro

// let array = [1, 2, 3];
// array = array.concat(4,5,6);
// array = array.concat([7, 8, 9]);

/* ----------------------------- Slice - Splice ----------------------------- */
/*devuelve los elementos del array desde la posición ini hasta la posición end, 
permitiendo crear un nuevo array más pequeño con ese grupo de elementos. 
Recuerda que las posiciones empiezan a contar desde 0. 
En el caso de que no se proporcione el parámetro end, se devuelven todos los 
elementos desde la posición ini hasta el final del array. */


// let nombres = ["Fernando", "Nancy", "Ana", "Oscar", "Marcela"];

// let nombresEspeciales = nombres.slice(2,4); //devuelve "Ana" y "Oscar" 

// let nombresEliminados = nombres.splice(2, 2); 
// toma "Ana" y "Oscar", los elminina del Array original, y los guarda

/* ---------------------------------- Join ---------------------------------- */
/* Con join() podemos crear un  con todos los elementos del array, separándolo 
por el texto que le pasemos por parámetro: */

// let nombres = ["Fernando", "Nancy", "Marcela"];
// nombres.join(" - "); //ponemos directamente en la consola

// nombres = nombres.join(" - "); //para que aparezca el cambio en la consola
//  //* devuelve una cadena de strings

// ['G', 'a', 'b', 'r', 'i', 'e', 'l'].join("");//ponemos en la consola

// let nombreG = ['G', 'a', 'b', 'r', 'i', 'e', 'l'].join("");


 /* ---------------------------------- Split --------------------------------- */
 // Con split() es posible crear un  a partir de un string

//  let probando = "5.4.3.2.1".split(".");
//  let probando2 = "Gabriel".split("");

/* ------------------------- Desestructurar un array ------------------------ */
// separar un arreglo en variables separadas

// let amigos = ["Juan", "Pedro", "Maria"];

// let [amigo1, amigo2, amigo3] = amigos;

/* -------------------------------------------------------------------------- */

// let person = {
//     nombre: "Pedro",
//     apellido: "Saldivar"
// };

// let {nombre, apellido} = person;



/* -------------------------------------------------------------------------- */
/*                                   OBJETOS                                  */
/* -------------------------------------------------------------------------- */
//* objetos -> {} / propiedad : valor

// let persona1 = {
//     nombre: "Manuel",
//     apellido: "Alen",
//     edad: 35,
//     correo: "manuel.alen@gmail.com",
// }

// let persona2 = {
//     nombre: "Romina",
//     apellido: "Doval",
//     edad: 40,
//     correo: "romina.doval@gmail.com",
// }

// let producto1 = {
//     id: 4,
//     nombre: "Peine",
//     precio: 600
// }

/* -------------------------------------------------------------------------- */
// let personas = [
//     {legajo: 1, nombre: "Natalia", apellido: "Perez"},
//     {legajo: 2, nombre: "Matias", apellido: "Ramirez"},
//     {legajo: 3, nombre: "Delia", apellido: "Lopez"},
// ]

/* consola 

personas
personas[0]
personas[2]
*/

 /* -------------------------------------------------------------------------- */

//  let persona4 = {
//     nombre: "Ana",
//     apellido: "Salcedo",
//     edad: 35,
//     correo: "ana.salcedo@gmail.com",
//     //hobbie: "tenis"
//     hobbies: ["tenis", "ajedrez", "guitarra"],

//     mascota: {
//         nombre: "Junior",
//         tipoMascota: "Perro",
//         raza: "Caniche"
//     }
// }

/* consola

persona4
persona4.hobbie
persona4.hobbies
persona4.mascota
*/

/* -------------------------------------------------------------------------- */
/*                              Ejemplos OBJETOS                              */
/* -------------------------------------------------------------------------- */

// let persona5 = {
//     nombre:"Juan",
//     apellido: "Perez",
//     edad: 25,
//     correo: "correo@gmail.com",
//     hobbies: ["Tenis","Ajedrez","Piano"],
//     mascotas: [{nombre: "Junior", tipo:"Perro", peso:"4 kilos"},
//                 {nombre: "Cleta", tipo:"Tortuga", peso:"6 kilos"}
//               ]
// }


// let persona6 = {
//     nombre:"Silvia",
//     apellido: "Gonzalez",
//     edad: 58,
//     correo: "silvia@gmail.com"
// }


// let product7 = {
//     id: 1,
//     nombreProducto: "PeineBlando",
//     descripcion: "Peine para Mascotas",
//     precio: 700
// }


// let productos = [
//     {id: 1,
//     nombre:"Peine", 
//     precio: 500},
//     {id: 2,
//     nombre:"Cepillo",
//     precio: 700}
// ]


/* -------------------------------------------------------------------------- */
/*                                  FUNCIONES                                 */
/* -------------------------------------------------------------------------- */

// function sumar() {
//     console.log(5+6)
// };
//resultado 11 Undefined

// function sumar() {
//     return (5+6)
// };

// consola -> sumar() 


// function sumar (num1, num2) {
//     return (num1 + num2)
// };

// consola -> sumar(15,25)

/* -------------------------------------------------------------------------- */

// function saludar (nombre) {
//     return "Hola " + nombre;
// }

// consola -> saludar("Romina")


//* -------------------------- Función Tradicional -------------------------- */

// function saludar(nombre){
//     return "Hola que tal " + nombre;
// }

// consola -> saludar("Ana")


//* ---------------------------- Función Anónima ---------------------------- */
//variable de tipo function - La function en si misma no lleva ningun nombre

// let saludar1 = function(nombre){
//     return "Hola como estas " + nombre;
// }

// consola -> saludar1("nombre")

// let suma = function(num1, num2){
//     return(num1+num2);
// }

//* ---------------------------- Función Flecha ----------------------------- */

// let saludar2 = (nombre) => {
//     return "Hola que tal " + nombre;
// }

// let saludar3 = nombre => "Hola que tal " + nombre; // funcion


/* ------- Función de flecha que reciba un numero y devuelva el doble ------- */

// let doble2 = function(num){
//     return num * 2;
// }

// let doble = numero => numero * 2; // o -> let doble = numero => numero * numero;


 /* -------------------------------------------------------------------------- */
 /*                        Estructura de control ciclica                       */
 /* -------------------------------------------------------------------------- */

// for(let i=1; i <= 10; i++){
//     console.log(saludar(i));    
// }

/* -------------------------------------------------------------------------- */

// function saludar4(num){
//     return "Hola que tal " + num;
// }

// console.log(saludar4(1000));


// for(let i=1; i <= 10; i++){
//     console.log(saludar4(i));    
// }

//* ------------------------------------------------------------------------- */
//* la funcion puede recibir un valor declarado afuera

// let num3 = 9;

// let suma1 = function(num1, num2){
//     return(num1+num2+num3);
// }


/* -------------------------------------------------------------------------- */
/*                             AREGLOS Y FUNCIONES                            */
/* -------------------------------------------------------------------------- */
//* las funciones a veces forman parte de una array
//* se puede crear un array basado en otro, que tiene un método/function

// let numeros = [10, 45, 16, 13];

// let doble = numero => numero * 2;
// let triple = numero => numero * 3;

//callback / 2 formas de poner lo mismo
// let dobles = numeros.map(numero => numero * 2); 
// let dobles1 = numeros.map(doble); 
//* crea un nuevo array con igual cantidad de elementos (pero cuyos valores son dobles)

// consola
// numeros.map(numero => numero * 2); 
// numeros.map(numero => numero * 3); 

/* -------------------------------------------------------------------------- */
/*                   Recorrer un arreglo con un ciclo (for)                   */
/* -------------------------------------------------------------------------- */

// let nums = [2,4,6];

// for(let i=0; i <= 2; i++) {
//     console.log(nums[i]);
// }

// for(let i=0; i < nums.length; i++) {
//     console.log(nums[i]);
// }

/* -------------------------------------------------------------------------- */


// let nums = [2,4,6];
// let duplicado = [];

// for (let i = 0; i < nums.length; i++) {
//     duplicado.push(nums[i] * 2);
// }

/* -------------------------------------------------------------------------- */

// let nombres = ["Raul","Pedro","Juana"];

// for(let j = 0; j < nombres.length; j = j + 1){
//     console.log("Hola " + nombres[j]);
// }

 //* ------------------------- Ejemplo de For...each ------------------------- */
 //* no genera array nuevo

// let nombres = ["Raul","Pedro","Juana"];

// nombres.forEach(element => {
//     console.log(element);
// });


/* -------------------------------------------------------------------------- */
/*                                  FUNCIONES                                 */
/* -------------------------------------------------------------------------- */

// function saludarx () {
//     return ("Hola");
// }
// console.log(saludarx())


// function saludar(nombre, apellido){
//     return("Hola " + nombre + " " + apellido);
// }

/* -------------------------------------------------------------------------- */

// function caminar(){
//     return("Caminando");
// }
// console.log(caminar()) // Ejecución de la function (lo que devuelve la funcion)


// function dormir(){
//     return("Durmiendo");
// }


//* una function puede recibir otra función como parámetro y la puede ejecutar adentro
//* callback?

// function accion(funcion){
//     return funcion();
// }

//consola -> accion(caminar);

// console.log(accion(caminar)); // Funcion


//* --------------------------------- CONST --------------------------------- */
/*const -> valor fijo (no lo puedo cambiar)
para "arrays" conviene usar "const" (chequear)*/

// const words = ["pelo", "caratula", "pensamiento", "red", "paralelo", "sol"];

/* consola
words
words [0] = "tela"; // agrega "tela" a la lista
words = "palabra" 
    -> no puedo cambiar la estructura (permanece constante) 
       no se puede convertir en otro tipo
*/

// const palabraGrande = (word) => {
//     return word.length > 5
// };

// consola -> palabraGrande("Hola") / palabraGrande("Periodista")


// const bigWords = words.filter(palabraGrande);
// va a generar un nuevo array solo con las palabras "length > 5"

// consola -> (3) ['caratula', 'pensamiento', 'paralelo']


/* -------------------------------------------------------------------------- */
/*                                   VARIOS                                   */
/* -------------------------------------------------------------------------- */
//* Árbol -> estructura jerárquica documento

//* Consola 
// window.document // muestra el ducumento HTML 
// window.document.body
























