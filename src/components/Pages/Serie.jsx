import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { setInitialVotes } from "../../features/counter/counterSlice";
import { Counter } from "./Counter"
import './ContentesPages.css'

const API_KEY = "e814a776b659687282d7e7d257401a67";
const BASE_URL = "https://api.themoviedb.org/3";

export function Serie() {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSerie = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/tv/${id}`, {
                    params: {
                        api_key: API_KEY,
                        language: "fr-FR",
                    },
                });
                setSerie(response.data);
                setLoading(false);

                dispatch(setInitialVotes(response.data.vote_count));
            } catch (err) {
                console.error("Erreur lors du chargement des détails de la série :", err);
                setError("Impossible de charger les informations de la série.");
                setLoading(false);
            }
        };

        fetchSerie();
    }, [id, dispatch]);

    console.log(serie);


    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="box-series">
                <h1 className="title">{serie.name}</h1>
            <div className="box-image">
                <img className="serie-img" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} />
            </div>
            <div className="box-content">
                <p><span className="txt-bld">Titre : </span>{serie.name}</p>
                <p><span className="txt-bld">Note : </span><span className={serie.vote_average>=5 ? "green" : "red"}>{ Math.round(serie.vote_average * Math.pow(10, 1))/ Math.pow(10, 1)}/10</span></p>
                <p><span className="txt-bld">Réalisateurs : </span>{serie.created_by.map((created) => (<span>{created.name}{serie.created_by.length>1 ? "," : ""} </span>))}</p>
                <p><span className="txt-bld">Déscription : </span>{serie.overview}</p>
                <p><span className="txt-bld">Langue : </span>{serie.languages.map((language) => (<span>{language} {serie.languages.length>1 ? "," : ""} </span>))}</p>
                <p><span className="txt-bld">Genre : </span>{serie.genres.map((genre) => (<span>{genre.name}{serie.languages.length>1 ? "" : ","} </span>))}</p>
                <p><span className="txt-bld">Nomre de Vote : </span>{serie.vote_count}</p>
                <Counter />
            </div>
        </div>
    )
}