import React from "react";
import { Base } from "../interfaces/pokemon";
import store from "../store";
import { observer } from "mobx-react";

const PokemonInfo = () => {
  return store.selectedItem.name ? (
    <div>
      <h1>{store.selectedItem.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(store.selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{store.selectedItem.base[key as keyof Base]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default observer(PokemonInfo);
