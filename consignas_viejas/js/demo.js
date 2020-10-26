function alerta(data) {
    alert(data);
}
function suma(a, b) {
    resultado = a + b;
    return resultado;
}
function capitalize(data){
    capitalized = data;
    return capitalized;
}
function cambiarColor(color) {
    document.getElementById("demo").style.backgroundColor = color;
}
function cambiarAncho(width) {
    document.getElementById("demo2").style.width = width;
}
function cambiarAnchoFijo() {
    miwidth = "30%";
    document.getElementById("demo2").style.width = minwidth;
}
function cambiarTexto(elemento, mitexto) {
    var data = (document.getElementById(elemento).innerHTML = mitexto);
}
function obtenerContenido(elemento) {
    var data = document.getElementById(elemento).text
    alert(data);
    return data;
}
function obtenerContenido2(elemento, mitexto){
    if (elemento == "demo2"){
        document.getElementById(elemento).innerHTML = 'Hola Mundo!';
    }
    else{
        document.getElementById(elemento).innerHTML = mitexto;
    }
}
function sumar() {
    var n1 = document.getElementById("a").value;
    var n2 = document.getElementById("b").value;
    console.log("mi suma es")
}
//copia de github
  
  function obtenerContenido3(elemento, mitexto) {
    var data;
    if (elemento == "demo2") {
      data = document.getElementById(elemento).innerHTML = "hola mundo";
    } else {
      data = document.getElementById(elemento).innerHTML = mitexto;
    }
  }
  
  function mostrarNumeros() {
    var n = 3;
    while (n <= 5) {
      console.log("contando: " + n);
      n++;
    }
    return n;
  }
  
  function llenarTabla() {
    var n = 0; //contador
    var celdas = ""; // variable para armar la tabla
    while (n <= 5) {
      console.log("contando: " + n); // debug
      celdas = celdas + "<tr><td>" + n + "</td></tr>";
      console.log("celdas: " + celdas); //debug
      n++;
    }
    mitabla = cambiarTexto("mitabla", celdas);
    return n;
  }
  
  function llenarTabla2() {
    var n = 0;
    var celdas = "";
    for (var i = 0; i <= 5; i++) {
      console.log("contando: " + i); // debug
      celdas = celdas + "<tr><td>" + n + "</td></tr>";
      console.log("celdas: " + celdas); //debug
    }
    cambiarTexto("mitabla", celdas);
    return n;
  }
  
  function llenarTabla3() {
    let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"]; // array de datos
    var celdas = "";
    for (var i = 0; i <= 5; i++) {
      console.log("contando: " + i); // debug
      celdas = celdas + "<tr><td>" + frutas[i] + "</td></tr>";
      console.log("celdas: " + celdas); //debug
    }
    cambiarTexto("mitabla", celdas);
    console.log("mi array: " + frutas.length); //debug
    console.log("mi array pos 3: " + frutas[3]); //debug
  
    return frutas;
  }
  
  function llenarTabla4() {
    let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"]; // array de datos
    var celdas = "<tr><td>" + frutas[2] + "</td></tr>";
    cambiarTexto("mitabla", celdas);
  }
  
  function ordenarTabla() {
    let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"]; // array de datos
    let frutasordenadas = frutas.sort();
    var celdas = "";
    for (var i = 0; i <= 5; i++) {
      celdas = celdas + "<tr><td>" + frutasordenadas[i] + "</td></tr>";
      console.log("celdas: " + celdas); //debug
    }
    cambiarTexto("mitabla", celdas);
  }
  let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"];
  
  let objeto = {
    1: ["Maxi", "sorribas", "38"],
    2: ["Juan", "Perez", "37"],
  };
  
  let emp = [];
  emp[0] = "Casey Jones";
  emp[1] = "Phil Lesh";
  emp[2] = "August West";
  
  let empl = [];
  let listempleados = "";
  let listaordenadaempleados = "";
  
  function agregarEmpleado() {
    nuevoempleado = obtenerContenidoEmpleado("empleado");
    empl.push(nuevoempleado);
    console.log("mi empleado:" + nuevoempleado); // debug
    mostrarNuevoEmpleado(nuevoempleado);
    return empl;
  }
  
  function obtenerContenidoEmpleado(elemento) {
    var data = document.getElementById(elemento).value;
    return data;
  }
  
  function ordenarEmpleados() {
    empleadosordenados = empl.sort(); //ordeno  mi array
    console.log("empleados ordenados " + empleadosordenados);
  
    empleadosordenados.forEach((item) => {
      listaordenadaempleados =
        listaordenadaempleados + "<tr><td>" + item + "</td></tr>"; // lo guardo en la variable
      console.log("lista tabla: " + listaordenadaempleados);
    });
    cambiarTexto("mitabla", listaordenadaempleados);
    return empleadosordenados;
  }
  
  function mostrarNuevoEmpleado(empleado) {
    listempleados = listempleados + "<tr><td>" + empleado + "</td></tr>";
    console.log("celdas: " + listempleados); //debug
    mitabla = cambiarTexto("mitabla", listempleados);
    return empleado;
  }
  
  //let colors = ['red', 'green', 'blue'];
  // utilizando for
  //for (let i = 0; i < colors.length; i++) {
  //  console.log(colors[i]);
  //}
  
  // foreach
  //colors.forEach(function(color) {
  //  console.log(color)
  //})
  
  // foreach con arrow function
  //colors.forEach(color => console.log(color))
  
  function verificoNombre(nombre) {
    var animal = nombre;
    switch (animal) {
      case "Vaca":
        console.log("Este Vaca subirá al Arca de Noé.");
        break;
      case "Jirafa":
        console.log("Este Jirafa subirá al Arca de Noé.");
        break;
      case "Perro":
        console.log("Este Perro subirá al Arca de Noé.");
        break;
      case "Cerdo":
        console.log("Este Cerdo subirá al Arca de Noé.");
        break;
      default:
        console.log("Este animal no lo hará.");
    }
  }

  function validar_documento(doc) {
    var tipo_doc = doc.value;
    switch (tipo_doc) {        
      case "dni":
        cambiarTexto("doc_seleccionado", "Usted selecciono DNI");
        console.log("DNI de n°. caracteres: "+ tipo_doc.length);
        break;
      case "cuit":
        var data = (document.getElementById("doc_seleccionado").innerHTML= "Usted selecciono CUIT")
        console.log(tipo_doc.toUpperCase());
        break;
      case "pasaporte":
        alert("Usted selecciono pasaporte");
        console.log("Pasaporte en mayuscula: "+ tipo_doc.toUpperCase());
        break;
      default:
        alert("Tipo de Documento no válido. Seleccione otro.");
        console.log("Documento inválido.");
    }
  }

  function sumar(elemento) {
    //con parseInt convierto el valor, de string a entero
    var n1= parseInt(document.getElementById("a").value);
    var n2= parseInt(document.getElementById("b").value);
    var total = n1 + n2; //suma resultados.
    console.log("La suma da: " + total);
    data = document.getElementById(elemento).innerHTML = "Resultado: "
    console.log(data);
  }

  function mostrarNumeros() {
    var n = 0;
    while (n <= 5) {
      console.log("contando: " + n);
      n++;
    }
    return n;
  }

  function repetirTexto() {
    var n = 0;
    var celdas = "";
    while (n <= 5) {
      console.log("contando: " + n);
      celdas = celdas + "<tr><td>" + n + "<td><tr>";
      console.log("celdas: " + celdas);
      n++;
    }
    return n;
  }

  // ejercicio 9  3/9/20

  