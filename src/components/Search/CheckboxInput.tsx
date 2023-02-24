import React from "react";

interface CheckboxInputProps {
    genre: string;
    addFiltersHandler: (filter: string) => void;
}

const CheckboxInput = ({ genre, addFiltersHandler }: CheckboxInputProps) => {
    return (
        <div key={genre} className="mt-2">
            <input type="checkbox" name={genre} id={genre} onChange={() => addFiltersHandler(genre)} />
            <label className="ml-2" htmlFor={genre}>
                {genre}
            </label>
        </div>
    );
};

export default CheckboxInput;
