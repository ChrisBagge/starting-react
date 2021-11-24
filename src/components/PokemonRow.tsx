import React from "react";
import { IPokemon } from "../interfaces/pokemon";
import { Button } from "@mui/material";
import { pokemonVar } from "../cache";

function PokemonRow({ pokemon }: { pokemon: IPokemon }) {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            pokemonVar(pokemon);
          }}
        >
          More information
        </Button>
      </td>
    </tr>
  );
}

export default PokemonRow;
