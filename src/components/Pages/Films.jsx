import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "065b298d1d4d73b7f9b69fd2f3eb974d";

export  function Films() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day`, {
                    params: {
                        api_key: API_KEY,
                        language: "fr-FR",
                        page: 1,
                    },
                });
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error("Erreur du chargement :", error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <p>Chargement des données...</p>;
    }

    return (
        <div>
            <h1 className="title">List de Films Populaires :</h1>
            <div className="box-all-series">
                {movies.map((movie) => (
                    <Link to={`/film/${movie.id}`} className="box-serie" key={movie.id}>
                        <img className="box-serie-img"
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="box-serie-content">
                            <h2 className="title-series">{movie.title}</h2>
                            <p>Note : {movie.vote_average}/10</p>
                            <p>Nombre de Vote : {movie.vote_count}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}