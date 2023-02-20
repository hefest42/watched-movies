import React, { useState, useEffect } from "react";

import PosterTitleInfo from "../Movie-Page/PosterTitleInfo";
import GenreDescriptionRating from "../Movie-Page/GenreDescriptionRating";

import { useLocation } from "react-router-dom";

import { EXAMPLE_MOVIE as movie } from "../../store/MOVIES";

//https://rapidapi.com/linaspurinis/api/mdblist/
const MoviePage = () => {
    const location = useLocation();
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        const { id, genre } = location.state;

        setGenres(genres);

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
        <div>
            <PosterTitleInfo poster={movie.poster} title={movie.title} />
            <GenreDescriptionRating genre={genres} description={movie.description} />
        </div>
    );
};

export default MoviePage;
