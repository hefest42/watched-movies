import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";

interface SearchFormProps {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    setDisplaySearchResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchForm = ({ setSearchInput, setDisplaySearchResults }: SearchFormProps) => {
    const [inputValue, setInputValue] = useState<string>("");

    const searchHandler = (e: React.FormEvent) => {
        e.preventDefault();

        setSearchInput(inputValue);
        setDisplaySearchResults(true);
        setInputValue("");
    };
    return (
        <form className="mt-4 flex flex-col" onSubmit={searchHandler}>
            <div className="bg-white h-8 flex justify-center items-center">
                <BsSearch className="text-black w-6 h-6 ml-2" />
                <input
                    className="bg-transparent text-black w-full h-full ml-2 outline-none border-none"
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search For a Movie"
                    autoComplete="off"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
            </div>
            <button className="bg-yellow-400 text-black w-full h-10 mt-4 font-bold hover:bg-yellow-300">SEARCH</button>
        </form>
    );
};

export default SearchForm;
