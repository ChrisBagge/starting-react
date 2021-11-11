import create from "zustand";
import { IPokemon } from "./interfaces/pokemon";

interface PokemonState {
  filter: string;
  pokemon: IPokemon[];
  selectedItem: IPokemon;
  setPokemon: (pokemon: IPokemon[]) => void;
  setFilter: (filter: string) => void;
  setSelectedItem: (selectedItem: IPokemon) => void;
}

const useStore = create<PokemonState>((set) => ({
  pokemon: Array<IPokemon>(),
  filter: "",
  selectedItem: {} as IPokemon,
  setPokemon: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
    })),
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
    })),
  setSelectedItem: (selectedItem) =>
    set((state) => ({
      ...state,
      selectedItem,
    })),
}));

fetch("http://localhost:3000/starting-react/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => useStore.setState((state) => ({ ...state, pokemon })));

export default useStore;
