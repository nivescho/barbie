/*
// "Me llamo " + nombre + " y tengo " + edad
// `Me llamo ${nombre} y tengo ${edad}`
// LAS CONDICIONALES EVALUAN BOOLEANOS

let condicion = 5 < 10; 

console.log(`Valor de la condición: ${condicion}`);

if (condicion) {
    console.log("Hola");
}
else {
    console.log("Ciao");
}
*/

// EJERCICIOS CONDICIONALES
/*
// 1. Mayor o menor de edad
// Pedir el dato con prompt y mostrarlo con alert

let edad = prompt("Ingresa tu edad: ");

if (edad >= 18) {
    alert("Es mayor de edad");
}
else {
    alert("Es menor de edad");
}
*/

/*
// 2. VERIFICAR EL MAYOR DE DOS NÚMEROS
let num1 = 15;
let num2 = 15;

if (num1 > num2) {
    console.log("El primer número es mayor");
}
else if (num2 > num1) {
    console.log("El segundo número es mayor");
}
else {
    console.log("Ambos números son iguales");
}
*/

/*
// 3. FUNCIÓN DEL EJERCICIO ANTERIOR
function mayorDeDosNums(num1, num2) {
    if (num1 > num2) {
        console.log("El primer número es mayor");
    }
    else if (num2 > num1) {
        console.log("El segundo número es mayor");
    }
    else {
        console.log("Ambos números son iguales");
    }
}

mayorDeDosNums(15, 10);
mayorDeDosNums(10, 15);
mayorDeDosNums(10, 10);
*/

// 4. FUNCIÓN QUE TOME UN NÚMERO Y DIGA SI ES PAR O IMPAR
/*
function esPar(num) {
    if (num % 2 == 0) {
        console.log("Es par");
    }
    else {
        console.log("Es impar");
    }
}
*/
/*
// ARROW FUNCTION
const esPar = (num) => {
    if (num % 2 == 0) {
        console.log("Es par");
    }
    else {
        console.log("Es impar");
    }
}
*/

/*
// ARROW FUNCTION Y TERNARY OPERATOR
const esPar = (num) => (num % 2 == 0) ? console.log("Es par") : console.log("Es impar");

esPar(1);
esPar(2);
*/

// EJERCICIOS BUCLES
// let op = 0;

/*
while (op != 0) {
    op = prompt("Ingrese 0 para salir");
}
*/

/*
// DO WHILE SE EJECUTA AL MENOS UNA VEZ
do {
    op = prompt("Ingrese 0 para salir");
} while (op != 0);
*/

// 1. UN PROMPT QUE SE MUESTRE HASTA QUE
// SE INGRESE UN NÚMERO IMPAR
/*
let num;

do {
    num = prompt("Ingrese un número impar para salir: ");
} while (num % 2 == 0)
*/

/*
for (inicio, condicion o final, pasos)

Iterar con for

for (let variable of array)

i++
i += 1
i = i + 1
*/

/*
// 2. Conteo del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

/*
// 3. Conteo regresivo del 9 al 0
for (let i = 9; i >= 0; i--) {
    console.log(i);
}
*/

/*
// 4. Conteo del 10 al 100 de 10 en 10
for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}
*/

/*
// 5. Números impares del 0 al 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
*/
