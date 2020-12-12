// fetch
const btn = document.getElementById("get-data");

btn.addEventListener("click", () => {
  fetch("inhabitants.json").then((data) => {
    console.log(data.json());
  });
});


/*fetch('https://apis.datos.gob.ar/georef/api/ubicacion?lat=-27.2741&lon=-66.7529')
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    })
    .then(algo => {
        console.log(algo)
    })
    .catch(error => {
        console.log(error);
    })*/

    
// REST API
// Endpoints
// Recursos
// Path params
// Métodos HTTP
// GET