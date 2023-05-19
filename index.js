
// Primer ejercicio Variables y operadores aritmeticos:
//1.
var solicitud1= 3;
var solicitud2= 6;

console.log(solicitud1+solicitud2);

// 2.

let Base= 10;
let Altura=7;
const area= (Base*Altura);

console.log("El área de un paralelogramo segun base y altura registrada es:" + area );

//Condicionales:

//1. Escribe un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de edad o no.


let edad = '40';
console.log('Escriba su edad:'+ + edad);

if (edad >= 18) {

    console.log("Eres mayor de edad");
    
} else {
    console.log("No eres mayor de edad"); 
}

// 2.Crea un programa que pida al usuario un número y muestre un mensaje indicando si es positivo, negativo o cero.

const numero = '5';
console.log('Escriba un numero:'+ + numero);

if(numero >= 1) {
    console.log("Este numero es positivo");  
} else if (numero == 0){
    console.log("Este numero es cero");
}  else if (numero <= -1){
    console.log("Este numero negativo");
}  else { 
    console.log("Invalido");
}


//Arrays

// 1. Crea un programa que declare un array con varios nombres y luego los muestre uno por uno en la consola.

let frutas = ['Manza','Pera','Mango','Piña'];

console.log(frutas [0]);
console.log(frutas [1]);
console.log(frutas [2]);
console.log(frutas [3]);

// 2. Escribe un programa que pida al usuario cinco números, los guarde en un array y luego muestre el número mayor.

let lista = [16,10,4,30,5];

let Mayor = 0;
console.log('Escriba 5 numeros:');

for(let i = 0; i<lista.length;i++){

    console.log(lista[i]);

    if(Mayor<lista[i]){
        Mayor = lista[i];
    }

}

console.log('El numero mayor es' + Mayor);

//Objetos

//1. Crea un objeto llamado "persona" con propiedades como nombre, edad y profesión. Luego, muestra cada una de las propiedades en la consola.

const personaA = {
    Nombre:"Manuela",
    Edad: 28,
    Profesion:"Enfermera",
};
console.log(`Hola ${personaA.Nombre} tienes ${personaA.Edad} años y tu profesion es ${personaA.Profesion}`);

//2.Escribe un programa que simule un carrito de compras. Crea un objeto "carrito" que tenga propiedades como productos y total. Agrega varios productos al carrito y muestra el total.

const carritO ={
    Lateos: 30,
    Carnes: 40,
    Cereal: 20,
    Frutas: 30,
    Verduras: 25,

}

console.log(`Hola el total de tu compra es: ${carritO.Lateos}+${carritO.Carnes}+${carritO.Cereal}+${carritO.Frutas}+${carritO.Verduras} = 145`);

//Ciclos

//1. Crea un programa que muestre en la consola los números del 1 al 10 utilizando un bucle for.

for (let i = 1 ; i <=10; i++){
    console.log(`Numero ${i}`)
}

//2.Escribe un programa que solicite al usuario un número y luego muestre en la consola todos los números pares desde 1 hasta ese número.
// Profe esta formula no me salio :C

console.log('Escriba un numero:');
let number = (20);

console.log("Numeros pares desde 1 hasta" + number + ":");

for(let i = 1; i<= number; i+= 2) {

    console.log(number[i]);

    } 

 // Array de Objetos

 //1. Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión. Muestra en la consola la profesión de cada persona en el array.
    
 const person = [{
    name: "Liliana",
    Age: 40,
    profetion: "Psicologa",  

},{
     name: "Erwin",
    Age: 20,
    profetion: "Quimico",  

},
 { name: "Kevin",
    Age: 31,
    profetion: "ingeniero en sistemas",  

 },{
     name: "Kathleen",
    Age: 24,
    profetion: "Desarrolladora  Web",  
 },{
     name: "Ronald",
    Age: 63,
    profetion: "Diseñador grafico",  
 }];

 person.forEach(person => console.log(person.profetion));

 //Variables, condicionales, ciclos, arrays, objetos, operadores aritméticos, relacionales y lógicos:

 //1.Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Muestra un mensaje indicando si el usuario acertó o no.

 
        let numeroAdivinado = 3;
        let numeroAleatorio = Math.floor(Math.random()*(numeroAdivinado+1));
        
        console.log(`Su numero es:  ${numeroAdivinado}  y el numero random es:  ${numeroAleatorio}`);
        
        if (numeroAdivinado == numeroAleatorio) {
            console.log("¡Felicitaciones! Adivinaste el número.");
        } else {
            console.log("Lo siento, no adivinaste el número. El número correcto era " + numeroAleatorio + ".");
        }
    

