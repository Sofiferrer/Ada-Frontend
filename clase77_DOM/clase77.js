// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo

const documento = document.body;
const temperaturaActual = () => {
    const temperatura = Number(prompt('Ingrese la temperatura actual: '));
    const h1 = document.createElement('h1');
    h1.textContent = `La temperatura actual es: ${temperatura}°`;
        
    switch (true) {
        case (temperatura)<0: h1.style.color = 'blue';
        break;
        case (temperatura)>=0 && (temperatura)<15: h1.style.color = 'lightblue';
        break;
        case (temperatura)>=15 && (temperatura)<25: h1.style.color = 'green';
        break;
        case (temperatura)>=25 && (temperatura)<30: h1.style.color = 'yellow';
        break;
        case (temperatura)>=30 && (temperatura)<35: h1.style.color = 'orange';
        break;
        case (temperatura)>35: h1.style.color = 'red';
    }
documento.appendChild(h1);
}
//temperaturaActual();



// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

const loading = () => {
    const contenedor = document.createElement('div');
    const barra = document.createElement('div');
    const porcentaje = Number(prompt('Ingrese porcentaje: '));
    
    barra.style.backgroundColor = 'red';
    barra.style.height = '20px';
    barra.style.width = `${porcentaje}%`;
    contenedor.style.backgroundColor = 'lightgrey';
    contenedor.style.width = '50%';

    document.body.appendChild(contenedor);
    contenedor.appendChild(barra);
}
//loading();

  
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

const saludo = () => {
    const user = prompt('Ingrese su usuario: ');
    const h3 = document.createElement('h3');
    h3.textContent = `Hola, ${user}!!`
    document.body.style.fontFamily = "Helvetica";
    const texto = document.createElement('p');
    texto.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
documento.appendChild(h3);
documento. appendChild(texto);

let MeGusta = '👍';
let MeEncanta = '💓';
let MeAsombra = '😮';
let reacciones = [MeGusta, MeEncanta, MeAsombra];
for (i=0; i<reacciones.length; i++) {
    let numero = prompt('Ingrese cantidad de reacciones: ')
    let reaccion = document.createElement('span');
    reaccion.textContent = `${reacciones[i]} ${numero}`;
    reaccion.style.border = "2px solid blue";
    reaccion.style.borderRadius = "10px";
    reaccion.style.padding = "5px 20px";
    reaccion.style.background = "#c2c2c2";
    reaccion.style.color = "blue";
    reaccion.style.cursor = "pointer";
    reaccion.style.margin = "2px";
    documento.appendChild(reaccion);
}
}
//saludo();
  
// Hacer un programa que al iniciarse pregunte mediante prompts por
// - un título
// - una url de una imagen
// - una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// - una imagen, con la url de la imagen ingresada
// - un título, con el texto del título ingresado
// - un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:
// - centrarla con respecto a la pantalla
// - agregarle un borde
// - agregarle un sombreado
// - cambiarle la tipografía
// - cambiarle los tamaños de fuente
// - cambiarle los colores por defecto

const card = () => {
    const tarjeta = document.querySelector('.card');
    tarjeta.style.margin = "auto";
    tarjeta.style.border = "solid 2px";
    tarjeta.style.width = "400px";
    tarjeta.style.boxShadow = "5px 5px 5px #999";
    tarjeta.style.fontSize = "larger";
    tarjeta.style.backgroundColor = "#f5c185";
    tarjeta.style.textAlign = "center";

    const titulo = document.querySelector('.card-title');
    titulo.textContent = prompt('Ingrese el titulo: ');
    titulo.style.fontFamily = "monospace";

    const link = prompt('ingrese URL de articulo: ');
    const ref = document.querySelector('.link').setAttribute("href", link);

    const url = prompt('Ingrese URL de la imagen: ');
    const imagen = document.querySelector('.card-img-bottom').setAttribute("src", url);
}
//card();

// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

const animals = () => {
    const imagen = document.createElement('img')
    const muestra = prompt("Ingrese un animal, las opciones son: GATO, PERRO, MONO, TIGRE");
    switch (muestra) {
        case ("GATO"): imagen.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/11/27/13/36/cat-5781913__340.jpg');
        break;
        case ("PERRO"): imagen.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/11/29/07/31/dog-5786753__340.jpg');
        break;
        case ("MONO"): imagen.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/11/27/10/08/monkey-5781485__340.jpg');
        break;
        case ("TIGRE"): imagen.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/11/30/13/41/tiger-5790919__340.jpg');
        break;
    }
    const cuadro = document.createElement('div');
    cuadro.style.margin = "auto";
    cuadro.style.textAlign = "center";
    imagen.style.border = "solid 3px";

documento.appendChild(cuadro);
cuadro.appendChild(imagen);
}
//animals();
