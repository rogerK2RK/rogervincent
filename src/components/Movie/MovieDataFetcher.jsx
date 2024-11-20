import { useState, useEffect } from "react";
import axios from "axios";

export function MovieDataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = "Lord of the ring";
  const API_KEY = "065b298d1d4d73b7f9b69fd2f3eb974d";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
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
    <div>
      <h1>Liste des Films :</h1>
      <ul>
        {data.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          </div>
        ))}
      </ul>
    </div>
  );
}