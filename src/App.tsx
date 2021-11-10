import React, { useEffect, useReducer } from "react";
import "./App.css";
import { IPokemon } from "./interfaces/pokemon";
import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./components/PokemonContext";

const initialState = {
  filter: "",
  pokemon: Array<IPokemon>(),
  selectedItem: {} as IPokemon, 
};

type ACTIONTYPES =
  | { type: "SET_FILTER"; payload: string }
  | { type: "SET_POKEMON"; payload: IPokemon[] }
  | { type: "SET_SELECTED_ITEM"; payload: IPokemon };

function pokemonReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      throw new Error("No action");
  }
}

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1rem;
`;

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: "",
    pokemon: Array<IPokemon>(),
    selectedItem: {} as IPokemon,
  });

  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Container>
        <Title>Pokemon search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}
export default App;
