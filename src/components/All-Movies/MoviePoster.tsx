import React from "react";

import { Link } from "react-router-dom";

// not sure if all this is neccessary
interface MoviePosterProps {
    movie: {
        id: string;
        name: string;
        releaseYear: string;
        runtime: string;
        summary: string;
        director: string[];
        writers: string[];
        actors: string[];
        genre: string[];
        links: {
            imdb: string;
            rottenTomatoes: string;
            poster: string;
        };
    };
}

const MoviePoster = ({ movie }: MoviePosterProps) => {
    return (
        <Link to="movie/1" className="w-full h-full p-2 border-[1px] border-black bg-yellow-400">
            <img
                loading="lazy"
                src={movie.links.poster}
                alt="movie poster"
                className="movie w-full h-auto object-cover"
            />
        </Link>
    );
};

export default MoviePoster;
