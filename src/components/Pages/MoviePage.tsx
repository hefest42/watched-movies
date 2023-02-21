import React, { useState, useEffect } from "react";

import PosterTitleInformation from "../Movie-Page/PosterTitleInformation";
import DescriptionGenre from "../Movie-Page/DescriptionGenre";
import Ratings from "../Movie-Page/Ratings";

import { useLocation } from "react-router-dom";

import { EXAMPLE_MOVIE as movie } from "../../store/MOVIES";

//https://rapidapi.com/linaspurinis/api/mdblist/
//https://rapidapi.com/goodmoviesaps/api/movie-details1/
const MoviePage = () => {
    const location = useLocation();
    const [movieGenres, setMovieGenres] = useState<string[]>([]);

    useEffect(() => {
        const { id, genres } = location.state;

        setMovieGenres(genres);

        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://mdblist.p.rapidapi.com/?i=${id}`, {
                    headers: {
                        "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                        "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
                    },
                });

                const data = await response.json();

                console.log(data);
            } catch (error) {}
        };

        // fetchMovie();
    }, []);

    return (
        <div className="w-full min-h-screen flex justify-center items-start">
            <div className="w-full sm:w-11/12 md:w-9/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12">
                <PosterTitleInformation
                    poster={movie.poster}
                    title={movie.title}
                    info={{
                        type: movie.type,
                        runtime: movie.runtime,
                        release: movie.released,
                        rating: `${movie.certification}-${movie.age_rating}`,
                    }}
                />
                <DescriptionGenre description={movie.description} genres={movieGenres} />
                <Ratings title={movie.title} ratings={movie.ratings} />
            </div>
        </div>
    );
};

export default MoviePage;
