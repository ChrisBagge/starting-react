import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { IPokemon, Pokemons } from "./interfaces/pokemon";
import { PokemonFilter } from "./models/PokemonFilter";
import * as PokemonData from "./pokemon.json";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          read() {
            return pokemonsVar();
          },
        },
        pokemonFilter: {
          read() {
            return pokemonFilterVar();
          },
        },
        pokemon: {
          read() {
            return pokemonVar();
          },
        },
      },
    },
  },
});

export const pokemonFilterVar: ReactiveVar<PokemonFilter> = makeVar<PokemonFilter>({ filter: "" });

export const pokemonVar: ReactiveVar<IPokemon> = makeVar<IPokemon>({
  base: { SpAttack: 0, SpDefense: 0, Attack: 0, Defense: 0, Speed: 0, HP: 0 },
  id: 0,
  name: { english: "", japanese: "", chinese: "", french: "" },
  type: [],
});

/*const pokemonsInitialValue: Pokemons = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
      japanese: "フシギダネ",
      chinese: "妙蛙种子",
      french: "Bulbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpAttack: 65,
      SpDefense: 65,
      Speed: 45,
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
      japanese: "フシギソウ",
      chinese: "妙蛙草",
      french: "Herbizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      SpAttack: 80,
      SpDefense: 80,
      Speed: 60,
    },
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
      japanese: "フシギバナ",
      chinese: "妙蛙花",
      french: "Florizarre",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      SpAttack: 100,
      SpDefense: 100,
      Speed: 80,
    },
  },
];*/

export const pokemonsVar: ReactiveVar<Pokemons> = makeVar<Pokemons>([]);
