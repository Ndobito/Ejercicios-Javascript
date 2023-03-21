// let horas = parseInt(prompt("Ingrese el numero de horas: ")); 
// let min = parseInt(prompt("Ingrese el numero de minutos: ")); 

// switch (true) {
//     case min >= 30:
//         horas = horas + 1;
//         res = 1500 * horas;
//         document.write("Debe pagar: "+ res);
//         break;
//     case min < 30: 
//         res1 = 25 * min;
//         res2 = 1500 * horas;
//         total = res1 + res2;
//         document.write("Debe pagar: "+ total);
//         break;

//     default:
//         break;
// }


// if(min >= 30){
//     horas = horas + 1;
//     res = horas * 1500; 
//     alert("Debe pagar: "+ res);
// }else {
//     res1 = min * 25;
//     res2 = horas * 1500;
//     res = res1 + res2;
//     alert("Debe pagar: "+ res);  
// }

let tiempo = prompt("Ingrese el numero de horas, separe con una (,) y luego ingrese el numero de minutos: ");
let array = tiempo.split(',');
console.log(array[0]);
console.log(array[1]);
if (array[1] > 30){
    array[0] = array[0] + 1;
    res = array[0] * 1500; 
    alert("Debe pagar: "+ res);
}else {
    res1 = array[1] * 25;
    res2 = array[0] * 1500;
    res = res1 + res2;
    alert("Debe pagar: "+ res);  
}
