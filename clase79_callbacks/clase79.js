//1) Crear una funcióm crearUsuario que reciba como argumento un callback. La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.

const crearUsuario = (callback) => {
    const usuario = prompt('Ingrese su nombre de usuario: ');
    callback();
}
const confirmarCreacion = () => alert("Usuario creado!"); // callback
crearUsuario(confirmarCreacion);

// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!



//2) Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva true o false si pasa dicha validación o no. La funci´ón validarUsuario, al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// - que no tenga espacios
// - que tenga más de X caracteres
// - que no tenga números
// - que tenga mayúsculas



//3) Crear una función map que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.

// Ejemplo:
// const numeros = [1, 2, 3]
// const duplicar = (x) => x * 2
// map(numeros, duplicar) // [2, 4, 6]



//4) Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".

// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// filter(numeros, multiploDe10) // [10, 40, 50]



//5) Crear una función every que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si todas las llamadas al callback devolvieron true

// Ejemplo:

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

// every(numeros, multiploDe10) // false
// every(numeros, esPositivo) // true



//6) Crear una función some que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si al menos una de las llamadas al callback devolvió true

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

// some(numeros, multiploDe10) // true
// some(numeros, esPositivo) // true



//7) Crear una función find que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

/*const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
find(numeros, multiploDe10) // 40*/



//8) Crear una función findIndex que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

/*const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
find(numeros, multiploDe10) // 3*/



//9) Crear una función dropWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos a partir del primer callback que devolvió false

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

/*const numeros = [40, 33, 50, 8, 2, 3, 20]
const multiploDe10 = (x) => x % 10 === 0
dropWhile(numeros, multiploDe10) // [8, 2, 3, 20]*/



//10) Crear una función takeWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos hasta el primer callback que devolvió false

// (Inverso del dropWhile)
/*const numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = (x) => x % 10 === 0
takeWhile(numeros, multiploDe10) // [40, 50]*/