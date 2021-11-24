import React from "react";
import { pokemonFilterVar, pokemonsVar } from "../cache";
import PokemonTable from "../components/PokemonTable";
import { Pokemons } from "../interfaces/pokemon";
import { PokemonFilter } from "../models/PokemonFilter";

function filterPokemonsByFilter({ filter }: PokemonFilter, pokemons: Pokemons) {
  if (filter) {
    return pokemons.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
    );
  } else return pokemons;
}

export default function FilterPokemonList() {
  const pokemons: Pokemons = pokemonsVar();
  const filteredPokemons = filterPokemonsByFilter(pokemonFilterVar(), pokemons);

  return <PokemonTable filteredPokemons={filteredPokemons} />;
}
