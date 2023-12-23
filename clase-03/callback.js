function saludar(fn) {
  return `Hola, ${fn()}`;
}

const mensaje = saludar(function () {
  const nombre = "Juan";

  return nombre;
});

console.log(mensaje);

setTimeout(() => {
  console.log("me ejecuté luego de 5 segundos");
}, 5000);

let contador = 0;

setInterval(() => {
  contador++;
  console.log("Hola, me ejecuto cada 1 segundo", contador);
}, 1000);
