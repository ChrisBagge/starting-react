import React from "react";
import PokemonRow from "./PokemonRow";
import { Pokemons } from "../interfaces/pokemon";

function PokemonTable({ filteredPokemons }: { filteredPokemons: Pokemons }) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {filteredPokemons.map((pokemon) => (
          <PokemonRow pokemon={pokemon} key={pokemon.id} />
        ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;
