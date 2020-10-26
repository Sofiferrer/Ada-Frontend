/*1) Crear una función puedeVerPelicula que tome como argumentos
un número edad y un booleano tieneAutorizacion, y devuelva true 
si la persona está habilitada para ver la película o false si no. 
Sólo puede ver la película si: tiene 15 años o más, 
o tiene autorización de sus padres.*/

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion) {
        return true;
    }
    else {
        return false;
    }
}

//console.log(puedeVerPelicula(12, false)); 
//console.log(puedeVerPelicula(12, true)); 
//console.log(puedeVerPelicula(16, false));
//console.log(puedeVerPelicula(18, true)); 


/*2)// Crear una función estaEnRango que tome como argumentos tres 
números, un valor, un número minimo y un número maximo, y devuelva 
true si el valor se encuentra entre los números minimo y maximo 
o false si no (si el valor es igual a uno de los extremos se 
considera que está dentro del rango)*/

const estaEnRango = (valor, numMin, numMax) => {
    if (valor <= numMax && valor >= numMin) {
        return true;
    }
    else {
        return false;
    }}


//console.log(estaEnRango(3, 1, 10));  // true
//console.log(estaEnRango(1, 1, 10));  // true
//console.log(estaEnRango(10, 1, 10)); // true
//console.log(estaEnRango(12, 1, 10)); // false
//console.log(estaEnRango(-3, 1, 10));  // false


/*3) Crear una función puedeAvanzar que tome como argumento un string con el 
color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa 
un color válido, debe devolver un string que diga: Error: color de semáforo inválido*/

const puedeAvanzar = (str) => {
    switch (str) {
        case "verde" : return true;
        break;
        case "amarillo" : 
        case "rojo" : return false;
        break;
        default : return "Error: color de semáforo inválido"
    }
}

//console.log(puedeAvanzar('verde'));     // true
//console.log(puedeAvanzar('amarillo'));  // false
//console.log(puedeAvanzar('rojo'));      // false
//console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'



/* 4) Crear una función esVocal que tome como argumento un string letra y devuelva true si 
letra es una vocal o false si no lo es.*/

const esVocal = (letra) => {
    let vocales = ["a", "e", "i", "o", "u"]
    if (vocales.includes(letra)) {
        return true;
    }
    else { 
        return false;
    }
}

/*console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true*/


/*5) Crear una función esConsonante que tome como argumento un string letra y devuelva true 
si letra es una consonante o false si no lo es*/

const esConsonante = (letra) => {
    let vocales = ["a", "e", "i", "o", "u"]
    if (vocales.includes(letra)) {
        return false;
    }
    else { 
        return true;
    }
}

/*console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true
console.log(esConsonante('i')); // false
console.log(esConsonante('e')); // false
console.log(esConsonante('r')); // true*/

/* 6) Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y 
determine si es una hora válida del día o no*/

const esHoraValida = (str) => {
    const hora = str.split(":")
    return (hora[0] <= 23 && hora[1] <= 59)
}

/*console.log (esHoraValida('12:23')) // true
console.log (esHoraValida('12:65')) // false
console.log (esHoraValida('28:05')) // false
console.log (esHoraValida('00:00')) // true*/


/* 7) Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, 
tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar
su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, 
no tiene multas impagas y pagó todos los impuestos*/

const pasoTests = true
const tieneMultasImpagas = true
const pagoImpuestos = true


  
/*puedeRenovarCarnet(true, true, true)  // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false*/


/* 8) Crear una función puedeGraduarse que tome como argumentos dos números asistencia y 
materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse 
o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias 
aprobadas o más y la tesis aprobada.*/

const puedeGraduarse = (asistencia, materias, tesis) => {
    return (asistencia > 75 && materias >= 50 && tesis)
}

/*console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false*/

/* 9) Crear una función esParOImpar que acepte como argumento un numero y devuelva el string 
par si el numero es par, o el string impar si el numero es impar*/

const esParOImpar = (numero) => (numero % 2 == 0) ? 'par' : 'impar';

/*console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'*/

/* 10) Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva 
el string positivo si el numero es positivo, o el string negativo si el numero es negativo*/


const esPositivoONegativo = (num) => {
    if (num >= 0) {
        return "positivo"
    }
    else {
        return "negativo"
    }
}

/*console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5)) // 'negativo'*/

  
/* 11) Crear una función avanzarSemaforo que acepte como argumento un string colorActual 
y devuelva un string con el siguiente color del semáforo, siguiendo el 
orden: verde -> amarillo -> rojo -> verde*/

const avanzarSemaforo = (colorActual) => {
    switch (colorActual) {
        case "verde" : return "amarillo";
        break;
        case "amarillo" : return "rojo";
        break;
        case "rojo" : return "verde";
    }
}

/*console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'*/


/* 12) Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva 
un número dependiendo de la cantidad de días que tenga ese mes*/

const obtenerDiasMes = (mes) => {
    const mesesLargos= ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"];
    const mesesCortos= ["abril", "junio", "septiembre", "noviembre"];
    if (mesesLargos.includes(mes)) {
        return "31";
    }
    if (mesesCortos.includes(mes)) {
        return "30";
    }
    if (mes == "febrero"){
        return "29";
    }
}

console.log(obtenerDiasMes("diciembre")) // 31
console.log(obtenerDiasMes("febrero"))   // 29



/* 13) Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento 
y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:
Baby boomer	   => 1949-1968
Generación X   => 969-1980
Millennials	   => 1981-1993
Generación Z   => 1994-2010*/




/* 14) Crear una función obtenerSensacion que tome como argumento un número temperatura y 
devuelva un string dependiendo de la temperatura, con las siguientes reglas:
Menor a 0°	                                => ¡Está helando!
Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
Mayor o igual a 15° y menor a 25°	        => Está lindo
Mayor o igual a entre 25° y menor a 30°	    => Hace calor
Mayor o igual de 30°	                    => ¡Hace mucho calor!*/



/* 15)Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un 
string dependiendo del puntaje redondeado, con las siguientes reglas:*/
// Menor a 6	                        => Desaprobado
// Mayor o igual a 6 y menor a 7	    => Regular
// Mayor o igual a 7 y menor a 8	    => Bueno
// Mayor o igual a entre 8 y menor a 10 => Muy bueno
// 10	                                => Excelente
// Menor a 0 o mayor a 10	            => Puntaje inválido


/* 16) Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b 
que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con 
un mensaje avisando qué jugada ganó (o si hubo empate)*/

/*jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!*/

/* 17) Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando 
cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más 
dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e 
impedir seguir retirando.*/

let dineroInicial = 35000
const retirarDinero = (monto) => {
    //let monto = prompt("Ingrese el monto que desea retirar: ")
    if (monto <= dineroInicial) {
        return dineroInicial - monto;
    }
    else {
        return ("Monto insuficiente")
    }
}
//console.log(retirarDinero(40000));


/* B01) Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, 
felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando 
un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). 
Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
ALIMENTAR: +3 energía, +2 felicidad
JUGAR: +2 felicidad, -2 energía, -1 limpieza
DORMIR: +5 energía, +2 salud, -2 limpieza
VACUNAR: +5 salud, -6 felicidad
BAÑAR: +3 salud
RETAR: -3 felicidad
ACARICIAR: +4 felicidad
Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
*/
const obtenerrandom= () =>{ 
    return Math.floor( Math.random()* 10);
    }
    //console.log(obtenerrandom());

let salud = obtenerrandom()
let felicidad = obtenerrandom()
let limpieza = obtenerrandom()
let energia = obtenerrandom()

const alimentar = () => {
    energia = energia + 3
    felicidad = felicidad + 2
}
const jugar = () => {
    felicidad = felicidad + 2
    energia = energia - 2
    limpieza = limpieza - 1
}
const dormir = () => {
    energia = energia + 5
    salud = salud + 2
    limpieza = limpieza - 2
}
const vacunar = () => {
    salud = salud + 5
    felicidad = felicidad - 6
}
const bañar = () => {
    salud = salud + 3
}
const retar = () => {
    felicidad = felicidad - 3
}
const acariciar = () => {
    felicidad = felicidad + 4
}

const tamagochi = (accion) => {
    console.log(`Mascota = Salud: ${salud}, Felicidad: ${felicidad}, Limpieza: ${limpieza}, Energia: ${energia}`);
    switch (accion) {
        case "alimentar" : alimentar();
        break;
        case "jugar" : jugar();
        break;
        case "dormir" : dormir();
        break;
        case "vacunar" : vacunar();
        break;
        case "bañar" : bañar();
        break;
        case "retar" : retar();
        break;
        case "acariciar" : acariciar();
        break;
    }    
    return `Luego de ${accion} = Salud: ${salud}, Felicidad: ${felicidad}, Limpieza: ${limpieza}, Energia: ${energia}`

}

//console.log(tamagochi("acariciar"))




