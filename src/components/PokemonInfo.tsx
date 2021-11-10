import React from "react";
import { Base } from "../interfaces/pokemon";
import { useSelector } from "react-redux";
import { IPokemon } from "../interfaces/pokemon";

interface RootState {
  filter: string;
  pokemon: IPokemon[];
  selectedItem: IPokemon;
}
//function PokemonInfo({ name, base }: { name: Name; base: Base }) {
const PokemonInfo = () => {
  const selectedItem = useSelector((state: RootState) => state.selectedItem);
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
