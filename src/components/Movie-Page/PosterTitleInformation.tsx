import React from "react";

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
    return (
        <>
            <img src={poster} alt={`movie poster`} />
            <div></div>
            <h1>{title}</h1>
        </>
    );
};

export default PosterTitleInformation;
