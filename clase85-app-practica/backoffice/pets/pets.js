const base = "https://ada-frontend-1d227-default-rtdb.firebaseio.com/"

const init = () =>{
    fetch(`${base}pets.json`)
    .then(response => response.json())
    .then(data => {
        createTable(data);
    })
};
init();

const eliminar = (id) => {
    console.log("se elmino al id:", id)
    fetch(`${base}pets/${id}.json`, {
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
        botonEliminar.setAttribute('class', 'btn btn-danger');
        const tdElim = document.createElement('td');
        tdElim.appendChild(botonEliminar);
        tr.appendChild(tdElim);

        const botonEditar = document.createElement('button');
        botonEditar.addEventListener('click', () => {
            console.log(object);
        });
        botonEditar.innerText = 'Editar';
        botonEditar.setAttribute('class', 'btn btn-warning');
        const tdEdit = document.createElement('td');
        tdEdit.appendChild(botonEditar);
        tr.appendChild(tdEdit);

        tbody.appendChild(tr);
    }
}