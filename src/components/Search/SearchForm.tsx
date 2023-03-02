import React, { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { movieList } from "../../store/MOVIES";

interface SearchFormProps {
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = ({ searchInput, setSearchInput }: SearchFormProps) => {
    const searchHandler = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className="mt-4 flex flex-col" onSubmit={searchHandler}>
            <div className="bg-white h-8 flex justify-center items-center border-slate-800 border-2">
                <BsSearch className="text-black w-6 h-6 ml-2" />
                <input
                    className="bg-transparent text-black w-full h-full ml-2 outline-none "
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search For a Movie"
                    autoComplete="off"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                />
            </div>
            <button className="bg-yellow-400 text-black w-full h-10 mt-4 font-bold hover:bg-yellow-300">SEARCH</button>
        </form>
    );
};

export default SearchForm;
