let notas = [];

notas.push(parseInt(prompt("Ingresa la primera nota: "))); 
notas.push(parseInt(prompt("Ingresa la segunda nota: "))); 
notas.push(parseInt(prompt("Ingresa la tercera nota: "))); 

let sum = notas[0] + notas[1] + notas[2];
let res = sum / 3; 


document.write(res);
