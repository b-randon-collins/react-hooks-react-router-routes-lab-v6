// src/pages/Directors.js
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Simulate fetching directors data
    const fetchedDirectors = [
      { name: "Director 1", movies: ["Movie 1", "Movie 2"] },
      { name: "Director 2", movies: ["Movie 3", "Movie 4"] },
    ];
    setDirectors(fetchedDirectors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {directors.map(director => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
