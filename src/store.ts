import { action, makeObservable, observable, computed } from "mobx";
import { IPokemon } from "./interfaces/pokemon";

// interface IStore {
//   filter: string;
//   pokemon: IPokemon[];
//   selectedItem: IPokemon;
// }

class Store {
  pokemon = Array<IPokemon>();
  filter = "";
  selectedItem = {} as IPokemon;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedItem: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  setPokemon(pokemon: IPokemon[]) {
    this.pokemon = pokemon;
  }

  setFilter(filter: string) {
    this.filter = filter;
  }
  setSelectedItem(selectedItem: IPokemon) {
    this.selectedItem = selectedItem;
  }
}

const store = new Store();

fetch("http://localhost:3000/starting-react/pokemon.json")
  .then((resp) => resp.json())
  .then(action((pokemon) => store.setPokemon(pokemon)));

export default store;
