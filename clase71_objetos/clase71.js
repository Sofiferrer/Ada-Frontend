/* 1 Mostrar en pantalla al/los personajes mas enanos de "Brastlewark"*/

const habitants = getInhabitants();

//console.table(habitants);

const mostrarEnano = () => {
let masBajo = 107.75835;
    for (let i=0; i<habitants.length; i++) {
        if (habitants[i].height < masBajo){
        masBajo = habitants[i].height;
        }
    }
    return masBajo;
}

console.log(mostrarEnano());

/* 2 Crear una funcion que devuelva los personaes por ID en base a un rango numerico.*/

const traerPersonas = (desde, hasta) => {
    let rango = [];
    for (let i=0; i<habitants.length; i++) {
        if (habitants[i].id >= desde && habitants[i].id <= hasta) {
            rango.push(habitants[i]);
        }        
    }  
    return rango;  
}

console.log(traerPersonas(20, 40));

/* 3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.*/

const traerColorPelo = (color) => {
    let personajePorColor = [];
    for (let i=0; i<habitants.length; i++) {
        if (habitants[i].hair_color === color) {
            personajePorColor.push(habitants[i]);
        }        
    }  
    return personajePorColor;  
}

console.log(traerColorPelo("Green"));

/* 4 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" 
en base a una propiedad y un valor enviados como parámetros.*/



/* 5 Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho de "Brastlewark".*/
/* 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.*/
/* 7 Listar a todos los personajes que tengan como profesión "Woodcarver".*/
/* 8 Listar a todos los personajes que tengan como profesion un dato enviado como como parámetro.*/