import { MovieDataFetcher } from "../Movie/MovieDataFetcher";

export function Films() {
    return (
        <>
            <h1>Liste des Films</h1>
            <MovieDataFetcher />
        </>
    );
}