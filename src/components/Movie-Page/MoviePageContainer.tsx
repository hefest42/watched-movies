import React, { useState, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";

import HomeButton from "../Movie-Page/HomeButton";
import PosterTitleInformation from "./PosterTitleInformation";
import DescriptionGenre from "./DescriptionGenre";
import Ratings from "./Ratings";
import DirectorsActors from "./DirectorsActors";
import MovieTrailer from "./MovieTrailer";
import MoviePageError from "./MoviePageError";

interface Movie {
    title: string;
    year: number;
    released: string;
    description: string;
    type: string;
    ratings: {
        source: string;
        value: number | null;
        score?: number | null;
        votes?: number | null;
        url?: string;
        id?: null;
    }[];
    certification: string;
    ageRating: number;
    runtime: number;
    poster: string;
    trailer: string;
    director: string[];
    actors: { id: string; name: string }[];
    genres: string[];
}

//https://rapidapi.com/linaspurinis/api/mdblist/
//https://rapidapi.com/goodmoviesaps/api/movie-details1/
const MoviePageContainer = () => {
    const location = useLocation();
    const params = useParams();
    const [movie, setMovie] = useState<Movie>();
    const [error, setError] = useState(false);

    useEffect(() => {
        const { id } = params;

        document.body.scrollTop = 0;

        const fetchMovie = async () => {
            try {
                setError(false);

                const response = await Promise.all([
                    fetch(`https://mdblist.p.rapidapi.com/?i=${id}`, {
                        method: "GET",
                        headers: {
                            "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                            "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
                        },
                    }),
                    fetch(`https://movie-details1.p.rapidapi.com/imdb_api/movie?id=${id}`, {
                        method: "GET",
                        headers: {
                            "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                            "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
                        },
                    }),
                ]);

                await Promise.all(
                    response.map((res) => {
                        if (!res.ok) throw new Error();
                    })
                );

                const [movieDetails, movieDirectorAndActor] = await Promise.all(response.map((res) => res.json()));

                const combinedMovie = {
                    title: movieDetails.title,
                    year: movieDetails.year,
                    released: movieDetails.released,
                    description: movieDetails.description,
                    type: movieDetails.type,
                    ratings: movieDetails.ratings,
                    certification: movieDetails.certification,
                    ageRating: movieDetails.age_rating,
                    runtime: movieDetails.runtime,
                    poster: movieDetails.poster,
                    trailer: movieDetails.trailer,
                    director: movieDirectorAndActor.director_names,
                    actors: movieDirectorAndActor.actors,
                    genres: movieDirectorAndActor.genres,
                };

                setMovie(combinedMovie);
            } catch (error) {
                console.error(error);
                setError(true);
            }
        };

        fetchMovie();
    }, [params]);

    return (
        <div className="relative w-full min-h-screen flex justify-center items-start">
            {error && <MoviePageError />}
            {movie && !error && (
                <>
                    <div className="w-full sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12">
                        <PosterTitleInformation
                            poster={movie.poster}
                            title={movie.title}
                            info={{
                                type: movie.type,
                                runtime: movie.runtime,
                                release: movie.released,
                                rating: `${movie.certification}-${movie.ageRating}`,
                            }}
                        />
                        <DescriptionGenre description={movie.description} genres={movie.genres} />
                        <Ratings ratings={movie.ratings} />
                        <MovieTrailer trailer={movie.trailer} />
                        <DirectorsActors director={movie.director} actors={movie.actors} />
                    </div>
                    <HomeButton />
                </>
            )}
        </div>
    );
};

export default MoviePageContainer;
