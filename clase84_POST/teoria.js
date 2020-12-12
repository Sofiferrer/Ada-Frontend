// POST
// JSON.stringify
// JSON.parse

const urlBase =
  "http://server.formacion-continua-web-api.development.magnetico.com.ar";

const personaje = {
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
};

let personajeToJsonString = JSON.stringify(personaje);

// console.log({ tag: tag });
console.log(personaje);
console.log(personajeToJsonString);

// const string = '{"user": {"name": "Adrian"}}';

// let stringJSONToObject = JSON.parse(string);

// console.log(stringJSONToObject.user.name);

fetch(urlBase + "/tags?", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: personajeToJsonString,
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });