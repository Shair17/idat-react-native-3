let tareas = [
  {
    tarea: "tarea 1",
    completado: false,
  },
];

const tarea_input = document.getElementById("tarea_input");
const agregar_tarea_form = document.getElementById("tarea_form");
const tareas_contenedor = document.getElementById("tareas");

function validarSiHayTareas() {
  if (tareas.length === 0) {
    const p = document.createElement("p");
    p.id = "no_hay_tareas";
    p.innerText = "No hay tareas disponibles";
    tareas_contenedor.append(p);
  } else {
    document.getElementById("no_hay_tareas")?.remove();
  }
}

function cargarTareas() {
  validarSiHayTareas();

  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.innerText = tarea.tarea;
    if (tarea.completado) {
      li.className = "tarea completado";
    } else {
      li.className = "tarea";
    }
    li.addEventListener("click", function () {
      this.classList.toggle("completado");
    });
    tareas_contenedor.appendChild(li);
  });
}

function agregarTarea(tarea) {
  const li = document.createElement("li");
  li.innerText = tarea;
  li.className = "tarea";
  tareas_contenedor.appendChild(li);

  li.addEventListener("click", function () {
    this.classList.toggle("completado");
  });
}

agregar_tarea_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tarea = tarea_input.value.trim();

  if (!tarea) return;

  tareas.unshift({
    completado: false,
    tarea,
  });

  validarSiHayTareas();
  agregarTarea(tarea);

  tarea_input.value = "";

  console.log(tareas);
});

cargarTareas();
