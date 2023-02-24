import React, { useState } from "react";

import { BiChevronsDown } from "react-icons/bi";

interface DirectorsActorsProps {
    director: string[];
    actors: { id: string; name: string }[];
}

const DirectorsActors = ({ director, actors }: DirectorsActorsProps) => {
    const [showActors, setShowActors] = useState(true);

    console.log(director);

    return (
        <div className="py-4 px-2">
            <div className="w-full py-4 border-b border-yellow-400 flex">
                Director:
                {director.map((dir) => (
                    <p key={dir} className="ml-4">
                        {dir}
                    </p>
                ))}
            </div>
            <button
                className="w-full py-4 mt-4 border-b border-yellow-400 flex justify-between items-center"
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

            {/* dont forget to remove */}
            <div className="w-full h-96"></div>
        </div>
    );
};

export default DirectorsActors;
