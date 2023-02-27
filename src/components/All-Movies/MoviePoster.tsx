import React, { useState } from "react";

import { Link } from "react-router-dom";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
            <div
                className={`relative w-full px-2 h-[27rem] sm:h-[35rem] lg:h-[40rem] lg:px-4 xl:h-[32rem] 2xl:h-[28rem] `}
            >
                <div
                    className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${
                        loading ? "visible" : "invisible"
                    }`}
                >
                    <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
                </div>
                <Link
                    to={`movie/${movie.id}`}
                    state={{
                        id: movie.id,
                        genres: movie.genre,
                    }}
                    className={`w-full h-[31rem] px-4 ${loading ? "invisible" : "visible"}`}
                >
                    <img
                        loading="lazy"
                        src={movie.poster}
                        onLoad={() => setLoading(false)}
                        alt="movie poster"
                        className="movie w-full h-[85%] aspect-auto"
                    />
                    <h1 className="text-base text-center mt-2">{movie.name}</h1>
                </Link>
            </div>
        </>
    );
};

export default MoviePoster;

{
    /* <div className={`${loading ? "block" : "hidden"} w-full h-[15rem]`}></div */
}
