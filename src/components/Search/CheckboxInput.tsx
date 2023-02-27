import React from "react";

interface CheckboxInputProps {
    genre: string;
    addFiltersHandler: (filter: string) => void;
    availableGenres: string[];
}

const CheckboxInput = ({ genre, addFiltersHandler, availableGenres }: CheckboxInputProps) => {
    const isActive = availableGenres.includes(genre);

    return (
        <div key={genre} className={`mt-2 ${isActive ? "" : " line-through"}`}>
            <input
                type="checkbox"
                disabled={!isActive}
                name={genre}
                id={genre}
                onChange={() => addFiltersHandler(genre)}
            />
            <label className="ml-2" htmlFor={genre}>
                {genre}
            </label>
        </div>
    );
};

export default CheckboxInput;
