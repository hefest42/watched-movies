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
            <div className={`relative w-full h-[31rem] px-4`}>
                <div
                    className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${
                        loading ? "visible" : "invisible"
                    }`}
                >
                    LOADING...
                </div>
                <Link
                    to={`movie/${movie.id}`}
                    state={movie.id}
                    className={`w-full h-[31rem] px-4 ${loading ? "invisible" : "visible"}`}
                >
                    <img
                        loading="lazy"
                        src={movie.poster}
                        onLoad={() => setLoading(false)}
                        alt="movie poster"
                        className="movie w-full h-[85%] object-cover"
                    />
                    <h1 className="text-2xl text-center mt-2">{movie.name}</h1>
                </Link>
            </div>
        </>
    );
};

export default MoviePoster;

{
    /* <div className={`${loading ? "block" : "hidden"} w-full h-[15rem]`}></div */
}
