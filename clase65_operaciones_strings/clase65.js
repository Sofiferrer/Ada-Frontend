/*1) calcularPorcentaje(numero, porcentaje)
Crear una función calcularPorcentaje que tome como 
argumentos un número y un porcentaje y devuelva el valor 
del porcentaje correspondiente al número:
calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20*/


const calcularPorcentaje = (num, porcentaje) => {
    return (porcentaje*num/100);
    console.log(calcularPorcentaje())
}


 
/*2) restarPorcentaje(numero, porcentaje)
Crear una función restarPorcentaje que tome como 
argumentos un número y un porcentaje y devuelva la resta 
de dicho número con la de su porcentaje. Usar la función 
calcularPorcentaje para obtener el porcentaje a restar:
restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180*/

const restarPorcentaje = (num, porcentaje) => {
    return (num-(calcularPorcentaje(num, porcentaje)));
    console.log(restarPorcentaje())
}

/*3) burlarse(str)
Crear una función contarPalabras que tome como argumento un 
string str y devuelva el mismo string con todas las vocales 
reemplazadas por la letra i:
burlarse('programar es dificil') // 'prigimir is dificil'*/

const burlarse = (str) => {
    const vocales = ["a", "e", "o", "u"]
    for(let i = 0; str.length > i; i++) {
        if(vocales.includes(str[i])){
            str = str.replace (str[i], "i");
        }
    }
    return str;
}

const rta = burlarse("Programar es dificil");

console.log(rta);

/*4) aHackerSpeak(str)
Crear una función aHackerSpeak que tome como argumento un string 
str y devuelva el mismo string convertido a H4CK3R 5P3AK, 
siguiendo las siguientes reglas:
- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0
aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'*/


const aHackerSpeak = (str) => {
    
    for(let i = 0; str.length > i; i++) {
        if("i","I".includes(str[i])){ 
            str = str.replace (str[i], "1");
        }
        if("e","E".includes(str[i])){ 
            str = str.replace (str[i], "3");
        }
        if("a","A".includes(str[i])){ 
            str = str.replace (str[i], "4");
        }
        if("s","S".includes(str[i])){ 
            str = str.replace (str[i], "5");
        }
        if("o","O".includes(str[i])){ 
            str = str.replace (str[i], "0");
        }
    }
    return str;
}

const rta1 = aHackerSpeak();

console.log(rta1);
