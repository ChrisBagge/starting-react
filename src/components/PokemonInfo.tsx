import React from "react";
import { Base } from "../interfaces/pokemon";
import { IPokemon } from "../interfaces/pokemon";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../operations/queries/getPokemon";

const PokemonInfo = () => {
  const pokemonQueryResult = useQuery(GET_POKEMON);
  const selectedPokemon: IPokemon = pokemonQueryResult.data.pokemon;

  return selectedPokemon.id ? (
    <div>
      <h1>{selectedPokemon.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key === "SpAttack" ? "Sp. Attack" : key}</td>
              <td>{selectedPokemon.base[key as keyof Base]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
