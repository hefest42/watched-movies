import React, { useState } from "react";

interface DirectorsActorsProps {
    director: string[];
    actors: { id: string; name: string }[];
}

const DirectorsActors = ({ director, actors }: DirectorsActorsProps) => {
    const [showActors, setShowActors] = useState(false);

    return (
        <div>
            <div
                className={`grid grid-cols-2 px-2 mt-4 overflow-hidden transition ${
                    showActors ? " max-h-full" : "max-h-16 "
                }`}
            >
                {actors.map((actor) => (
                    <p key={actor.id} className="mt-2">
                        {actor.name}
                    </p>
                ))}
            </div>
            <button className="mt-4 px-2 bg-yellow-400 text-black" onClick={() => setShowActors((state) => !state)}>
                ACTORS
            </button>
        </div>
    );
};

export default DirectorsActors;
