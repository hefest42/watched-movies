import React, { useState, useEffect } from "react";

interface PosterTitleInformationProps {
    poster: string;
    title: string;
    info: {
        type: string;
        runtime: number;
        release: string;
        rating: string;
    };
}

const PosterTitleInformation = ({ poster, title, info }: PosterTitleInformationProps) => {
    const [movieInformation, setMovieInformation] = useState<string[]>([]);

    useEffect(() => {
        const { type, runtime, release, rating } = info;

        const movieType = `${type[0].toUpperCase()}${type.slice(1)}`;
        const movieRuntime = `${runtime}m`;

        const releaseDate = new Date(release);
        const formattedDate = new Intl.DateTimeFormat("eu-UK").format(releaseDate);

        setMovieInformation([movieType, formattedDate, movieRuntime, rating]);
    }, [info]);

    return (
        <>
            <img src={poster} alt={`movie poster`} />
            <div className="px-2 text-base sm:text-lg">{movieInformation.join(" - ")}</div>
            <h1 className="px-2 mt-4 text-3xl sm:text-4xl">{title}</h1>
        </>
    );
};

export default PosterTitleInformation;
