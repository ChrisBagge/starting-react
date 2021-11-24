import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query GetAllPokemons {
    pokemons @client {
      id
      name {
        english
      }
      type
    }
  }
`;
