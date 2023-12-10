function $(el) {
  return document.querySelector(el);
}

console.log($("#mostrar_nombre"));

$("#nombre").addEventListener("input", (evento) => {
  $("#mostrar_nombre").innerText = evento.target.value;
});
