import React from "react";
import { Base } from "../interfaces/pokemon";
import useStore from "../store";


const PokemonInfo = () => {
  const selectedItem = useStore((state) => state.selectedItem);
  
  return selectedItem.name ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key as keyof Base]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
