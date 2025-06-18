//1. Creamos una variable
let nombre;

//2. Le pedimos al usuario que ingrese su nombre
nombre = prompt("¿Cuál es tu nombre?");

//3. Creamos una variable para la contraseña
let password;

//4. Le pedimos al usuraio que ingrese su contraseña
password = prompt("¿Cuál es tu contraseña?")

//5. Condicional - Relacional
if(10 > 5){
    console.log("10 es mayor que 5");
    console.log("Verdadero")
}

//6. Condicional - falso
if(10 < 5){//false o falso
    console.log("10 es menor que 5")
    console.log("Falso - Nunca se ejecutará")
}

//7. Condicional Lógico
if(nombre == "Pepe" && password == "1234"){
    alert ("Acceso concedido");
}