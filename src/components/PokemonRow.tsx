import React from "react";
import { IPokemon } from "../interfaces/pokemon";
import { Button } from "@mui/material";

function PokemonRow({
  pokemon,
  onSelect,
}: {
  pokemon: IPokemon;
  onSelect: (pokemon: IPokemon) => void;
}) {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="contained" color="primary" onClick={() => onSelect(pokemon)}>
          More information
        </Button>
      </td>
    </tr>
  );
}

export default PokemonRow;
