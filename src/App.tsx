import React, { useEffect, useState } from "react";
import "./App.css";
import { Name, Base, IPokemon } from "./interfaces/pokemon";
import styled from "@emotion/styled";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./components/PokemonContext";

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
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState<IPokemon[]>([]);
  const [selectedItem, selectedItemSet] = useState<IPokemon | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemon,
        selectedItem,
        filterSet,
        pokemonSet,
        selectedItemSet,
      }}
    >
      <Container>
        <Title>Pokemon search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable filter={filter} pokemon={pokemon} selectedItemSet={selectedItemSet} />
          </div>
          {selectedItem && <PokemonInfo {...selectedItem} />}
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}
export default App;
