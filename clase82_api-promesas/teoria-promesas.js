// Promesas

// Ejemplo 1

const callback = (resolve, reject) => {
    const promesaExitosa = false;
  
    const response = {
      success: promesaExitosa,
      data: {
        user: "Adrián",
        email: "asd@asd.com",
        password: "asd123",
      },
    };
  
    if (promesaExitosa) {
      resolve(response);
    } else {
      reject(response);
    }
  };
  
  const miPromesa1 = new Promise(callback);
  
  miPromesa1
    .then((respuesta) => {
      if (respuesta.success) {
        console.log(`La promesa devolvió el usuario ${respuesta.data.user}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  
  // Fin ejemplo 1
  
  // Ejemplo 2
  
  const miPromesa2 = new Promise((resolve, reject) => {
    const promesaExitosa = false;
  
    const response = {
      success: promesaExitosa,
      data: {
        user: "Adrián",
        email: "asd@asd.com",
        password: "asd123",
      },
    };
  
    if (promesaExitosa) {
      resolve(response);
    } else {
      reject(response);
    }
  });
  
  miPromesa2
    .then((respuesta) => {
      if (respuesta.success) {
        console.log(`La promesa devolvió el usuario ${respuesta.data.user}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  
  // Fin ejemplo 2
  
  console.log(1);
  
  console.log(2);
  console.log(3);
  
  // Protocolo HTTP
  // Métodos HTTP
  
  // API
  
  // Frontend
  // Cliente - url del browser
  // http://miaplicacion.com/servicios
  
  // Backend
  // Endpoints
  
  // api.get('/usuarios').funcion() {
  
  //   // Va a ir a la base de datos y va a devolver usuarios
  
  //   return usuarios;
  
  // }
  
  // api.get('/').funcion() {
  
  //   // va a la base de datos y obtiene el contenido de la home
  
  //   return homeData;
  
  // }
  
  // api.get('/servicios').funcion() {
  
  //   // Va a ir a la base de datos y va a devolver servicios
  
  //   return servicios;
  // }
  
  // api.post('/usuarios').funcion(usuario) {
  
  //   // Va a ir a la base de datos y registra el nuevo usuario
  
  //   return {
  //     success : true,
  //     user: userResponse
  //   }
  
  // }
  
  // REST API
  
  // fetch
  
  // Path params