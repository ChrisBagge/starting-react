import React, { useState } from "react";
import "./App.css";
import pokemon from "./pokemon.json";
import { Name, Base, IPokemon } from "./interfaces/pokemon";

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
        <button onClick={() => onSelect(pokemon)}>Select!</button>
      </td>
    </tr>
  );
}

function PokemonInfo({ name, base }: { name: Name; base: Base }) {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key as keyof Base]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function App() {
  const [filter, filterSet] = useState("");
  const [selectedItem, selectedItemSet] = useState<IPokemon | null>(null);

  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          columnGap: "1rem",
        }}
      >
        <div>
          <input value={filter} onChange={(evt) => filterSet(evt.target.value)} />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {/* {pokemon.map((pokemon) => ( */}
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon.id}
                    onSelect={(pokemon) => selectedItemSet(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}
export default App;
