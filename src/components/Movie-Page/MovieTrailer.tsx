import React, { useEffect, useState } from "react";

interface MovieTrailerProps {
    trailer: string;
}

const MovieTrailer = ({ trailer }: MovieTrailerProps) => {
    const [trailerId, setTrailerId] = useState<string>("");

    useEffect(() => {
        setTrailerId(trailer.split("=")[1]);
    }, []);

    return (
        <iframe
            src={`https://www.youtube.com/embed/${trailerId}`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    );
};

export default MovieTrailer;
