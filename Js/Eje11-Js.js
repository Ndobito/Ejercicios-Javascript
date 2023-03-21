/* 
Problema: 

En la Institucion Educativa ABC Pequeños Gigantes, lo ha contratado para diseñar un scrip en 
Javascript, la cual le permita capturar los nombres y los apellidos de un alumno, capturar 3 notas, 
calcular su promedio de la siguiente forma: Nota 1 = 30%, Nota 2 = 30%, Nota = 40%) 

*/



alert("Bienvenido al Sistema de la Institucion ABC Pequeños Gigantes"); 

let nombre = prompt("Ingrese su nombre, separe con una (,) y luego ingrese sus apellidos");
let nombres = nombre.split(',');

let n1 = parseFloat(prompt("Ingrese la primera nota: "));
let n2 = parseFloat(prompt("Ingrese la segunda nota: "));
let n3 = parseFloat(prompt("Ingrese la tercera nota: "));


if(n1 > 0 && n1 <= 5, n2 > 0 && n2 <= 5, n3 > 0 && n3 <= 5){
    let nota1 = (n1 / 100) * 30;
    let nota2 = (n2 / 100) * 30;
    let nota3 = (n3 / 100) * 40;
    let res = nota1 + nota2 + nota3;
    document.write("<br><br>"+"Señor(a) "+ nombres[0]+" "+ nombres[1] +" Su nota definitiva es: " + res);
} else{
    alert("Las notas se encuentran fuera del rango(0.1 - 5.0)")
}

