import React, { useEffect, useState } from "react";

interface MovieTrailerProps {
    trailer: string;
}

const MovieTrailer = ({ trailer }: MovieTrailerProps) => {
    const [trailerId, setTrailerId] = useState<string>("");

    useEffect(() => {
        setTrailerId(trailer.split("=")[1]);
    }, [trailer]);

    return (
        <iframe
            className="my-6"
            src={`https://www.youtube.com/embed/${trailerId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
};

export default MovieTrailer;
