import React from "react";

import MoviePoster from "./MoviePoster";

import { movieList } from "../../store/MOVIES";

//TODO seperate movie into its own component
const AllMovies = () => {
    return (
        <div className="w-full min-h-screen bg-slate-500 grid place-items-center items-start gap-4 grid-cols-2 md:grid-cols-3 md:w-[70%] xl:grid-cols-4 2xl:grid-cols-5 xl:w-3/4 2xl:w-[80%]">
            {movieList.map((movie) => (
                <MoviePoster key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default AllMovies;
