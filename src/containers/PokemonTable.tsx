import React from "react";

import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "../operations/queries/getAllPokemons";
import { GET_POKEMON_FILTER } from "../operations/queries/getPokemonFilter";
import FilterPokemonList from "./PokemonList";
import { pokemonsVar } from "../cache";

export default function Main() {
  fetch("http://localhost:3000/starting-react/pokemon.json")
    .then((resp) => resp.json())
    .then((pokemon) => pokemonsVar(pokemon));

  const pokemonFilterQueryResult = useQuery(GET_POKEMON_FILTER);
  const pokemonsQueryResult = useQuery(GET_ALL_POKEMONS);
  //  const pokemons: Pokemons = pokemonsQueryResult.data.pokemons;
  //  const pokemonFilter: PokemonFilter = pokemonFilterQueryResult.data.pokemonFilter;
  //  const { setPokemonFilter } = pokemonMutations;
  return <FilterPokemonList />;
  // return <PokemonTable filteredPokemons={pokemons} />;
}
