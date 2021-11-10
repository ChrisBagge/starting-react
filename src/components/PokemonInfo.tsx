import React, { useContext } from "react";
import { Base } from "../interfaces/pokemon";
import PokemonContext from "./PokemonContext";
import { IPokemon } from "../interfaces/pokemon";

//function PokemonInfo({ name, base }: { name: Name; base: Base }) {

const PokemonInfo = () => {
  const {
    selectedItem: {
      name: { english },
      base,
    },
  } = useContext(PokemonContext) || ({} as IPokemon);

  return english ? (
    <div>
      <h1>{english}</h1>
      <table>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key as keyof Base]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
