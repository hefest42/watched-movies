import React, { useEffect, useRef, useState } from "react";

import { BiChevronsDown } from "react-icons/bi";

interface DirectorsActorsProps {
    director: string[];
    actors: { id: string; name: string }[];
    trailer: string;
}

const DirectorsActors = ({ director, actors, trailer }: DirectorsActorsProps) => {
    const [showActors, setShowActors] = useState(true);

    return (
        <div className="py-4 px-2">
            <div className="w-full py-4 border-y border-yellow-400 flex">
                Director:
                {director.map((dir) => (
                    <p key={dir} className="ml-4">
                        {director}
                    </p>
                ))}
            </div>
            <button
                className="w-full py-4 mt-4 border-y border-yellow-400 flex justify-between items-center"
                onClick={() => setShowActors((state) => !state)}
            >
                <div>ACTORS</div>
                <BiChevronsDown className={`transition-transform ${showActors ? "rotate-180" : ""}`} />
            </button>
            <div className={`accordion grid grid-cols-2 mt-4 overflow-hidden ${showActors ? " max-h-96" : "max-h-0 "}`}>
                {actors.map((actor) => (
                    <p key={actor.id} className="mt-2">
                        {actor.name}
                    </p>
                ))}
            </div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WKuZJjPSLXQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <div className="w-full h-96"></div>
        </div>
    );
};

export default DirectorsActors;
