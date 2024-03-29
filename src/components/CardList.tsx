import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../utils/getCharacters";
import Card from "./Card";
import "../assets/scss/card.scss";

interface CardListProps {
  name: string;
  id: any;
  species: string;
  image: string;
  gender: string;
  status: string;
}

const CardList = () => {
  const [page, setPage] = React.useState(1);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: </p>;
  }

  return (
    <>
      <div className="card-container">
        {data.characters.results.map((character: CardListProps) => {
          return (
            <section key={character.id} style={{ marginTop: "15px" }}>
              <Card
                name={character.name}
                id={character.id}
                species={character.species}
                image={character.image}
                gender={character.gender}
                status={character.status}
              />
            </section>
          );
        })}
      </div>
      <span className="btn-container">
        <button onClick={() => setPage(page - 1)} className="page-btn">
          Prev
        </button>
        <button onClick={() => setPage(page + 1)} className="page-btn">
          Next
        </button>
      </span>
    </>
  );
};

export default CardList;
