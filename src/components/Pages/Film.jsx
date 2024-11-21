import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import { setInitialVotes } from "../../features/counter/counterSlice";
import { Counter } from "./Counter"
import './ContentesPages.css'

const API_KEY = "e814a776b659687282d7e7d257401a67";

export function Film() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSerie = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: API_KEY,
                        language: "fr-FR",
                    },
                });
                setMovie(response.data);
                setLoading(false);

                dispatch(setInitialVotes(response.data.vote_count));
            } catch (error) {
                console.error("Erreur lors du chargement :", error);
                setError("Impossible de charger les informations de la série.");
                setLoading(false);
            }
        };

        fetchSerie();
    }, [id, dispatch]);

    console.log(movie);


    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="box-series">
                <h1 className="title">{movie.title}</h1>
            <div className="box-image">
                <img className="serie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="box-content">
                <p><span className="txt-bld">Titre : </span>{movie.title}</p>
                <p><span className="txt-bld">Note : </span><span className={movie.vote_average>=5 ? "green" : "red"}>{ Math.round(movie.vote_average * Math.pow(10, 1))/ Math.pow(10, 1)}/10</span></p>
                <p><span className="txt-bld">Réalisateurs : </span>{movie.production_companies.map((companie) => (<span key={companie.id}>{companie.name}{movie.production_companies.length>1 ? "," : ""} </span>))}</p>
                <p><span className="txt-bld">Déscription : </span>{movie.overview}</p>
                <p><span className="txt-bld">Langue : </span>{movie.spoken_languages.map((language) => (<span key={language.iso_639_1}>{language.name} {movie.spoken_languages.length>1 ? "," : ""} </span>))}</p>
                <p><span className="txt-bld">Genre : </span>{movie.genres.map((genre) => (<span key={genre.id}>{genre.name}{movie.genres.length>1 ? "" : ","} </span>))}</p>
                <p><span className="txt-bld">Nomre de Vote : </span>{movie.vote_count}</p>
                <Counter />
            </div>
        </div>
    )
}