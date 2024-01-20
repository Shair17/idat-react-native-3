import { useState } from "react";

export const Calculadora = () => {
  const [salida, setSalida] = useState("");
  const [resultado, setResultado] = useState("");

  const manejarBoton = (valor) => {
    if (valor === "=") {
      setResultado(eval(salida)?.toString());
    } else if (valor === "C") {
      setSalida("");
      setResultado("");
    } else {
      setSalida((prev) => prev + valor);
    }
  };

  return (
    <div>
      <div className="calculadora_inicio">
        <input type="text" value={salida} readOnly />
        <span>{resultado}</span>
      </div>

      <div className="grid_calculadora">
        <button onClick={() => manejarBoton("7")}>7</button>
        <button onClick={() => manejarBoton("8")}>8</button>
        <button onClick={() => manejarBoton("9")}>9</button>
        <button onClick={() => manejarBoton("/")}>/</button>

        <button onClick={() => manejarBoton("4")}>4</button>
        <button onClick={() => manejarBoton("5")}>5</button>
        <button onClick={() => manejarBoton("6")}>6</button>
        <button onClick={() => manejarBoton("*")}>x</button>

        <button onClick={() => manejarBoton("1")}>1</button>
        <button onClick={() => manejarBoton("2")}>2</button>
        <button onClick={() => manejarBoton("3")}>3</button>
        <button onClick={() => manejarBoton("-")}>-</button>

        <button onClick={() => manejarBoton("0")}>0</button>
        <button onClick={() => manejarBoton(".")}>.</button>
        <button onClick={() => manejarBoton("=")}>=</button>
        <button onClick={() => manejarBoton("+")}>+</button>

        <button
          onClick={() => manejarBoton("C")}
          style={{
            gridColumn: "1 / -1",
          }}
        >
          C
        </button>
      </div>
    </div>
  );
};
