import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function MovieDataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "065b298d1d4d73b7f9b69fd2f3eb974d";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=fr&api_key=${API_KEY}`);
        setData(response.data.results);
        setLoading(false);
      } catch (err) {
        console.error(err)
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  return (
    <>
        {data.map((movie) => (
          <Link key={movie.id} to={`/movie_info/${movie.id}`}>
            <h2>{movie.title} {movie.id}</h2>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          </Link>
        ))}
    </>
  );
}