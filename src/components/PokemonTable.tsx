import React from "react";
import { IPokemon } from "../interfaces/pokemon";
import PokemonRow from "./PokemonRow";
import store from "../store";
import { observer } from "mobx-react";

const PokemonTable = () => {
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
        {store.pokemon
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(store.filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={(pokemon) => store.setSelectedItem(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
