import React, { useState } from 'react';
import './counter.css'

const Counter = () => {
    // EJERCICIO 1
    // Creo mi estado
    const [input, setInput] = useState(0);
    // Esta funcion toma el valor que ingresa el usuario en el input, y me cambia el estado
    const handleInput = (e) => {
        setInput(parseInt(e.target.value));
    }
    // Funciones de sumar y restar
    const sumar = () => setInput(input + 1);
    // La funcion restar le agregamos una condicion para que no haya numeros negativos
    const restar = () => {
        if (input > 0) {
            setInput(input - 1);
        }
    }
    // EJERCICIO 2
    // Definimos estado con booleano
    const [color, setColor] = useState(false);
    // Esta funcion nos ejecuta el cambio de estado solo si el valor inicial es distinto (el contrario)
    const handleClick = () => {
        setColor(!color);
    }
    return (
        <div>
            {/* Agrego evento al h1 y dentro del className ejecuto el ternario que me alterna las clases */}
            <h1 onClick={handleClick} className={color ? "azul" : "rojo"}>Contador: {input}</h1>
            {/* Agregamos las funciones a los botones, seteamos el value del input al valor inicial, y agregamos funcion onChanage
                    para que me modifique el valor inicial cuando el usuario ingrese un numero */}
            <button onClick={sumar}>Sumar</button>
            <input type="number" name="number" value={input} onChange={(e) => handleInput(e)} />
            <button onClick={restar}>Restar</button>
        </div>
    )
}


export default Counter;


