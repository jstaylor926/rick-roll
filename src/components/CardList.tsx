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
           <Card 
            name={data.characters.results[0].name}
            id={data.characters.results[0].id}
            species={data.characters.results[0].species}
            image={data.characters.results[0].image}
           />
        </div>
    );
}

export default CardList;