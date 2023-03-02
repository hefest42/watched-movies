import React, { useEffect, useState } from "react";

interface CheckboxInputProps {
    genre: string;
    filters: string[];
    addFiltersHandler: (filter: string) => void;
    availableGenres: string[];
}

const CheckboxInput = ({ genre, filters, addFiltersHandler, availableGenres }: CheckboxInputProps) => {
    const [isInputChecked, setIsInputChekced] = useState<undefined | boolean>(undefined);
    const isActive = availableGenres.includes(genre);

    useEffect(() => {
        setIsInputChekced(filters.includes(genre));

        console.log(filters);
    }, [filters]);

    const addNewGenre = (genre: string) => {
        const test = sessionStorage.getItem("genres");

        let sessionGenres: string[] = test ? JSON.parse(test) : [];

        if (!sessionGenres) {
            sessionStorage.setItem("genres", JSON.stringify([genre]));
        }

        if (sessionGenres) {
            const newSessionGenres = sessionGenres.includes(genre)
                ? sessionGenres.filter((gen) => gen !== genre)
                : [...sessionGenres, genre];
            const stringifySessionGenres = JSON.stringify(newSessionGenres);
            sessionStorage.setItem("genres", stringifySessionGenres);
        }

        addFiltersHandler(genre);
    };

    return (
        <div key={genre} className={`mt-2 ${isActive ? "" : "line-through"}`}>
            <input
                type="checkbox"
                disabled={!isActive}
                name={genre}
                id={genre}
                defaultChecked={isInputChecked}
                onClick={() => addNewGenre(genre)}
            />
            <label className="ml-2" htmlFor={genre}>
                {genre}
            </label>
        </div>
    );
};

export default CheckboxInput;
