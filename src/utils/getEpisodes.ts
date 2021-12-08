import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
    query Characters {
        character(id: 1){
            id
            name
        }
        charactersByIds(ids: 1) {
            episode {
                name
                air_date
                episode
            }
        }
    }
`;
