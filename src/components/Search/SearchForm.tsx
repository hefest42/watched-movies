import React from "react";

import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
    const searchHandler = (e: React.FormEvent) => {
        e.preventDefault();
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
                />
            </div>
            <button className="bg-yellow-400 text-black w-full h-10 mt-4 font-bold hover:bg-yellow-300">SEARCH</button>
        </form>
    );
};

export default SearchForm;
