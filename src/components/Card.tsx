import * as React from 'react';
import '../assets/scss/card.scss';

type CardProps = {
    name: string;
    id: any;
    species: string;
    image: string;
    type: string;
    gender: string;
    status: string;
    created: string;
}

const Card = ({name, id, species, image, type, gender, status, created}: CardProps) => {
    return(
        <div className="card" id={id}>
            <h2>{name}</h2>
            <section className="card-img">
                <img src={image} alt="" />
            </section>
            <div className="card-bio">
                <h4>Bio</h4>
                <section>
                <span><p>Name: {name}</p></span>
                <span><p>Species: {species}</p></span>
                <span><p>Type: {type}</p></span>
                </section>
                <section>
                <span><p>Gender: {gender}</p></span>
                <span><p>Status: {status}</p></span>
                <span><p>Created: {created}</p></span>
                </section>
            </div>
        </div>
    )
}

export default Card;