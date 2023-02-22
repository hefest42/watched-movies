import React, { useState, useEffect } from "react";

import PosterTitleInformation from "../Movie-Page/PosterTitleInformation";
import DescriptionGenre from "../Movie-Page/DescriptionGenre";
import Ratings from "../Movie-Page/Ratings";
import DirectorsActors from "../Movie-Page/DirectorsActors";

import { useLocation } from "react-router-dom";

import { EXAMPLE_MOVIE as movie, EXAMPLE_MOVIE_2 as movie2 } from "../../store/MOVIES";

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
    const [test, setTest] = useState<Movie>();
    const [movieGenres, setMovieGenres] = useState<""[]>([]);

    useEffect(() => {
        const { id, genres } = location.state;

        setMovieGenres(genres);

        const combinedMovie = {
            title: movie.title,
            year: movie.year,
            released: movie.released,
            description: movie.description,
            type: movie.type,
            ratings: movie.ratings,
            certification: movie.certification,
            ageRating: movie.age_rating,
            runtime: movie.runtime,
            poster: movie.poster,
            trailer: movie.trailer,
            director: movie2.director_names,
            actors: movie2.actors,
        };

        console.log(combinedMovie);

        setTest(combinedMovie);

        // const fetchMovie = async () => {
        //     try {
        //         const response = await fetch(`https://mdblist.p.rapidapi.com/?i=${id}`, {
        //             headers: {
        //                 "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
        //                 "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
        //             },
        //         });

        //         const data = await response.json();

        //         console.log(data);
        //     } catch (error) {}
        // };

        // fetchMovie();
    }, []);

    return (
        <div className="w-full min-h-screen flex justify-center items-start">
            {test && (
                <div className="w-full sm:w-11/12 md:w-9/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12">
                    <PosterTitleInformation
                        poster={test.poster}
                        title={test.title}
                        info={{
                            type: test.type,
                            runtime: test.runtime,
                            release: test.released,
                            rating: `${test.certification}-${test.ageRating}`,
                        }}
                    />
                    <DescriptionGenre description={test.description} genres={movieGenres} />
                    <Ratings title={test.title} ratings={test.ratings} />
                    <DirectorsActors director={test.director} actors={test.actors} />
                </div>
            )}
        </div>
    );
};

export default MoviePage;
