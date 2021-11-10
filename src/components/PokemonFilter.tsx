import React from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { IPokemon } from "../interfaces/pokemon";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;
interface RootState {
  filter: string;
  pokemon: IPokemon[];
  selectedItem: IPokemon;
}
const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);

  return (
    <Input
      value={filter}
      onChange={(evt) => dispatch({ type: "SET_FILTER", payload: evt.target.value })}
    />
  );
};

export default PokemonFilter;
