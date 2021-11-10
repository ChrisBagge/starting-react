import React from "react";
import { IPokemon } from "../interfaces/pokemon";
import PokemonRow from "./PokemonRow";
import { useSelector, useDispatch } from "react-redux";

interface RootState {
  filter: string;
  pokemon: IPokemon[];
  selectedItem: IPokemon;
}
const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state: RootState) => state.pokemon);
  const filter = useSelector((state: RootState) => state.filter);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {/* {pokemon.map((pokemon) => ( */}
        {pokemon
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={(pokemon) =>
                dispatch({
                  type: "SET_SELECTED_ITEM",
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
