// slice: El método slice() devuelve una copia de una parte del array dentro de un nuevo 
//array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

const array2 = [
    { name: "Adrian", lastname: "Solimano" },
    { name: "Agostina", lastname: "Solimano" },
    { name: "Mailen", lastname: "Solimano" },
  ];
  

const copiarParteArray = array2.slice(2,3);

/*console.log(copiarParteArray);
console.log(array2);*/

  
/* 1) Crear una función obtenerMenor que tome como argumento un array de números numeros 
y devuelva el menor de ellos. Ejemplo:*/

const numeros = [5, 7, 99, 34, 54, 2, 12];

const obtenerMenor = (numeros) => {
    let menor = numeros[0];
    for (i=0; i<numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor
}

/*console.log(obtenerMenor(numeros)); // 2*/

/* 2) Crear una función sumar que tome como argumento un array de números numeros y 
devuelva la suma de ellos. Ejemplo:*/

const numeros = [5, 7, 10, 12, 24];

const sumarNumeros = (numeros) => {
    let suma = 0;
    for (i=0; i<numeros.length; i++) {
        suma = suma + numeros[i]
    }
    return suma
}

/*console.log(sumarNumeros([5, 7, 10, 12, 24])); // 58*/

/* 3) Crear una función contiene que tome como argumentos un número numero y un array de 
números y devuelva true o false dependiendo de si dicho numero se encuentra en el 
array de numeros. Ejemplo:*/

const numeros = [5, 7, 58, 69, 4, 6, 78, 10, 61, 2, 12, 47, 60, 24];

const contiene = (numero, numeros) => (numeros.includes(numero));      

/*console.log(contiene(78, numeros));*/

  
/* 4) Crear una función invertirCaso que tome como argumento un string y devuelva un 
string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula 
si estaba en minúscula, y viceversa.*/

const invertirCaso = (str) => {
    for (i=0; i<str.length; i++) {
        const char = str.charAt(i);
        if (char === char.toLowerCase()) {
            str = str.replace(char, char.toUpperCase());
        } else {
            str = str.replace(char, char.toLowerCase());
        }
    }
    return str;
};

/*console.log(invertirCaso("jaVasCriPt"))*/

/* 5) Crear una función separar que tome como argumento un string con emojis de perros y 
gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:*/

/*const animales = "🐶🐱🐱🐶🐱🐶🐱🐱🐶🐶🐱🐶"*/


/*console.log(separar(perrosYGatos));*/


/* 6) Crear una función gano que tome como argumento un array tragamonedas 
con 5 símbolos y devuelva true si son iguales y false sino. 
Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.*/




/*console.log(gano(["⭐️", "⭐️", "⭐️", "💫", "✨"])); // false
console.log(gano(["💫", "💫", "💫", "💫", "💫"])); // true
console.log(gano(["💫", "💫", "💫", "💫", "💫", "⭐️"])); // true

// Aca pueden usar x, o */

/* 7) Crear una función estanJuntos que tome como argumento un array de strings personajes, 
y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:*/

/*console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); //true
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); //true
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); //true*/