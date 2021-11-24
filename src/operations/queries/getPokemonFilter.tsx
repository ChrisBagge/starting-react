import { gql } from "@apollo/client";

export const GET_POKEMON_FILTER = gql`
  query GetPokemonFilter {
    pokemonFilter @client {
      filter
    }
  }
`;
