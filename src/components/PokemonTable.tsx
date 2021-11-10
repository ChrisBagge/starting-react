import React from "react";
import { IPokemon } from "../interfaces/pokemon";
import PokemonRow from "./PokemonRow";

const PokemonTable = ({
  pokemon,
  filter,
  selectedItemSet,
}: {
  pokemon: IPokemon[];
  filter: string;
  selectedItemSet: React.Dispatch<React.SetStateAction<IPokemon | null>>;
}) => (
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
            onSelect={(pokemon) => selectedItemSet(pokemon)}
          />
        ))}
    </tbody>
  </table>
);

export default PokemonTable;
