import React from "react";
import { Base, Name } from "../interfaces/pokemon";

function PokemonInfo({ name, base }: { name: Name; base: Base }) {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key as keyof Base]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PokemonInfo;
