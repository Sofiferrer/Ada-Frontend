/*Ejercicio 1 - Zorro
API

Utilizando el template de ejercicio Zorro, se debe mostrar una imagen aleatoria de un zorro cuando se apriete el botón.

const url = "https://randomfox.ca/floof";

const zorro = () => {

}*/

/*Ejercicio 4 - Foodish
API

Utilizando el template de ejercicio Foodish, cuando se apriete los diferentes botones se debe cambiar la etiqueta img por una imagen de dicha categoría.*/

const url = "https://foodish-api.herokuapp.com";
fetch(`${url}/images/biryani/biryani6.jpg`)
.then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});
