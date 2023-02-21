import React, { useEffect, useState } from "react";

interface MovieProps {
    poster: string;
    title: string;
    info: any[];
}

const PosterTitleInfo = ({ poster, title, info }: MovieProps) => {
    const [movieInformatiom, setMovieInformation] = useState<string[]>([]);

    useEffect(() => {
        const [type, releaseDate, runtime, certification, ageRating] = info;
        const date = new Date(releaseDate);
        const formatedDate = new Intl.DateTimeFormat("en-UK").format(date);
        const movieType = `${type[0].toUpperCase()}${type.slice(1)}`;
        const esrb = `${certification}-${ageRating}`;
        setMovieInformation([movieType, formatedDate, runtime, esrb]);
    }, [info]);

    return (
        <div className="">
            <img src={poster} alt={`${title} poster`} />
            <div>{movieInformatiom.join(" - ")}</div>
            <h1>{title}</h1>
        </div>
    );
};

export default PosterTitleInfo;
