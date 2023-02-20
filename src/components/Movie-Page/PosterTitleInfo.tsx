import React from "react";

interface MovieProps {
    poster: string;
    title: string;
}

const PosterTitleInfo = ({ poster, title }: MovieProps) => {
    return <div className="">{<img src={poster} alt={`${title} poster`} />}</div>;
};

export default PosterTitleInfo;
