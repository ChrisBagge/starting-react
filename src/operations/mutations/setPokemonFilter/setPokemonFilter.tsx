import { PokemonFilter } from "../../../models/PokemonFilter";
import { ReactiveVar } from "@apollo/client";

export default (pokemonFilterVar: ReactiveVar<PokemonFilter>) => {
  return (filter: PokemonFilter) => {
    pokemonFilterVar(filter);
  };
};
