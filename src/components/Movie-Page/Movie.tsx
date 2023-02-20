import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { EXAMPLE_MOVIE } from "../../store/MOVIES";

//https://rapidapi.com/linaspurinis/api/mdblist/

const Movie = () => {
    const location = useLocation();

    useEffect(() => {
        const { state } = location;

        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://mdblist.p.rapidapi.com/?i=${state}`, {
                    headers: {
                        "X-RapidAPI-Key": "a3d147fab7msh00956640f11a890p1c1f32jsn7faec2c28528",
                        "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
                    },
                });

                const data = await response.json();

                console.log(data);
            } catch (error) {}
        };

        console.log(state);
        // fetchMovie();
    }, []);

    return <div></div>;
};

export default Movie;
