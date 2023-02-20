import React, { useEffect } from "react";

interface MovieProps {
    poster: string;
    title: string;
    info: (string | number)[];
}

const PosterTitleInfo = ({ poster, title, info }: MovieProps) => {
    useEffect(() => {}, []);

    return (
        <div className="">
            <img src={poster} alt={`${title} poster`} />
            <h1>{title}</h1>
            <div>
                {info.map((info) => (
                    <div>{info}</div>
                ))}
            </div>
        </div>
    );
};

export default PosterTitleInfo;
