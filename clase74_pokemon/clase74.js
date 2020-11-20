"use strict";

const objeto = {
  name: "Adrian",
  lastname: "Solimano",
  email: "adrian@ada.com",
  edad: 37,
  datosBancarios: {
    cbu: "123123123123123",
    numeroCuenta: "123123123",
    alias: "UNO.DOS.TRES",
  },
};

// const name = "Mi aplicación Web";
// Asignación por desestructuración
// const name = objeto.name;
// const lastname = objeto.lastname;
// const email = objeto.email;
// const { name, lastname, email } = objeto;

// Cambiando el nombre de variables desestructuradas

// const { name: name2, lastname, email } = objeto;

// console.log(name, name2);

// Desestructuración anidada

// const {
//   datosBancarios,
//   datosBancarios: { numeroCuenta },
// } = objeto;

// console.log(datosBancarios);

// Desestructurando parámetros

// const miFuncion = ({ name, datosBancarios }) => {
//   console.log(name, datosBancarios);
// };

// miFuncion(objeto);

// Objetos como parámetros

// Operador spread

// const { ...restoDelObjeto } = objeto;

// restoDelObjeto.otroDato = "Otro dato";
// restoDelObjeto.name = "J. Adrián";

// console.log(restoDelObjeto);
// console.log(objeto);
// Operador rest

// Inmutabilidad

// Object.freeze(objeto);

/*Object.seal(objeto);

objeto.name = "J. Adrián";
objeto.edad = 20;
objeto.otroDato = "Otro dato";*/

//console.log(objeto);

// Pasaje por valor vs pasaje por referencia

// Shallow copy vs deep copy

//let objeto2 /* J6 */ = objeto; /* J6 */

//const { ...restoDelObjeto } /* P20 */ = objeto; /* J6 */



const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
      primary: "Overgrow",
      hidden: "Chlorophyll",
    },
    stats: {
      hp: 45,
      attack: 49,
      deffense: 59,
      speed: 45,
    },
    moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
    modifiers: {
      weakness: ["fire, ice", "flying", "psychic"],
      resistances: ["water", "grass", "electric", "fighter"],
    },
  };
  
  const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
      primary: "Blaze",
      hidden: "Solar Power",
    },
    stats: {
      hp: 39,
      attack: 52,
      deffense: 43,
      speed: 65,
    },
    moves: ["Growl", "Scratch", "Flamethrower", "Dragon Breath"],
    modifiers: {
      weakness: ["water", "ground", "rock"],
      resistances: ["fire", "ice", "grass", "steal"],
    },
  };
  
  const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
      primary: "Torrent",
      hidden: "Rain Dish",
    },
    stats: {
      hp: 44,
      attack: 48,
      deffense: 50,
      speed: 43,
    },
    moves: ["Tackle", "Tail Whip", "Water Gun", "Hydro Pump"],
    modifiers: {
      weakness: ["electric", "grass"],
      resistances: ["water", "fire", "ice", "steel"],
    },
  };
  
  const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
      primary: "Static",
      hidden: "Lightning rod",
    },
    stats: {
      hp: 35,
      attack: 55,
      deffense: 40,
      speed: 90,
    },
    moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
    modifiers: {
      weakness: ["ground"],
      resistances: ["electric", "flying", "water", "steel"],
    },
  };
  
  //1) Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos
  
  //2) Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria
  
  //3) Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil
  
  //4) Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil
  
  //5) Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo
  
  //6) Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" }
  
  //7) Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo de pokémon que lo ataca
  
  const isWeakAgainst = ({ type }, { modifiers: { weakness } }) => {
    if (weakness.includes(type)) {
        return true;
    }
    else { return false };
}
//console.log(isWeakAgainst(squirtle, charmander));

  /*8) Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo de pokémon que lo ataca*/

  const isStrongAgainst = ({ type }, { modifiers: { resistances } }) => {
    if (resistances.includes(type)) {
        return true;
    }
    else { return false };
}
//console.log(isStrongAgainst(squirtle, bulbasaur));
  
  //9) Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada
 
const addAbility = (pokemon, habilidad) => {
    for (let prop in habilidad) {
        pokemon.ability[prop] = habilidad[prop];
    }
    return pokemon;
}
//console.log(addAbility(bulbasaur, {secondary: "Discharge"}));

  //10) Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado
  
const addMove = (pokemon, move) => {
 const {moves} = pokemon;
 moves.push(move);
 return pokemon;
}
//console.log(addMove(bulbasaur, "Scratch"));

//11) Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento eliminado.
  


//12)  Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
//- 2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
//- 0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
//- 1, si no es débil ni resistente  