//1) Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.
const titulo = document.getElementById('saludo')

const saludo = () => {
   let nombre = prompt('Intruduzca su nombre');
   titulo.innerHTML = `<h1> Hola ${nombre}!! </h1>`;
}
saludo();

//2) Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

const cambiarFondoBody = () => {
    let color = prompt('Ingrese un color en sistema hexadecimal');
    document.body.style.backgroundColor = color;
}
//cambiarFondoBody();

//3) Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

const colorRGB = () => {
    let colorRojo = prompt ('Ingrese un valor del 0 al 255 para indicar color ROJO');
    let colorVerde = prompt ('Ingrese un valor del 0 al 255 para indicar color VERDE');
    let colorAzul = prompt ('Ingrese un valor del 0 al 255 para indicar color AZUL');
    document.body.style.backgroundColor = `rgb(${colorRojo},${colorVerde},${colorAzul})`;
}
colorRGB();

//4) Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

const imagen = () => {
    let tamanio = prompt('Ingrese de que tamaño quiere ver la imagen')
    let foto = document.querySelector('.foto');
    switch (tamanio) {
        case 'chica' : foto.style.height = '200px';
        break;
        case 'mediana' : foto.style.height = '500px';
        break;
        case 'grande' : foto.style.height = '800px';
    }    
}

imagen();

// Opción elegida	Ancho de imagen
// chica =>	    200px
// mediana =>	500px
// grande =>	800px