import * as React from 'react';
import '../assets/scss/card.scss';

type CardProps = {
    name: string;
    id: any;
    species: string;
    image: string;
}

const Card = ({name, id, species, image}: CardProps) => {
    return(
        <div className="card" id={id}>
            <h1>Name: {name}</h1>
            <section className="card-img">
                <img src={image} alt="" />
            </section>
            <div className="card-bio">
                <span><p>{species}</p></span>
                
            </div>
        </div>
    )
}

export default Card;