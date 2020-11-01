/* 1) Crear una función multiplicar que tome como argumentos un número 
multiplicador y un array de números, y que devuelva un array 
donde cada elemento es el resultado del elemento del primer array 
(en la misma posición) multiplicado por el número ingresado. Ejemplo:*/

const multiplicador = (numMulti, arrayNumeros) => {
    let resultados = [];
    for (i=0; i<arrayNumeros.length; i++) {
        resultados.push(numMulti*arrayNumeros[i]);
    }
    return resultados;
}

/*console.log(multiplicador(2, [5, 7, 15, 22, 40])); // [10, 14, 30, 44, 80]
console.log(multiplicador(10, [2, 5, 77])); // [20, 50, 770]*/

  
/* 2) Crear una función filtrarPorLongitud que tome como argumentos un 
número longitud y un array de strings palabras y que devuelva un array 
con las palabras que tengan una cantidad de letras mayor a longitud. 
Ejemplo:*/

const filtrarPorLongitud = (numLong, arrayString) => {
    let longitudMayor = [];
    for (i=0; i<arrayString.length; i++) {
        if (arrayString[i].length > numLong) {
            longitudMayor.push(arrayString[i]);
        }
    }
    return longitudMayor;
}

//console.log(filtrarPorLongitud(4, ["dia", "remolacha", "azul", "sorpresa", "te", "verde"])); 
// ['remolacha', 'sorpresa', 'verde']*/

/* 3) Crear una función recortar que tome como argumentos un número cantidadLetras y un array 
de strings palabras y devuelva un array con las mismas palabras pero recortadas. 
Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando 
las demás. Por ejemplo, elefante recortada a 4 letras queda elef.*/

const recortar = (cantLetras, arrayStrings) => {
    let cortado = [];
    for (i=0; i<arrayStrings.length; i++) {
        cortado.push(arrayStrings[i].slice(0, cantLetras));
    }
    return cortado;
}

//console.log(recortar(4, ["elefante", "dinosaurio", "chocolate", "avion", "america"])); // ['elef', 'dino' 'choc', 'avio', 'amer']
//console.log(recortar(1, ["algoritmo", "bug", "compilador"])); // ['a', 'b', 'c']

/* 4) Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y 
devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.*/

const sonIguales = (a, b) => {
    for (i=0; i<a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

//console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])); // true
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])); // false
//console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])); // false


/* 5) Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y 
jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA 
y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la 
ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones 
de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien 
tenga el puntaje más alto. Por ejemplo:*/

/*const puntajesA = [3, 5, 2];
const puntajesB = [4, 6, 2];
puntajesA[0] vs. puntajesB[0] -> Gana B
puntajesA[1] vs. puntajesB[1] -> Gana B
puntajesA[2] vs. puntajesB[2] -> Empate
Resultado final: Gana Jugadora B*/

const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {
    let puntosA = 0;
    let puntosB = 0;
    for (i=0; i<puntajesA.length; i++) {
        if (puntajesA[i]>puntajesB[i]) {
            puntosA++;
        } else {
            puntosB++;
        }        
    }   
    
    if (puntosA>puntosB) {
        return "Gana " + jugadoraA;
    } else if (puntosA<puntosB) {
        return "Gana " + jugadoraB;
    } else {
        return "Empate";
    }
}

console.log(obtenerResultado("Ada", "Grace", [1, 4, 4], [4, 2, 3])); // Ada
console.log(obtenerResultado("Ada", "Grace", [3, 5, 5, 7], [4, 1, 2, 9])); // Empate
console.log(obtenerResultado("Ada", "Grace", [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])); // Grace