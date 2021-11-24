import createSetPokemonFilter from "./setPokemonFilter/setPokemonFilter";
import { pokemonFilterVar } from "../../cache";

export const pokemonMutations = {
  setPokemonFilter: createSetPokemonFilter(pokemonFilterVar),
};
