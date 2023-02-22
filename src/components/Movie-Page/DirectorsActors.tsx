import React, { useEffect, useRef, useState } from "react";

import { BiChevronsDown } from "react-icons/bi";

interface DirectorsActorsProps {
    director: string[];
    actors: { id: string; name: string }[];
}

const DirectorsActors = ({ director, actors }: DirectorsActorsProps) => {
    const [showActors, setShowActors] = useState(true);

    return (
        <div className="py-4 px-2">
            <div>
                {director.map((dir) => (
                    <p>{director}</p>
                ))}
            </div>
            <div className={`accordion grid grid-cols-2 mt-4 overflow-hidden ${showActors ? " max-h-96" : "max-h-0 "}`}>
                {actors.map((actor) => (
                    <p key={actor.id} className="mt-2">
                        {actor.name}
                    </p>
                ))}
            </div>
            <button
                className="w-full mt-4 bg-yellow-400 text-black flex justify-between items-center"
                onClick={() => setShowActors((state) => !state)}
            >
                <div>ACTORS</div>
                <BiChevronsDown />
            </button>
            <div className="w-full h-96"></div>
        </div>
    );
};

export default DirectorsActors;
