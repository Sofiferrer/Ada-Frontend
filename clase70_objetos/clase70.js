/* 1) Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: nombre, apellido, edad
- Mostrar en consola el objeto sobreMi*/

const sobreMi = {};

  sobreMi.nombre = "ana";
  sobreMi.apellido = "campos";
  sobreMi.edad = "20";

//console.log(sobreMi);


/* 2) Crear una variable llamada user, a la que le vamos a asignar un objeto.
- El objeto tiene que tener 3 propiedades: fullname, email, age
- Mostrar en consola el objeto user
- Mostrar en la consola el nombre y la edad de la persona: 
"Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"*/

const user = {
    fullname: "Ana Campos",
    email: "anacampos@gmail.com",
    age: 23,
}

//console.log(user);
//console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años.`);



/* 3) Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las 
propiedades del objeto que tenemos en song
El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion 
(en segundos, ya que en el objeto original song está en milisegundos)*/

var song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
  };
  
  var cancion = {
    titulo: song.title,
    banda: song.bandName,
    duracion: song.duration/1000
  };
  
  console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }


/* 4) Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados

Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
var example = {
    id: 0,
    nombre: "Ejemplo",
    email: "ejemplo@terra.com",
    telefono: "1029384756"
}

Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

Nos pidieron mostrar en la consola los siguientes datos de cada persona:
TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS*/


function person(id, nombre, email, telefono) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
}

let ada = new person(0, 'Ada', 'adaArrobaCom', '12341234');
let grace = new person(1, 'Grace', 'graceArrobaCom', '12341234');
let hedy = new person(2, 'Hedy', 'hedyArrobaCom', '12341234');
let radia = new person(3, 'Radia', 'radiaArrobaCom', '12341234');
let sheryl = new person(4, 'Sheryl', 'sherylArrobaCom', '12341234');

// 1. El nombre de Ada:
console.log(ada.nombre);

// 2. El ID de Grace
console.log(grace.id);

// 3. El email de Hedy
console.log(hedy.email);

// 4. El ID y nombre de Radia
console.log(radia.id);

// 5. El telefono de Sheryl
console.log(sheryl.telefono);

/* 5) Tenemos la variable datos que tiene un objeto con los datos de una persona
El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. 
El télefono correcto es 0192837465
También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.*/

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
  };
  
  // codea aca la solucion
  
  // finalmente, mostramos los datos
  console.log(datos);
  // { id: 1,
  //   nombre: 'Ada',
  //   apellido: 'Lovelace',
  //   email: 'ada.lovelace@gmail.com',
  //   telefono: '0192837465',
  //   edad: 29,
  //   programa: true }


/* 6) Tenemos la variable datos con un objeto que guarda datos de personas
Tenemos que programar la siguiente lógica
SI la propiedad programa es true
Agregá la propiedad lenguajeFavorito, y asignale "Javascript"*/

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
  };
  
  // codea aca la solucion
  
  // finalmente, mostramos los datos
  console.log(datos);
  // { id: 1,
  //   nombre: 'Ada',
  //   apellido: 'Lovelace',
  //   email: 'ada.lovelace@gmail.com',
  //   telefono: '1234567890',
  //   edad: 29,
  //   programa: true,
  //   lenguajeFavorito: 'Javascript' }


/* 7)Tenemos la variable datos con un objeto que guarda datos de una persona
Tenemos que programar la siguiente lógica
SI la propiedad programa es true
Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] 
y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"*/

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
  };
  
  // codea aca la solucion
  
  // aca mostrar la frase
  console.log(
    "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"
  );
  // por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"