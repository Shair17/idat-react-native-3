let listaEstudiantes = [
  {
    inicial: "S",
    codigo: 1,
  },
  {
    inicial: "S",
    codigo: 2,
  },
  {
    inicial: "A",
    codigo: 3,
  },
  {
    inicial: "S",
    codigo: 4,
  },
];

// listaEstudiantes.forEach(({ codigo, inicial }, index) => {
//   console.log(index, { codigo, inicial });
// });

// let nuevaListaEstudiantes = listaEstudiantes.map(({ codigo, inicial }) => {
//   return {
//     codigo,
//     inicial,
//     fecha: new Date(),
//   };
// });

// console.log("nuevaListaEstudiantes", nuevaListaEstudiantes);

// let frutas = ["🍉", "🍎", "🍏", "🍒", "🥥", "🍍", "🍓", "🍇"];

// let comidaChatarra = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥪", "🧀"];

// console.log("LISTAS SEPARADAS:");
// console.log(frutas);
// console.log(comidaChatarra);

// console.log("LISTAS UNIDAS");
// // spread
// let frutasYComidaChatarra = [...frutas, ...comidaChatarra];
// console.log(frutasYComidaChatarra);

for (const key in listaEstudiantes) {
  // if (Object.hasOwnProperty.call(object, key)) {
  // const element = object[key];

  console.log("for in", key);
  // }
}

for (const estudiante of listaEstudiantes) {
  console.log("for of", estudiante);
}

for (let i = 0; i < listaEstudiantes.length; i++) {
  let estudiante = listaEstudiantes[i];

  console.log("estudiante", estudiante);
}
