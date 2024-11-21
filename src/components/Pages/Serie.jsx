import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

const API_KEY = "e814a776b659687282d7e7d257401a67";
const BASE_URL = "https://api.themoviedb.org/3";

export function Serie() {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            } catch (err) {
                console.error("Erreur lors du chargement des détails de la série :", err);
                setError("Impossible de charger les informations de la série.");
                setLoading(false);
            }
        };

        fetchSerie();
    }, [id]);

    // console.log(serie);


    if (loading) return <p>Chargement en cours...</p>;
    if (error) return <p>{error}</p>;

    return (
        <p>{serie.name}</p>
    )
}