let startTime = Date.now();

function numeroAleatorio() {
  return Math.floor(Math.random() * 10 + 1);
}

function regalarCarro() {
  return new Promise((resolve, reject) => {
    let numero = numeroAleatorio();

    if (numero > 5) {
      resolve("Felicidades, has regalado el carro! :)");
    } else {
      reject("Oh no, solo habrá carbón! :(");
    }
  });
}

regalarCarro()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("esto siempre se ejecuta");
  });

async function regalar() {
  try {
    const respuesta = await regalarCarro();
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

async function obtenerDatos() {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

obtenerDatos();

console.log("Se demoró:", Date.now() - startTime + "ms");
