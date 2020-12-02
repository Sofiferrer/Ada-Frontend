  
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo


// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

/*const loading = () => {
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
loading();*/

  
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes


const user = document.getElementById("user");
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');

const saludo = () => {
    const reacciones = [uno, dos, tres];
    let usuario = prompt("Ingrese su nombre");
    let reacUno = prompt("Cantidad de Me Gusta",0);
    let reacDos = prompt("Cantidad de Me Encanta",0);
    let reacTres = prompt("Cantidad de Me Asombra",0);
    user.innerHTML = usuario;
    document.body.style.fontFamily = "Helvetica";
    for (reaccion of reacciones) {
        element.style.border = "2px solid blue";
        element.style.borderRadius = "10px";
        element.style.padding = "5px 20px";
        element.style.background = "#c2c2c2";
        element.style.color = "blue";
        element.style.cursor = "pointer";
    }
    uno.textContent += ` ${reacUno}`;
    dos.textContent += ` ${reacDos}`;
    tres.textContent += ` ${reacTres}`;
}
saludo();

  
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




// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.
