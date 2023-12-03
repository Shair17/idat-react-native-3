// Realizar un tablero de ajedrez de 8x8.
// Pueden hacerlo mediante HTML y CSS para crear los elementos

// tomar de referencia la siguiente imagen: https://graficacion11030440.files.wordpress.com/2014/02/ajedrez.jpg

function generarAcierto() {
  let numero = Math.round(Math.random() * 10);

  return numero < 2;
}

let tablero = document.getElementById("tablero");

function crearTablero() {
  let columnsSize = 8;
  let rowsSize = 8;

  tablero.innerHTML = "";

  for (let columns = 0; columns < columnsSize; columns++) {
    for (let rows = 0; rows < rowsSize; rows++) {
      const mostrarFicha = generarAcierto();

      let esPar = (columns + rows) % 2 === 0;
      let hijo = document.createElement("div");
      hijo.className = `cuadrado ${esPar ? "blanco" : "negro"}`;

      if (mostrarFicha) {
        let ficha = document.createElement("div");
        ficha.className = "ficha";
        hijo.appendChild(ficha);
      }

      tablero.appendChild(hijo);
    }
  }
}

crearTablero();

setInterval(() => {
  crearTablero();
}, 1000);
