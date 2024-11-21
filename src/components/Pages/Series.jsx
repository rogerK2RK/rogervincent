import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ListesPages.css'

const API_KEY = "e814a776b659687282d7e7d257401a67";
const BASE_URL = "https://api.themoviedb.org/3";

export  function Series() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/tv/popular`, {
                    params: {
                        api_key: API_KEY,
                        language: "fr-FR",
                        page: 1, 
                    },
                });
                setSeries(response.data.results); 
                setLoading(false);
            } catch (error) {
                console.error("Erreur lors du chargement des séries :", error);
                setLoading(false);
            }
        };

        fetchSeries();
    }, []);

    // console.log(series);


    if (loading) return <p>Chargement en cours...</p>;

    return (
        <div>
            <h1 className="title">Séries Populaires</h1>
            <div className="box-all-series">
                {series.map((serie) => (
                    <Link to={`/serie/${serie.id}`} className="box-serie" key={serie.id}>
                        <img className="box-serie-img"
                            src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                            alt={serie.name}
                        />
                        <div className="box-serie-content">
                            <h2 className="title-series">{serie.name}</h2>
                            <p>Note : {serie.vote_average}/10</p>
                            <p>Nombre de Vote : {serie.vote_count}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}