import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters {
    characters(page: 1) {
      results {
        id
        name
        species
        image
      }
    }
  }
`;
