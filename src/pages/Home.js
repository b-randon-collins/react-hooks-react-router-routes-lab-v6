// src/pages/Home.js
import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard';
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data here and set it to state
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movies.map(movie => <MovieCard key={movie.id} title={movie.title} />)}
      </main>
    </>
  );
}

export default Home;
