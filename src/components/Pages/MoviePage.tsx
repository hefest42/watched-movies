import React, { useState, useEffect, lazy, Suspense } from "react";

import { useLocation, useParams } from "react-router-dom";

import HomeButton from "../Movie-Page/HomeButton";
import MoviePageLoading from "../Movie-Page/MoviePageLoading";
const PosterTitleInformation = lazy(() => import("../Movie-Page/PosterTitleInformation"));
const DescriptionGenre = lazy(() => import("../Movie-Page/DescriptionGenre"));
const Ratings = lazy(() => import("../Movie-Page/Ratings"));
const DirectorsActors = lazy(() => import("../Movie-Page/DirectorsActors"));
const MovieTrailer = lazy(() => import("../Movie-Page/MovieTrailer"));

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
}

//https://rapidapi.com/linaspurinis/api/mdblist/
//https://rapidapi.com/goodmoviesaps/api/movie-details1/
const MoviePage = () => {
    const location = useLocation();
    const params = useParams();
    const [movie, setMovie] = useState<Movie>();
    const [movieGenres, setMovieGenres] = useState<string[]>([]);

    useEffect(() => {
        const { genres } = location.state;
        const { id } = params;

        setMovieGenres(genres);

        const fetchMovie = async () => {
            try {
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
                };

                setMovie(combinedMovie);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovie();
    }, []);

    return (
        <div className="relative w-full min-h-screen flex justify-center items-start">
            <Suspense fallback={<MoviePageLoading />}>
                {movie && (
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
                        <DescriptionGenre description={movie.description} genres={movieGenres} />
                        <Ratings title={movie.title} ratings={movie.ratings} />
                        <MovieTrailer trailer={movie.trailer} />
                        <DirectorsActors director={movie.director} actors={movie.actors} />
                    </div>
                )}
                <HomeButton />
            </Suspense>
        </div>
    );
};

export default MoviePage;
