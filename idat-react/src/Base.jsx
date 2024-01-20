import { useState } from "react";

export const Base = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Aprendiendo React</h1>

      <h2>{contador}</h2>

      <button
        onClick={() => {
          setContador(0);
        }}
      >
        0
      </button>

      <div className="card card_container">
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Sumar
        </button>
        <button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Restar
        </button>
        <button
          onClick={() => {
            setContador(contador * 2);
          }}
        >
          Multiplicar
        </button>
        <button
          onClick={() => {
            setContador(contador / 2);
          }}
        >
          Dividir
        </button>
        <button
          onClick={() => {
            setContador(contador % 2);
          }}
        >
          Módulo
        </button>
      </div>
    </div>
  );
};
