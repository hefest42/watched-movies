import React, { useState } from "react";

import { Link } from "react-router-dom";

// not sure if all this is neccessary
interface MoviePosterProps {
    movie: {
        id: string;
        name: string;
        genre: string[];
        poster: string;
    };
}

//TODO lift the state. And make it so that loading spinner is on top of image, while image is loading and then after its done loading(onLoad) hide spinner and show image(visiablity)
const MoviePoster = ({ movie }: MoviePosterProps) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <Link to={`movie/${movie.id}`} state={movie.id} className={`w-full h-[32rem] p-4`}>
                <img
                    loading="lazy"
                    src={movie.poster}
                    alt="movie poster"
                    className="movie w-full h-[85%] object-cover"
                />
                <h1 className="text-2xl text-center">{movie.name}</h1>
            </Link>
        </>
    );
};

export default MoviePoster;

{
    /* <div className={`${loading ? "block" : "hidden"} w-full h-[15rem]`}></div */
}
