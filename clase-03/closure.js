function saludar(nombre) {
  console.log("Hola", nombre);

  return function (apellido) {
    console.log("Adiós", nombre, apellido);
  };
}

const fn = saludar("Juan");

fn("Perez");
