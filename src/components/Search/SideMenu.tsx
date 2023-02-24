import React, { useEffect, useMemo, useState } from "react";

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import CheckboxInput from "./CheckboxInput";
import ThemeToggle from "./ThemeToggle";

import { AiOutlineClose } from "react-icons/ai";

import { movieList } from "../../store/MOVIES";

interface SideMenuProps {
    showSideMenu: boolean;
    setShowSideMenu: (showSideMenu: boolean) => void;
    addFilters: (filter: string) => void;
}

const SideMenu = ({ showSideMenu, setShowSideMenu, addFilters }: SideMenuProps) => {
    const [searchedMovies, setSearchedMovies] = useState<any[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const movieInputs = useMemo(() => [...new Set(movieList.map((movie) => movie.genre).flat())], [movieList]);

    const addFiltersHandler = (filter: string) => addFilters(filter);

    useEffect(() => {
        if (searchInput === "") return;

        const searchResults = movieList.filter((movie) => movie.name.toLowerCase().includes(searchInput.toLowerCase()));

        setSearchedMovies(searchResults);
    }, [searchInput]);

    return (
        <div
            className={`fixed top-0 left-0 bg-slate-500 w-7/12 sm:w-5/12 h-screen z-50 flex flex-col justify-between transition-transform md:relative md:w-[100%] md:translate-x-0 ${
                showSideMenu ? "" : "-translate-x-[100%]"
            }`}
        >
            <div className="px-2">
                <div className="flex justify-between items-center ">
                    <h1>Movies Watched in 2021</h1>
                    <AiOutlineClose
                        className="w-10 h-10 cursor-pointer md:hidden"
                        onClick={() => setShowSideMenu(false)}
                    />
                </div>

                <SearchForm setSearchInput={setSearchInput} />

                <div className="relative w-full mt-8 flex flex-col justify-start items-start">
                    {movieInputs.map((genre) => (
                        <CheckboxInput key={genre} genre={genre} addFiltersHandler={addFiltersHandler} />
                    ))}
                    <SearchResults movies={searchedMovies} searchInput={searchInput} />
                </div>
            </div>

            <ThemeToggle />
        </div>
    );
};

export default SideMenu;
