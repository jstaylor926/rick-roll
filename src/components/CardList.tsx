import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../utils/getCharacters';
import Card from './Card';






const CardList = () => {
    const { loading, error, data} = useQuery(GET_CHARACTERS);
    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error: </p>
    }

    return(
        <div>
            {data.characters.results.map((character: { name: string; id: any; species: string; image: string; }) => {
                return(
                    <Card 
                    name={character.name}
                    id={character.id}
                    species={character.species}
                    image={character.image}
                   />
                )
            })}
     
        </div>
    );
}

export default CardList;