import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../utils/getCharacters';
import Card from './Card';
import '../assets/scss/card.scss';

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

    const { loading, error, data} = useQuery(GET_CHARACTERS, {variables: {page: page}});
    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error: </p>
    }

    return(
        <div  className="card-container">
            <button onClick={() => setPage(page + 1)} className="page-btn">Next</button>
            {data.characters.results.map((character: CardListProps) => {
                return(
            <section key={character.id} style={{marginTop: '15px'}}>

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
    </section>

                )
            })}
            <button onClick={() => setPage(page + 1)} className="page-btn">Next</button>

        </div>
    );
}

export default CardList;