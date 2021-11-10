import React from "react";
import { IPokemon } from "../interfaces/pokemon";

interface IPokemonContext {
  filter: string;
  pokemon: IPokemon[];
  selectedItem: IPokemon | null;
  filterSet: (filter: string) => void;
  pokemonSet: (pokemon: IPokemon[]) => void;
  selectedItemSet: (selectedItem: IPokemon | null) => void;
}

const defaultState = {
  filter: "",
  pokemon: Array<IPokemon>(),
  selectedItem: {} as IPokemon,
  filterSet: () => {},
  pokemonSet: () => {},
  selectedItemSet: () => {},
};

const PokemonContext = React.createContext<IPokemonContext>(defaultState);

export default PokemonContext;
