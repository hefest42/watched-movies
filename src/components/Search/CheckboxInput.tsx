import React from "react";

interface CheckboxInputProps {
    genre: string;
    addFiltersHandler: (filter: string) => void;
    availableGenres: string[];
}

const CheckboxInput = ({ genre, addFiltersHandler, availableGenres }: CheckboxInputProps) => {
    const isActive = availableGenres.includes(genre);

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
            <input type="checkbox" disabled={!isActive} name={genre} id={genre} onChange={() => addNewGenre(genre)} />
            <label className="ml-2" htmlFor={genre}>
                {genre}
            </label>
        </div>
    );
};

export default CheckboxInput;
