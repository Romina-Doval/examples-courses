
//* ------------------------------------------------------------------------- */
//*                   Variables y tipos de datos  - Typeof                    */
//* ------------------------------------------------------------------------- */

// //* STRING
// var nombre = "Romina";
// console.log(nombre);
// console.log(typeof(nombre));

// //* NUMBER
// var edad = 40;
// console.log(edad);
// console.log(typeof(edad));

// //* NUMBER
// var sueldo = 1900.99;
// console.log(sueldo);
// console.log(typeof(sueldo));

// //* BOOLEAN
// var TieneTrabajo = false;
// console.log(TieneTrabajo);
// console.log(typeof(TieneTrabajo));

// //* UNDEFINED
// var puestoDeTrabajo;
// console.log(puestoDeTrabajo);

// //* NULL
// puestoDeTrabajo = null;
// console.log(puestoDeTrabajo);



//* ------------------------------------------------------------------------- */
//*                   DECLARACIÓN VS. EXPRESIÓN DE FUNCTION                   */
//* ------------------------------------------------------------------------- */

/* DECLARACIÓN
1- siempre empieza con la palabra reservada "function"
2- el no,bre es obligatorio
3- las funciones de flecha no existen*/

// function saludar () {

// }

//EXPRESIONES --> el nombre de la función es opcional ( e irrelevante) 

// let f = function suma(){

// }


/* Resumen
1- Una función puede ser "creada" con una declaración de función o una expresión 
de función
2- Las declaraciones de función se mueven al ppio del alcance, por lo que pueden 
ser usadas antes de aparecer en el código --> hoisting
3- Las expresiones de función pueden o no tenr nombres
4- Las expresiones de función sin nombre se las conoce como funciones anónimas
5- Las expresiones de función pueden usar la sintaxis de flecha*/


//* ------------------------------------------------------------------------- */
//*                       Scope o alcance de variables                        */
//* ------------------------------------------------------------------------- */

/* Scope global -> variables, funciones y objetos que pueden ser usadas y
accedidas desde cualquier parte del código. Si las modificamos, afectan su valor
en cualquier otro lado --> es todo aquello que no ha sido declarado dentro de 
un bloque o función*/
//* Variables globales -> variables declaradas fuera de una función o bloque

/* Scope local --> variables, funciones y objetos solo accesibles dentro del
bloque o función --> elementos disponibles solo para una función*/
//* Variables locales -> variables declaradas dentro de un función y bloque

/* -------------------------------------------------------------------------- */
//! let/const --> alacance de bloque
//! var --> alcance function/local

// function Presentacion(nombre, admin){
//   if (admin) {
//     //var rol = "administrador";
//     //let rol = "Administrador";
//   }else{
//     rol = "Usuario";
//   }
//   console.log("Soy "+ nombre + "y mi rol es: "+rol);
//   }

//   Presentación ("Romina", true);
//   Presentación ("Romina", false);

/* -------------------------------------------------------------------------- */

//! Importante!
/* Cuando una variable está declarada sin let/var/const -> no importa donde
esté declarada, automáticamente se asigna al scope global*/

/* ej:
function decirHola() {
  nombre = "Romina"; --> ejemplo
  console.log("Hola " + nombre);
} 

/* -------------------------------------------------------------------------- */

/*
1- var siempre se aloja en el scope local dentro de una función o en el global
si está fuera de una función
2- let / const puede alojarse en el scope local, de bloque y global, según sea
declarada en una función, en un bloque o fuera de ambos
3- El valor para una variable con var que no ha sido asignada es undefined
4- El valor para una variable con let que no ha sido asignada es unitialized
5- Las variables también son alojadas al tope del scope, sin embargo, si se
intenta usar una variable no inicializada, se recibirá error
*/


//* ------------------------------------------------------------------------- */
//*                      Alcance de función y de bloque                       */
//* ------------------------------------------------------------------------- */

/* Alcance de función -> los recursos son accesibles desde cualquier punto 
dentro del bloque de la función (desde que abre la { de la función hasta su cierre*/

/* Alcance de bloque -> los recursos definidos dentro de un bloque de ejecución, 
solo están disponibles dentro de ese bloque y no en toda la función (ej -> if {} */


// function hola (nombre){
//   if (nombre) {
//     var saludo = "Hola " + nombre;
//     //let saludo = "Hola " + nombre; //--> alcance de bloque
//     // const saludo = "Hola " + nombre; //--> alcance de bloque
//   }
//   console.log(saludo);
// }

// hola("Romina");

/* -------------------------------------------------------------------------- */

// function hola (nombre){
//   if (nombre) {
//      let saludo = "Hola " + nombre; //--> alcance de bloque
//     // const saludo = "Hola " + nombre; //--> alcance de bloque
//     console.log(saludo);
//   } 
// }

// hola("Romina");


//* var -> alcance de función --> alacance dentro de la función más próxima
//* let y const --> alcance de bloque --> alcance dentro del bloque más próximo


//* ------------------------------------------------------------------------- */
//*                   OPERADORES MATEMÁTICOS  +  -  *  /  %                   */
//* ------------------------------------------------------------------------- */

// var edadAna, edadMaria, diferenciaEdad;
// var sumaEdades, yearAna, yearMaria, yearActual;

// edadAna = 34;
// edadMaria = 28;
// yearActual = 2022;

// diferenciaEdad = edadAna - edadMaria;
// sumaEdades = edadAna + edadMaria;

// yearAna = yearActual - edadAna;
// yearMaria = yearActual - edadMaria;

// console.log(diferenciaEdad);
// console.log(sumaEdades);
// console.log('Año en que nació Ana ' + yearAna);
// console.log('Año en que nació María ' + yearMaria);
// console.log(yearActual * 5);
// console.log(yearActual / 2);


//* ------------------------------------------------------------------------- */
//*        OPERADORES DE COMPARACIÓN, LÓGICOS, UNARIOS Y DE ASIGNACIÓN        */
//* ------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          Operadores de comparación                         */
/* -------------------------------------------------------------------------- */

/*
==   Igual
===  Estrictamente igual

!=   Desigualdad (negación)
!==  Desigualdad estricta

x > y  Mayor que
x < y  Menor que

>=  Mayor o igual que
<=  Menor o igual que
*/

/* -------------------------------------------------------------------------- */

// var edadAna, edadMaria, diferenciaEdad;
// edadAna = 34;
// edadMaria = 28;

// //Ejemplos
// var mayorAna = edadAna > edadMaria;
// var mayorAna = edadAna == edadMaria;
// var mayorAna = !(edadAna == edadMaria);
// console.log(mayorAna);


/* -------------------------------------------------------------------------- */
/*                             Operadores lógicos                             */
/* -------------------------------------------------------------------------- */

//  &&  Operador AND
//  ||  Operador OR
//  !   Negación o NOT
// ??  Operador nulish coalescing  / fusión de nulos o unión nulosa

/* -------------------------------------------------------------------------- */
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

/* -------------------------------------------------------------------------- */

// let edad=28;

// console.log(edad > 18 && edad < 30);
// console.log(edad > 18 && edad < 25);

// console.log(10 && 0); // retorna valor false -> 0
// console.log(10 && 20); // retorna valor true -> 20
// console.log(20 && 10);  // retorna valor true -> 10
// console.log(20 && 5 && false); // retorna false

//* retorna el primer valor false, sino encuentra retorna true
//* cuando no encuentra false...retorna el primer valor true
//* casos especiales -> retorna el primer false o el último true


/* -------------------------------------------------------------------------- */
//* si al menos 1 condición es true...retorna true
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// let edad=20;

// // console.log( edad < asdasd || edad > 18); // error forzado
// console.log(edad > 18 || edad < 25);

// console.log(20 || 10);
// console.log(20 || 5 || false);

/* -------------------------------------------------------------------------- */

// console.log(10>15);
// console.log(!(10>15));

/* -------------------------------------------------------------------------- */

// console.log("" ?? "Hola"); // para ver si un dato es especifícamente falso
// console.log(false ?? "Hola")
// chequear


 /* -------------------------------------------------------------------------- */
 /*                     Unarios, ++Incremento, --Decremento                    */
 /* -------------------------------------------------------------------------- */

// //edadAna++;
// console.log(edadAna++);
// console.log(++edadAna);
// console.log(edadAna);

// //* --------------------- Asignación, +=, -=, *=, /=, %= -------------------- */

// var a = 12;
// var b = 5;

// var c = a % 5; //*Residuo o resto de una división
// console.log(c);

// a += b; // a = a + b;
// console.log(a);


//* ------------------------------------------------------------------------- */
//*                         SENTENCIAS CONDICIONALES                          */
//* ------------------------------------------------------------------------- */

//* ------------------------------------------------------------------------- */
//*                                 IF...ELSE                                 */
//* ------------------------------------------------------------------------- */

// /*Ejecuta una sentencia si una condición específicada es evaluada como verdadera. 
// Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.
// Es opcional..."puede ser" ejecutada */

// var nombre = "Romina";
// var esCasado = true; // false;

// if (esCasado == true){
//     console.log(nombre + " es casada");
// } else {
//     console.log(nombre + " es soltera");
// }


//* ------------------------------- IF anidados ----------------------------- */

// si edad < 12, es un niño
// si edad > 11 y es < 18, es un adolscente
// si edad > 17 y es < 60, es un adulto
// si edad >60, es un anciano

// var nombre = "Manuel";
// var edad = 35;

// if (edad < 12) {
//     console.log(nombre + " es un niño");
// } else if ((edad > 11) && (edad < 18)) {
//     console.log(nombre + " es un adolescente");
// } else if((edad > 17) && (edad < 60)) {
//     console.log(nombre + " es un adulto");
// } else {
//     console.log(nombre + " es un anciano");
// }


//* ------------------------------------------------------------------------- */
//*                      ESTRUCTURAS DE CONTROL - CICLOS                      */
//* ------------------------------------------------------------------------- */

//* ------------------------------------------------------------------------- */
//*                                  SWITCH                                   */
//* ------------------------------------------------------------------------- */

/* Evalúa una expresión/variable, comparando el valor de esa expresión con una 
 instancia "case", y ejecuta declaraciones asociadas a ese "case", así como las 
 declaraciones en los "case" que siguen */


// var mes = 3;

// switch(mes){
//     case 1:
//         console.log("Enero");
//         break;
//     case 2:
//         console.log("Febrero");
//         break;
//      case 3:
//         console.log("Marzo");
//         break;
//      case 4:
//         console.log("Abril");
//         break;
//      default:
//         console.log("Mes no encontado");
//  }

/* Break -> corta el código -> sale del ciclo y deja de ejecutarse el código
 /*Default -> Declaraciones ejecutadas cuando ninguno de los valores coincide 
 con el valor de la expresión */

 /* -------------------------------------------------------------------------- */

// const animal ="gato";

// switch (animal) {
//   case "perro":
//     console.log("Perro");
//     break;
//   case "gato":
//     console.log("Gato");
//     break;
//   default:
//     console.log("Zero");
//     break;
// }


//* ------------------------------------------------------------------------- */
//*                                    FOR                                    */
//* ------------------------------------------------------------------------- */

/* Crea un bucle que consiste en 3 expresiones opcionales, encerradas en () y 
separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle */ 
/*
//* for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

1- FOR + Intrucción inicial (expresión inicial)
2- Condición
3- Intrucción después de cada interacción (Expresión final) 
*/

//Imprimir números del 1 al 10

// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }
//* i++ -> i = i + 1

/* -------------------------------------------------------------------------- */

// for(var i = 1; i <= 10; i += 2){
//     console.log(i);
// }

// for(var i = 5; i <= 25; i+=5){
//     console.log(i);
// }

/* -------------------------- Curso Código Facilito ------------------------- */

// for(let i=1; i <= 10; i++) {
//   console.log(i);
//   if (i == 5) {break; }
// }

/* -------------------------------------------------------------------------- */
// for(let i=1; i <= 10; i++) {
//   console.log(i);
//   if (i % 2 != 0) {continue; }
//   console.log("Es par"); 
// }
// cuando se encuentra el continue, el resto de código no se evalua


/* ---------------------------- Bucle For reverso --------------------------- */

// for(var i = 10; i >= 1; i--){
//     console.log(i);
// }

//* ------------------------------------------------------------------------- */
//*                                   WHILE                                   */
//* ------------------------------------------------------------------------- */

/* Crea un bucle que ejecuta una sentencia mientras la condición se evalúe 
como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia */ 

/* while (condicion)
  sentencia */


// var i =1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// console.log(i); // la variable va a valer 11



/* -------------------------- Curso Código Facilito ------------------------- */
//* Condición(1) se ejecuta antes de la interacción(2)
// let i= 1;
// while (i <=10) {
//   console.log(i);
//   i++; // tengo que poner algo que corte el ciclo sino se hace infinito
// }

/* -------------------------------------------------------------------------- */
// while(prompt()) {
//   console.log("Ejecución"); 
// }
// si se agrega texto(true), se ejecuta. 
//Si se deja vacio (false), no se ejecuta el console.log

/* ------------------------------ While Reverso ----------------------------- */
// var i =10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// console.log(i); 


//*Ej de que si no se cumple la condición, no se ejecuta (a diferencia del do...while)
// var i =0;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// console.log(i); 



//* ------------------------------------------------------------------------- */
//*                                DO...WHILE                                 */
//* ------------------------------------------------------------------------- */

/* La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia 
especificada, hasta que la condición de comprobación se evalúa como falsa. 
La condición se evalúa después de ejecutar la sentencia, dando como resultado 
que la sentencia especificada se ejecute al menos una vez. 
La evaluación de la condición está al final de la instrucción */

/*do
   sentencia
while (condición); */ 


// var i = 1;
// do{
//    console.log(i);
//    i++;
// } while (i <= 10);
//   console.log(i);


//* se ejecuta al menos una vez
// var i = 11;
// do{
//    console.log(i);
//    i++;
// } while (i <= 10);
//   console.log(i);


/* -------------------------- Curso Código Facilito ------------------------- */
//* Condición(2) se ejecuta después de la iteracción(1)
// do {
//   console.log("Ejecución");
// } while(prompt());



//* ------------------------------------------------------------------------- */
//*                           FUNCTIONS / FUNCIONES                           */
//* ------------------------------------------------------------------------- */

//* ------- Cuando llamamos la funcion directamente (variable interna) ------- */

// function mensaje () {
//     console.log("Mensaje desde la función");
// }

// mensaje(); 

//* -------------------- Cuando la llamamos como argumento ------------------- */

// function mensaje (msj) {
//     console.log(msj);
// }

// var msj = "Mensaje como argumento de la función";
// mensaje(msj); 


//* -------- Función que devuelve un mensaje (nos retorna algun valor) ------- */

// function mensaje(){
//     return "Mensaje como devolución de la función";
// }

// var msj = mensaje();
// console.log(msj);
 
//* defino una variable "msj", que va a llamr a la función "mensaje" y esta función 
//* devuelve un valor "Mensaje como devolución de la función"



//* ------------------------- Curso Código Facilito ------------------------- */

/* Funciones-> conjunto de instrucciones -> se pueden definir de 2 formas:

1- Declaración de función
    function nombre de la función (parámetros){
      código a ejecutar
    }
*/

// saludar(); -> se puede "llamar/usar" antes o despues de la declaración de función

// function saludar() {
//   console.log("Hola Romina");
// }

// saludar();

//* no necesitamos declarar la "función" antes de usarla, podemos hacerlo después

/*
2- Expresión de función (no inicia con la palabra function)
   El nombre de la función es opcional(puede no estar -> función anónima)

    let func = function saludar() {} //Asignamos la funcion a una variable
*/

//* func (); --> no se puede poner antes de declarar la función
// let func = function() {};
// func (); // "llamada" después de la expresión de función 

//* no podemos usar/llamar la "función" sino la declaramos antes

/* -------------------------------------------------------------------------- */

// function cuadrado(numero) {
//   return numero * numero;
//   console.log("xxx") // no se va a ejecutar
//   // despues del return no se sigue ejecutando código
// }

// let cuadrado_de_dos = cuadrado(2); //* expresión de función
// console.log(cuadrado_de_dos);
// console.log(cuadrado(3));

/* -------------------------------------------------------------------------- */
/*                            Parámetro - Argumento                           */
/* -------------------------------------------------------------------------- */

//parámetro --> la variable que colocamos en la definición de la funcion

// function cuadrado(numero) { // function cuadrado(parámetro)
//   return numero * numero;
// }

//argumento -> para recibir información en una function recibimos argumentos
// tiene que se llenado cuando se llenado cuando se llama/invoca un function

// cuadrado(2); // cuadrado(argumento) 


 /* -------------------------------------------------------------------------- */
 /*                         Argumentos de una function                         */
 /* -------------------------------------------------------------------------- */

//* --------------------------- Recibe 3 argumentos -------------------------- */
// function sumar (a, b, c) {
//     return a + b + c;
// }

// var result = sumar (4,5,8);
// console.log (result);


//* -------------------------- Argumentos opcionales ------------------------- */
// function sumar (a, b , c=3) {
//     return a + b + c;
// }

// var result = sumar(4, 5, 8);
// var restul1 = sumar(3, 7); 
// console.log(result);
// console.log(restul1);

/* al no enviarle un 3° argumento, JS entiende  que este argumento es opcional, 
pero al ser opcional, también tiene un valor por default (c=3)


//* --------------------------- Argumentos anónimos -------------------------- */
// var sumar = function (a, b, c=3) {
//     return a + b + c;
// }

// var result = sumar(4, 5, 8);
// var restul1 = sumar(3, 7); 
// console.log(result);
// console.log(restul1);


/* -------------------------------------------------------------------------- */
/*                            Funciones Recursivas                            */
/* -------------------------------------------------------------------------- */
//* Una función se puede referir y llamarse a sí misma


// Factoreo --> 4 = 1 * 2 * 3 * 4 = 24
// Factoreo --> 5 = 1 * 2 * 3 * 4 * 5 = 120

// var factorial = function (n) {
//     if ((n == 0) || (n == 1))
//     return 1;
// else    
//     return (n * factorial(n - 1)); // llamamos a la misma function
// }

// console.log(factorial(5));
// console.log(factorial(4));

// factorial(5) = 5 * factorial(4) = 5 * 24 * factorial(3)....y asi sucesivamente 


/* -------------------------------------------------------------------------- */
/*                           Funciones Predefinidas                           */
/* -------------------------------------------------------------------------- */

//* Funciones de nivel superior (ya las trae Java Script) 
//* --> eval(), uneval(), isFinite(), isNaN(), parseFloat(), parseInt(), etc 
//* --> Number, String 



//* ------------------------------------------------------------------------- */
//*                             ARRAYS - ARREGLOS                             */
//* ------------------------------------------------------------------------- */
                /* Objetos de tipo lista --> indíce empieza en 0

//* ------------------ Acceder/leer un elemento del Array ------------------- */

// var nombres = ["Romina", "Manuel", "Sasha", "Ana"];
// var vegetales = [ "tomate", "lechuga", "zanahoria"];

// console.log(nombres[3]);
// console.log(nombres[5]); // si pongo un indice (n°) fuera del rango -> undefined

// console.log(vegetales[1]);


//* --------------------- Modificar elementos del Array --------------------- */

// nombres[0] = "Natalia";
// vegetales[2] = "cebolla";

// console.log(nombres[0]);
// console.log(vegetales[2]);


//* ------------------------------------------------------------------------- */
//*                             Propiedades Array                             */
//* ------------------------------------------------------------------------- */

//* -------------------------------- LENGTH --------------------------------- */
// var nombres = ["Romina", "Manuel", "Sasha", "Ana"];
// var vegetales = [ "tomate", "lechuga", "zanahoria"];

// console.log(nombres.length); //* cantidad de elementos que tienen una Array

//* --------------------------- Agregar elementos --------------------------- */

// var nombres = ["Romina", "Manuel", "Sasha", "Ana"];

// console.log(nombres);
// nombres.push("Matias"); //* "push" agrega un elemento al final del array
// console.log(nombres);

// nombres.unshift("Natalia"); //* "unshift" agrega un elmento al comienzo del array
// console.log(nombres);


//* --------------------------- Quitar elementos ---------------------------- */

// var nombres = ["Romina", "Manuel", "Sasha", "Ana"];

// nombres.pop(); //* quita el último elemento
// console.log(nombres);

// nombres.shift(); 
// console.log(nombres); //* quita el primer elemento


//* ----------------------- Posición dentro del Array ----------------------- */

// var nombres = ["Romina", "Manuel", "Sasha", "Ana"];

// var pos = nombres.indexOf("Manuel"); 
// console.log(pos);
//* "indexOf" nos indica en que posición del índice esta un elemento


// nombres.splice(1, 1); //que me elimine del índice 1, un elemento
// console.log(nombres);
// nombres.splice(1, 2); //que me elimine del índice 1, dos elementos
// console.log(nombres);

//* con "splice" puedo eliminar un elmento que no necesariamente este al inciio
//* o al final de un array


//* ------------------------------------------------------------------------- */
//*                           FOR - Recorrer Arrays                           */
//* ------------------------------------------------------------------------- */

//* "for" se utiliza para recorrer Arrays
/* si quiero recorrer por medio del índice, este siempre va a empezar desde -1
porque empieza en 0, por eso el "length" arranca desde -1 */

// var nombres = ["Romina", "Manuel", "Sasha", "Ana"];
// var vegetales = [ "tomate", "lechuga", "zanahoria"];
// for (var i = 0; i <= nombres.length - 1; i++){
//     console.log(nombres[i]);
// }

/* -------------------------------------------------------------------------- */

// let arreglo = [1,2,3,4];

// for (let i=0; i< arreglo.length; i++) {
//   let elemento = arreglo [i];
//   console.log(elemento);
// }

//* ------------------------------------------------------------------------- */
//*                       FOR...EACH - Recorrer Arrays                        */
//* ------------------------------------------------------------------------- */
//* otro método para recorrer Arrays. La diferencia es que en "for...each", 
//* tengo que utilizar una "function" 

// var nombres = ["Romina", "Manuel", "Sasha", "Ana"];
// var vegetales = [ "tomate", "lechuga", "zanahoria"];

// vegetales.forEach(function(elemento){
//     console.log(elemento);
// })

// vegetales.forEach(function(elemento, indice){
//     console.log(elemento, indice);
// })

// chequear donde van los () -> tenerlo en cuenta

/* -------------------------------------------------------------------------- */

// let lenguajes = [ "ruby", "php", "javascriot", "python"];

// lenguajes.forEach(function(lenguaje) {
//   console.log(lenguaje);
// });


//* ------------------------------------------------------------------------- */
//*                OBJETOS - JSON - JavaScript Objet Notation                 */
//* ------------------------------------------------------------------------- */
//! separados con comas ,

// objeto = { propiedades}


// let curso = {
//   titulo: "Curso JavaScript",
//   formato: "video",
//   bloques: ["Introducción", "Funciones"],
//   inscribir: function() {
//     console.log("Incripto");
//   }
// }


// console.log(curso["titulo"]); //  lo mismo que console.log(curso.titulo);

// curso.inscribir(); // ejecución de método -> objeto.metodo(parametros)

// los métodos de un objeto JSON se pueden reasignar
// curso.titulo = "Curso de JSON"; // nombreDelObjeto.nombreDeLaPropiedad = nuevoValor
// console.log(curso.titulo); // (objeto.propiedad)

// curso["inscribir"] = function () { console.log("Incribir V2");}
// curso.inscribir();


