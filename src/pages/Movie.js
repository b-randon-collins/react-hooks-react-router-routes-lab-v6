// src/pages/Movie.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

// Mock function to simulate fetching movie data by ID
async function fetchMovieById(id) {
  // Simulating a delay for fetching data
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Returning a static movie object
  return {
    title: "Example Movie",
    time: "120 minutes",
    genres: ["Action", "Adventure"]
  };
}

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Call the mock function and set the result to state
    fetchMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
