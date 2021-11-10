import React, { useContext } from "react";
import { Base } from "../interfaces/pokemon";
import PokemonContext from "./PokemonContext";

//function PokemonInfo({ name, base }: { name: Name; base: Base }) {
const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext);

  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        {Object.keys(selectedItem.base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{selectedItem.base[key as keyof Base]}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
