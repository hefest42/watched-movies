import React from "react";

import MoviePoster from "./MoviePoster";

interface AllMoviesProps {
    movies: { id: string; name: string; genre: string[]; poster: string }[];
}

const AllMovies = ({ movies }: AllMoviesProps) => {
    return (
        <div className="w-full min-h-screen grid place-items-center items-start grid-cols-2 md:w-[70%] lg:gap-4 xl:grid-cols-3 2xl:grid-cols-5 xl:w-3/4 2xl:w-[80%]">
            {movies.map((movie) => (
                <MoviePoster key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default AllMovies;
