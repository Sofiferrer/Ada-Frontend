//1) Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

const canciones = () => {
    const titulo = document.createElement('h2');
    titulo.textContent = 'Mis canciones favoritas';
    const lista = document.createElement('ul');
    for (i=0; i<5; i++) {
        const cancion = prompt('Ingrese el nombre de una cancion que le guste: ');
        const item = document.createElement('li');
        item.textContent = `${cancion}`;
        lista.appendChild(item);
    };
    document.body.appendChild(titulo);
    document.body.appendChild(lista);
}
//canciones();

//2) Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

const contador = () => {
    let numero = 0;
    const titulo = document.createElement('h2');
    titulo.textContent = `Tu numero es: ${numero}`; 
    document.body.appendChild(titulo);
    for (i=0; i<6; i++) {
        const boton = document.createElement('button');
        boton.setAttribute('class', `boton${[i]}`);     
        boton.style.width = "50px";
        boton.style.border = "solid 1px";
        boton.style.margin = "2px";
        boton.style.backgroundColor = "lightgrey";
        boton.style.justifyContent = "center";
        boton.style.alignContent = "center";
        document.body.appendChild(boton);
    }
    const menosUno = () => {
        numero = numero - 1;
        titulo.textContent = `Tu numero es: ${numero}`;        
    }
    const masUno = () => {
        numero = numero + 1;
        titulo.textContent = `Tu numero es: ${numero}`;        
    }
    const menosCinco = () => {
        numero = numero - 5;
        titulo.textContent = `Tu numero es: ${numero}`;        
    }
    const masCinco = () => {
        numero = numero + 5;
        titulo.textContent = `Tu numero es: ${numero}`;        
    }
    const menosDiez = () => {
        numero = numero - 10;
        titulo.textContent = `Tu numero es: ${numero}`;        
    }
    const masDiez = () => {
        numero = numero + 10;
        titulo.textContent = `Tu numero es: ${numero}`;        
    }
    const botonMenosUno = document.querySelector('.boton0');
    botonMenosUno.textContent = "-1";
    botonMenosUno.addEventListener("click", menosUno);
    const botonMasUno = document.querySelector('.boton1');
    botonMasUno.textContent = "+1";
    botonMasUno.addEventListener("click", masUno);
    const botonMenosCinco = document.querySelector('.boton2');
    botonMenosCinco.textContent = "-5";
    botonMenosCinco.addEventListener("click", menosCinco);
    const botonMasCinco = document.querySelector('.boton3');
    botonMasCinco.textContent = "+5";
    botonMasCinco.addEventListener("click", masCinco);
    const botonMenosDiez = document.querySelector('.boton4');
    botonMenosDiez.textContent = "-10";
    botonMenosDiez.addEventListener("click", menosDiez);
    const botonMasDiez = document.querySelector('.boton5');
    botonMasDiez.textContent = "+10";
    botonMasDiez.addEventListener("click", masDiez);
}
//contador();

//3) Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

const adivinanza = () => {
    const contenedor = document.createElement('div')
    contenedor.style.width = '400px';
    contenedor.style.margin = 'auto';
    contenedor.style.padding = '10px';
    contenedor.style.backgroundColor = '#f5c185';
    contenedor.style.textAlign = 'center';

    const adivinanza = document.createElement('p');
    adivinanza.textContent = 'Aunque planta verde y débil, nadie sin temor se arrima, que es mi roce como el fuego, que al punto el cuerpo lastima.'
    adivinanza.style.fontFamily = 'monospace';
    adivinanza.style.fontSize = 'larger';
    document.body.appendChild(contenedor);
    contenedor.appendChild(adivinanza);

    for (i=0; i<3; i++) {
        const boton = document.createElement('button');
        boton.setAttribute('class', `boton${[i]}`);     
        boton.style.backgroundColor = 'lightgrey';
        boton.style.borderRadius = '5px';
        boton.style.margin = '5px';
        contenedor.appendChild(boton);
    }    

    const correcto = () => {
        opcionDos.style.backgroundColor = 'green';
        const ganaste = document.createElement('p');
        ganaste.textContent = 'CORRECTO!!';
        ganaste.style.fontSize = 'largest';
        contenedor.appendChild(ganaste);
    }

    const incorrecto = () => {
        opcionDos.style.backgroundColor = 'green';
        opcionUno.style.backgroundColor = 'red';
        opcionTres.style.backgroundColor = 'red';
        const perdiste = document.createElement('p');
        perdiste.textContent = 'ERA ORTIGA.. :(';
        perdiste.style.fontSize = 'largest';
        contenedor.appendChild(perdiste);
    }

    const opcionUno = document.querySelector('.boton0');
    opcionUno.textContent = 'CACTUS';
    opcionUno.addEventListener('click', incorrecto);
    const opcionDos = document.querySelector('.boton1');
    opcionDos.textContent = 'ORTIGA';
    opcionDos.addEventListener('click', correcto);
    const opcionTres = document.querySelector('.boton2');
    opcionTres.textContent = 'HIEDRA';
    opcionTres.addEventListener('click', incorrecto);
}
//adivinanza();

//4) Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

const colores = () => {
    const contenedor = document.createElement('div');
    contenedor.style.width = '400px';
    contenedor.style.height = '300px';
    contenedor.style.margin = 'auto';
    contenedor.style.borderRadius = '6px';
    contenedor.style.border = 'solid 1px';       
    contenedor.style.display = 'flex';
    contenedor.style.justifyContent = 'space-around';
    contenedor.style.alignItems = 'center';

    document.body.appendChild(contenedor);

    for (i=0; i<6; i++) {
        const boton = document.createElement('button');
        boton.setAttribute('class', `boton${[i]}`);     
        boton.style.width = "50px";
        boton.style.height = "40px";        

        contenedor.appendChild(boton);
    }

    const cyan = () => {
        contenedor.style.backgroundColor = 'cyan';
    }
    const orange = () => {
        contenedor.style.backgroundColor = 'orange';
    }
    const green = () => {
        contenedor.style.backgroundColor = 'green';
    }
    const purple = () => {
        contenedor.style.backgroundColor = 'purple';
    }
    const yellow = () => {
        contenedor.style.backgroundColor = 'yellow';
    }
    const red = () => {
        contenedor.style.backgroundColor = 'red';
    }

    const botonUno = document.querySelector('.boton0');
    botonUno.style.backgroundColor = 'cyan';
    botonUno.addEventListener('click', cyan);
    const botonDos = document.querySelector('.boton1');
    botonDos.style.backgroundColor = 'orange';
    botonDos.addEventListener('click', orange);
    const botonTres = document.querySelector('.boton2');
    botonTres.style.backgroundColor = 'green';
    botonTres.addEventListener('click', green);
    const botonCuatro = document.querySelector('.boton3');
    botonCuatro.style.backgroundColor = 'purple';
    botonCuatro.addEventListener('click', purple);
    const botonCinco = document.querySelector('.boton4');
    botonCinco.style.backgroundColor = 'yellow';
    botonCinco.addEventListener('click', yellow);
    const botonSeis = document.querySelector('.boton5');
    botonSeis.style.backgroundColor = 'red';
    botonSeis.addEventListener('click', red);
}
//colores();

//5) Crear un documento html que tenga:
// - un título h1 que diga: Mis emails
// - un título h2 que diga: Bandeja de entrada
// - una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

const mail = () => {
    const titulo = document.createElement('h1');
    titulo.textContent = 'Mis emails';
    const subTit = document.createElement('h2');
    subTit.textContent = 'Bandeja de entrada';
    const bandeja = document.createElement('ul');
    
    for (i=0; i<10; i++) {
        const email = document.createElement('li');
        email.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        email.style.fontWeight = 'bold';
        email.style.cursor = 'pointer';    
        bandeja.appendChild(email);
        
        const leido = () => {
            email.style.fontWeight = 'normal';
            email.style.color = 'grey';
        }
        email.addEventListener('click', leido);
    }    

    document.body.appendChild(titulo);
    document.body.appendChild(subTit);
    document.body.appendChild(bandeja);
}
//mail();


//6) Crear un documento html con
// - una barra de progreso (con un div dentro de otro)
// - un elemento de texto que indique el progreso (p. ej. 50%)
// - dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// - cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
// - lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// - el incremento/decremento es del 10%

const barra = () => {
    const contenedor = document.createElement('div');
    const barra = document.createElement('div');
    let porcentaje = Number(prompt('Ingrese porcentaje: '));
    barra.style.width = `${porcentaje}%`;
    barra.textContent = `${porcentaje}%`;
    barra.style.backgroundColor = 'red';
    barra.style.height = '20px';
    
    barra.style.display = 'flex';
    barra.style.justifyContent = 'end';
    barra.style.alignItems = 'center';
    contenedor.style.backgroundColor = 'lightgrey';
    contenedor.style.width = '50%';
    contenedor.style.margin = 'auto';

    document.body.appendChild(contenedor);
    contenedor.appendChild(barra);
    
    const aumentar = (key) => {        
        porcentaje = porcentaje + 10;
        barra.style.width = `${porcentaje}%`;
        barra.textContent = `${porcentaje}%`;
        if (key.keyCode == '39') {
            aumentar();
        }        
    }
    const reducir = (key) => {         
        porcentaje = porcentaje - 10;
        barra.style.width = `${porcentaje}%`;
        barra.textContent = `${porcentaje}%`;   
        if (key.keyCode == '37') {
            reducir();
        }            
    }
    
    const botonReducir = document.createElement('button');
    botonReducir.textContent = 'REDUCIR';
    botonReducir.addEventListener('click', reducir);      
    const botonAumento = document.createElement('button');
    botonAumento.textContent = 'AUMENTAR';
    botonAumento.addEventListener('click', aumentar);       
    window.addEventListener('keydown', reducir, false);
    window.addEventListener('keydown', aumentar, false); 
    const contenedorBotones = document.createElement('div');
    contenedorBotones.style.margin = 'auto'; 
    contenedorBotones.style.display = 'flex';
    contenedorBotones.style.justifyContent = 'center';
    contenedorBotones.style.alignItems = 'center';
    document.body.appendChild(contenedorBotones);
    contenedorBotones.appendChild(botonReducir); 
    contenedorBotones.appendChild(botonAumento);
}
//barra();


//7) Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

// - modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// - modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna

const escritorio = () => {
    const contenedor = document.createElement('div');
    const titulo = document.createElement('h1');
    titulo.textContent = 'Mi documento';
    const texto = document.createElement('p');
    texto.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const boton = document.createElement('button');    
    titulo.style.fontSize = '50px';
    titulo.style.textDecoration = 'underline';
    texto.style.fontSize = '20px';
    boton.style.fontSize = '40px';
    
    document.body.appendChild(contenedor);
    contenedor.appendChild(titulo);
    contenedor.appendChild(texto);
    contenedor.appendChild(boton); 
    boton.style.backgroundColor = 'black';
    boton.textContent = '🌚';
    contenedor.style.textAlign = 'center';

    const fondo = document.body;
    fondo.setAttribute('class', 'oscuro')

    const interruptor = () => {
        if (fondo.getAttribute('class') == '') {
            fondo.setAttribute('class', 'oscuro');
            fondo.style.backgroundColor = 'white';
            texto.style.color = 'black';
            titulo.style.color = 'black';
            boton.style.backgroundColor = 'black';
            boton.textContent = '🌚';
        } else {
            fondo.setAttribute('class','');
            fondo.style.backgroundColor = 'black';            
            texto.style.color = 'white';
            titulo.style.color = 'white';
            boton.style.backgroundColor = 'grey';
            boton.textContent = '☀️';
        }
    }
    boton.addEventListener('click', interruptor);
}
//escritorio();

//8) Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll
// 0px - 500px	    => Color de fondo
// 501px - 1000px	=> red
// 1001px - 1500px  => green
// 1501px - 2000px  => blue

const scroll = () => {
    const cuerpo = document.querySelector('.cuerpo');
    cuerpo.style.height = '2000px';
    const fondo = () => {
        const numero = window.scrollY;
        switch (true) {
            case (numero > 0 && numero < 500): cuerpo.style.backgroundColor = 'white';
            break;
            case (numero > 501 && numero < 1000): cuerpo.style.backgroundColor = 'red';
            break;
            case (numero > 1001 && numero < 1500): cuerpo.style.backgroundColor = 'green';
            break;
            case (numero > 1501 && numero < 2000): cuerpo.style.backgroundColor = 'blue';
            break;
        }
    }
    window.addEventListener('scroll', fondo);    
}
//scroll();

// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.


// Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.




// Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.




// En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto. 
//- Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
// - El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
// - El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
// - El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.



// Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.



// Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).



// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// - si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
// - si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
// - si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.

// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:
// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"

// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)

