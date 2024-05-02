// Saludo.js
import React from 'react';

// Un componente funcional básico que muestra un saludo
export function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

export default Saludo;
