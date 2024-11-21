import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function MovieInfo() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const API_KEY = "065b298d1d4d73b7f9b69fd2f3eb974d";

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=fr&api_key=${API_KEY}`);
                setMovie(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        }

        fetchPost();
    } , [ id ])

    if (loading)
        return <p>Chargement en cours...</p>

    return(
    <>
        <h2>{movie.title} {movie.id}</h2>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
        <p>
            Date de sortie : {movie.release_date} | Note moyenne : {movie.vote_average} /10
        </p>
        <p>
            Résumé : {movie.overview}
        </p>
    </>
    )
}