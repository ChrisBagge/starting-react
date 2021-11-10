import React, { useEffect, useReducer } from "react";
import "./App.css";
import { IPokemon } from "./interfaces/pokemon";
import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

interface RootState {
  filter: string;
  pokemon: IPokemon[];
  selectedItem: IPokemon;
}

const initialState = {
  filter: "",
  pokemon: Array<IPokemon>(),
  selectedItem: {} as IPokemon,
};

type ACTIONTYPES =
  | { type: "SET_FILTER"; payload: string }
  | { type: "SET_POKEMON"; payload: IPokemon[] }
  | { type: "SET_SELECTED_ITEM"; payload: IPokemon };

function pokemonReducer(
  state = {
    filter: "",
    pokemon: Array<IPokemon>(),
    selectedItem: {} as IPokemon,
  },
  action: ACTIONTYPES
) {
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
      return state;
  }
}

const store = createStore(pokemonReducer);

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
  const dispatch = useDispatch();
  const pokemon = useSelector((state: RootState) => state.pokemon);

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
  );
}
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
