import React, { useEffect, useMemo, useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { movieList } from "../../store/MOVIES";
import SearchForm from "./SearchForm";
import CheckboxInput from "./CheckboxInput";
import SearchResults from "./SearchResults";
import ThemeToggle from "./ThemeToggle";

interface SearchProps {
    addFilters: (filter: string) => void;
    movies: { id: string; name: string; genre: string[]; poster: string }[];
}

// This product uses the TMDB API but is not endorsed or certified by TMDB.
const Search = ({ addFilters, movies }: SearchProps) => {
    const [showSideMenu, setShowSideMenu] = useState(false);
    const [displaySearchResults, setDisplaySearchResults] = useState(false);
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchedMovies, setSearchedMovies] = useState<any[]>([]);
    const [availableGenres, setAvailableGenres] = useState<string[]>([]);
    const movieInputs = useMemo(() => [...new Set(movieList.map((movie) => movie.genre).flat())], [movieList]);

    useEffect(() => {
        const searchResultsHandler = () => {
            if (searchInput === "") {
                setDisplaySearchResults(false);
                return;
            }

            const test = movieList.filter((movie) =>
                movie.name.toLowerCase().includes(searchInput.toLowerCase().trim())
            );

            setSearchedMovies(test);
            setDisplaySearchResults(true);
        };

        const tick = setTimeout(searchResultsHandler, 500);

        return () => clearTimeout(tick);
    }, [searchInput]);

    useEffect(() => {
        setAvailableGenres([...new Set(movies.map((movie) => movie.genre).flat())]);
    }, [movies]);

    return (
        <div className="w-full px-2 flex flex-col justify-between items-center md:w-[30%] md:pr-2 md:pl-0 md:fixed md:top-0 md:left-0 md:z-50 xl:w-1/4 2xl:w-[20%]">
            <div className="relative w-full flex justify-between items-center md:hidden">
                <p>Movies Watched in 2021</p>
                <RxHamburgerMenu
                    className="w-10 h-10 cursor-pointer"
                    onClick={() => setShowSideMenu((state) => !state)}
                />
            </div>
            <div
                className={`fixed top-0 left-0 w-7/12 sm:w-5/12 h-screen z-50 flex flex-col justify-between transition-transform md:relative md:w-[100%] md:translate-x-0 ${
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

                    <SearchForm searchInput={searchInput} setSearchInput={setSearchInput} />

                    <div className="relative w-full mt-8 flex flex-col justify-start items-start">
                        {movieInputs.map((genre) => (
                            <CheckboxInput
                                key={genre}
                                genre={genre}
                                addFiltersHandler={addFilters}
                                availableGenres={availableGenres}
                            />
                        ))}
                        {displaySearchResults && (
                            <SearchResults
                                movies={searchedMovies}
                                searchInput={searchInput}
                                setDisplaySearchResults={setDisplaySearchResults}
                            />
                        )}
                    </div>
                </div>

                <ThemeToggle />
            </div>
        </div>
    );
};

export default Search;
