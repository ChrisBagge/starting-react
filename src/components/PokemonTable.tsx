import React from "react";
import useStore from "../store";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);
  const setSelectedItem = useStore((state) => state.setSelectedItem);
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
              onSelect={(pokemon) => setSelectedItem(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
