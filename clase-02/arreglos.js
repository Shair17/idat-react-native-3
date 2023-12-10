let estudiantes = [
  {
    edad: 17,
    nombre: "Juan",
    apellidos: "Torres",
    estaEstudiando: true,
    notas: [18, 16, 14],
  },
  {
    edad: 18,
    nombre: "Carlos",
    apellidos: "Huaman",
    estaEstudiando: true,
    notas: [15, 16, 18],
  },
];

// length
console.log("cantidad de estudiantes:", estudiantes.length);

// push
estudiantes.push({
  apellidos: "Chicoma",
  edad: 17,
  estaEstudiando: true,
  nombre: "Javier",
  notas: [10, 12, 15],
});

// pop
estudiantes.pop();

// unshift
estudiantes.unshift(
  {
    apellidos: "Chicoma",
    edad: 17,
    estaEstudiando: true,
    nombre: "Javier",
    notas: [10, 12, 15],
  },
  {
    apellidos: "Castillo",
    edad: 18,
    estaEstudiando: true,
    nombre: "Kevin",
    notas: [17, 10, 15],
  },
  {
    apellidos: "Castañeda",
    edad: 18,
    estaEstudiando: true,
    nombre: "Peter",
    notas: [17, 10, 15],
  },
  {
    apellidos: "Santa Cruz",
    edad: 18,
    estaEstudiando: true,
    nombre: "Dante",
    notas: [17, 10, 15],
  }
);

// shift
estudiantes.shift();

// slice
const sliceEstudiantes = estudiantes.slice(1, 3);
console.log("SLICE ESTUDIANTES", sliceEstudiantes);

// splice
const spliceEstudiantes = estudiantes.splice(1, 1, {
  apellidos: "Paredes",
  edad: 18,
  estaEstudiando: true,
  nombre: "Roger",
  notas: [17, 10, 15],
});
console.log("SPLICE ESTUDIANTES", spliceEstudiantes);

// indexOf
const frutas = [
  "🍎",
  "🍉",
  "🍍",
  "🥥",
  "🍒",
  "🍋",
  "🍊",
  "🍑",
  "🍇",
  "🍓",
  "🍏",
];
const indiceDeManzana = frutas.indexOf("🍇");
console.log("indexOf", indiceDeManzana);

// includes
const frutasTieneCodo = frutas.includes("🥥");
console.log("includes", frutasTieneCodo);

// join
const frutasEnString = frutas.join(" ");
console.log("join", frutasEnString);

// reverse
const frutasRevertidas = frutas.reverse();
console.log("frutas invertidas", frutasRevertidas);

console.log("TODOS LOS ESTUDIANTES:", estudiantes);
