import * as React from "react";
import "../assets/scss/card.scss";

type CardProps = {
  name: string;
  id: any;
  species: string;
  image: string;
  gender: string;
  status: string;
};

const Card = ({ name, id, species, image, gender, status }: CardProps) => {
  return (
    <div className="card" id={id}>
      <img src={image} alt="" className="card-img" />
      <div className="card-bio">
        <h4>Bio</h4>

        <span>
          <p>Name: {name}</p>
        </span>
        <span>
          <p>Species: {species}</p>
        </span>

        <span>
          <p>Gender: {gender}</p>
        </span>
        <span>
          <p>Status: {status}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
