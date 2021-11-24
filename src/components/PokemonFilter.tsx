import React from "react";
import styled from "@emotion/styled";
import { pokemonFilterVar } from "../cache";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  return <Input onChange={(evt) => pokemonFilterVar({ filter: evt.target.value })} />;
};

export default PokemonFilter;
