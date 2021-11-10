import React from "react";
import { IPokemon } from "../interfaces/pokemon";

const initialState = {
  filter: "",
  pokemon: Array<IPokemon>(),
  selectedItem: {} as IPokemon,
};

type ACTIONTYPES =
  | { type: "SET_FILTER"; payload: string }
  | { type: "SET_POKEMON"; payload: IPokemon[] }
  | { type: "SET_SELECTED_ITEM"; payload: IPokemon };

interface IPokemonContext {
  state: typeof initialState;
  dispatch: React.Dispatch<ACTIONTYPES>;
}

const defaultState = {
  state: initialState,
  dispatch: () => {},
};

const PokemonContext = React.createContext<IPokemonContext>(defaultState);

export default PokemonContext;
