/* Ejercicio 10: Bucle For...in
Crea un objeto con algunas propiedades y utiliza un bucle for...in para imprimir cada propiedad y su valor en la consola. */

const persona = {
    nombre: "Paco",
    apellidos: "García Jimenez",
    edad: 200,
    nacionalidad: "Española",
    peso: 90.0,
    altura: 200.0
};

for(const property in persona){
    console.log(`${property}: ${persona[property]}`);
}

