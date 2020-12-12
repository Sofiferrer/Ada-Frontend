const base = "https://ada-frontend-1d227-default-rtdb.firebaseio.com/"

const init = () =>{
    fetch(`${base}users.json`)
    .then(response => response.json())
    .then(data => {
        createTable(data);
    })
};
init();
const eliminar = (id) => {
    console.log("se elmino al id:", id)
    fetch(`${base}users/${id}.json`, {
    method: "DELETE"
    }).then((response) => {
    console.log(response);
    return response.json()
    }).then((data) => {
    console.log(data)
    }).then(init);
}


const createTable = (data) => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML="";
    for (let object in data) {

        const tr = document.createElement('tr');
        for (let item in data[object]) {
            console.log(item);
            const td = document.createElement('td');
            td.innerHTML = data[object][item];
            tr.appendChild(td);
        }

        const botonEliminar = document.createElement('button');
        botonEliminar.addEventListener('click', () => {
            eliminar(object);
        });
        botonEliminar.innerText = 'Eliminar';
        const td = document.createElement('td');
        td.appendChild(botonEliminar);
        tr.appendChild(td);

        const botonEditar = document.createElement('button');
        botonEditar.addEventListener('click', () => {
            eliminar(object);
        });
        botonEditar.innerText = 'Editar';
        const td = document.createElement('td');
        td.appendChild(botonEditar);
        tr.appendChild(td);

        tbody.appendChild(tr);
    }
}