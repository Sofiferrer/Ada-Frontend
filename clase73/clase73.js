let habitants = getInhabitants(); //trae el array inhabitants

/* 1 Mostrar en pantalla al/los personajes mas enanos de "Brastlewark"*/

//console.table(habitants);
/*{
        id: 0,
        name: "Tobus Quickwhistle",
        thumbnail:
          "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hair_color: "Pink",
        professions: [
          "Metalworker",
          "Woodcarver",
          "Stonecarver",
          " Tinker",
          "Tailor",
          "Potter",
        ],
        friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
      },*/

const mostrarEnano = () => {
let masBajo = habitants[0];
    for (let i=0; i<habitants.length - 1; i++) {
        let {height : height1} = habitants[i + 1]; //obtengo la prop height de cada objeto, destructurando y la guardo en una variable.
        let {height : height2} = masBajo; // obtengo la prop height de lo que valga 'masBajo' en cada vuelta y lo guardo en otra variable.

        if (height1 < height2){ // utilizo solo las variables, en lugar de 'habitants[i + 1].height' o 'masBajo.height'
        masBajo = habitants[i + 1];
        }
    }
    return masBajo;
}

//console.log(mostrarEnano());

/* 2 Crear una funcion que devuelva los personajes por ID en base a un rango numerico.*/

const traerPersonas = (desde, hasta) => {
    let rango = [];
    for (let i=0; i<habitants.length; i++) {
        let {id : orden} = habitants[i]; // obtener la prop ID, le cambio el nombre a 'orden' 
        if (orden >= desde && orden <= hasta) { // y luego utilizo solo la variable 'orden' en lugar de 'habitants[i].id'
            rango.push(habitants[i]);
        }        
    }  
    return rango;  
}
    
//console.log(traerPersonas(20, 40));

/*3 Crear una funcion que devuelva una lista de los 
habitantes de "Brastlewark" por el color de pelo.*/

const traerColorPelo = (color) => {
    let personajePorColor = [];
    for (let i=0; i<habitants.length; i++) {
        let {hair_color : colorPelo} = habitants[i]; // a la prop hair_color le asigno el nombre colorPelo y al asignarle 'habitante[i]' esa variable 'colorPelo' ya hace referencia a cada habitante
        if (colorPelo === color) {
            personajePorColor.push(habitants[i]);
        }        
    }  
    return personajePorColor;  
}
//console.log(traerColorPelo("Green"));

/* 4 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark"
 en base a una propiedad y un valor enviados como parámetros.*/

const traerPersonasPorPV = (propiedad, valor) => {
    const listaHabitantes = [];
    for (const habitant of habitants) {
        let {[propiedad] : caracteristica} = habitant;
        if (caracteristica === valor) {
            listaHabitantes.push(habitant)
        }
    }
    return listaHabitantes
}

//console.table(traerPersonasPorPV("age", 288));


/* 5 Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano,
al mas joven o al mas ancho de "Brastlewark".*/

const traerElMas = (prop,esMayor = true) => {
    let elMas = habitants[0];
    for (habitant of habitants) {
        let {[prop] : propiedad} = habitant;
        let {[prop] : propiedadMas} = elMas;
        if (esMayor && propiedad > propiedadMas) {
            propiedadMas = habitant;
        }else if(!esMayor && propiedad < propiedadMas){
            propiedadMas = habitant;
        }
    }
    return elMas;
}

console.log(traerElMas("age"));

/* 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.*/

const getByName = (name) => {
    for (habitant of habitants) {
        if (habitant.name === name) {
            return habitant;
        }
    }
}
//console.table(getByName("Fizwood Mysttink"));

const mostrarTablaAmigos = (nombre) => {

    let habitante = getByName(nombre);
    let amigues = habitante.friends;
    const habitantsAndFriends = [];

    for(amigue of amigues) { 
        habitantsAndFriends.push(getByName(amigue))
    }

    habitantsAndFriends.push(habitante);

    return habitantsAndFriends;
}

//console.table(mostrarTablaAmigos("Fizwood Mysttink"));

/* 7 Listar a todos los personajes que tengan como profesión "Woodcarver".*/

const getByProfession = (profession) => {
    let professionCharacters = [];
    for (habitant of habitants) {
        if (habitant.professions.includes(profession)) {
            professionCharacters.push(habitant)
        }
    }
    return professionCharacters;
}
//console.table(getByProfession("Woodcarver"));

/* 8 Listar a todos los personajes que tengan como profesion un dato enviado como como parámetro.*/

//console.table(getByProfession("Mason"));

/* 9 Crear una función que a partir de un string, devuelva todos los habitantes
que contienen dicho string en su nombre.*/

const getByString = (string) => {
    let strHabitants = [];
    for (habitant of habitants) {
        if (habitant.name.includes(string)) {
            strHabitants.push(habitant)
        }
    }
    return strHabitants;
}
//console.log(getByString("power"));
 
/* 10 Crear una función que devuelva un objeto con una propiedad con todas las 
profesiones que se desarrollan en "Brastlewark" y otra con la cantidad de 
profesiones encontradas.*/

const obtenerProfesiones = () => {
    let profesiones = [];
    for(habitant of habitants) {
        for(profession of habitant.professions) {
            if (!profesiones.includes(profession)){
            profesiones.push(profession);
            }
        }  
    }
    return profesiones;
}

const cantidadDeProfesiones = () => {
    let prof = obtenerProfesiones();
    let contadorProfesiones = {};
    contadorProfesiones.profesiones = prof;
    contadorProfesiones.cantidad = prof.length;
    return contadorProfesiones;
}

//console.log(obtenerProfesiones(habitants));
//console.log(cantidadDeProfesiones());


/* 11 Crear una funcion que devuelva el habitante con mayor volumen de "Brastlewark". 
Calculamos el volumen multiplicando el alto por el ancho.*/

const obtenerVolumenes = () => {
    for (habitant of habitants) {
        habitant.volumen = habitant.weight * habitant.height;
    }
    return habitants;
}

const obtenerMayorVolumen = () => {
    let volumen2 = obtenerVolumenes();
    let mayorVolumen = volumen2[0]; //preguntar al profe por que sirve habitants[0]

    for (let i=0; i<volumen2.length - 1; i++){
        if (volumen2[i + 1].volumen > mayorVolumen.volumen){
            mayorVolumen = volumen2[i + 1];
            }
    }
    return mayorVolumen;
}

/*habitants = obtenerVolumenes();
console.log(traerElMas("volumen"));
console.log(obtenerMayorVolumen())*/