import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon {
    pokemon @client {
      id
      name {
        english
        japanese
        chinese
        french
      }
      type
      base {
        SpAttack
        SpDefense
        Attack
        Defense
        Speed
        HP
      }
    }
  }
`;
