let age = prompt("Ingrese su edad: "); 

// if (age < 18) {
//     document.write("Edad insufiecuente, no puede pasar.")
//     let edad = 2; 
// } else {
//     document.write("Bienvenido")
//     let edad = 1; 
// }

switch (true) {
    case age >= 18:
            document.write("Bienvenido");
        break;
    case age < 18:
        document.write("Acceso denegado, eres menor de edad");
        break;
    default:
        break;
}