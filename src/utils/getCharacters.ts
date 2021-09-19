import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        pages
        next
      }
      results {
        id
        name
        species
        image
        gender
        status
      }
    }
  }
`;
