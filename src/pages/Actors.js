// src/pages/Actors.js
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Simulate fetching actors data
    const fetchedActors = [
      { name: "Actor 1", movies: ["Movie 1", "Movie 2"] },
      { name: "Actor 2", movies: ["Movie 3", "Movie 4"] },
    ];
    setActors(fetchedActors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {actors.map(actor => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
