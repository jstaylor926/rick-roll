import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../utils/getCharacters';
import Card from './Card';


interface CardListProps {
    name: string;
    id: any;
    species: string;
    image: string;
    type: string;
    gender: string;
    status: string;
    created: string;
}



const CardList = () => {
    const [page, setPage] = React.useState(1);
    const { loading, error, data} = useQuery(GET_CHARACTERS, {variables: {page: 3}});
    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error: </p>
    }

    console.log(data.characters.info.next)
    return(
        <div>
            {data.characters.results.map((character: CardListProps) => {
                return(
                    <Card 
                    name={character.name}
                    id={character.id}
                    species={character.species}
                    image={character.image}
                    type={character.type}
                    gender={character.gender}
                    status={character.status}
                    created={character.created}
                   />
                )
            })}
     
        </div>
    );
}

export default CardList;