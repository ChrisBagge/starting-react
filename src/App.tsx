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
const defaultPokemon: IPokemon = {
  base: { "Sp. Attack": 0, "Sp. Defense": 0, Attack: 0, Defense: 0, Speed: 0, HP: 0 },
  id: 0,
  name: { english: "", japanese: "", chinese: "", french: "" },
  type: [],
};
function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState<IPokemon[]>([]);
  const [selectedItem, selectedItemSet] = useState<IPokemon /* | null*/>(defaultPokemon);

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
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}
export default App;
