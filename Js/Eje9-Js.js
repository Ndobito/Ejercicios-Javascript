let num = prompt("Digite un numero:  ");

// if (num == 0) {
//     document.write("Igual a cero");
// } else if(num > 0) {
//     document.write("Numero Mayor a cero"); 
// } else{
//     document.write("Numero Menor a cero"); 
// }

switch (true) {
    case num == 0:
        document.write("Igual a cero");
        break;
    case num > 0:
        document.write("Mayor a cero");
        break;
    case num < 0:
        document.write("Menor a cero");
        break;
    default:
        break;
}