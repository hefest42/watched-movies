import React, { useEffect, useState } from "react";

import Search from "../Search/Search";
import AllMovies from "../All-Movies/AllMovies";

import { movieList } from "../../store/MOVIES";

interface Movie {
    id: string;
    name: string;
    genre: string[];
    poster: string;
}

const HomePage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filters, setFilters] = useState<string[]>([]);

    const compareTwoArrays = (arr1: string[], arr2: string[]) => {
        return arr2.every((value) => arr1.includes(value));
    };

    const addFilters = (filter: string) => {
        if (filters.some((genre) => genre === filter)) setFilters((state) => state.filter((genre) => genre !== filter));
        else setFilters((state) => [...state, filter]);
    };

    useEffect(() => {
        setMovies(movieList.filter((movie) => compareTwoArrays(movie.genre, filters)));
    }, [filters]);

    useEffect(() => {
        setMovies(movieList);
    }, []);

    return (
        <div className="w-full flex flex-col md:flex-row md:justify-end">
            <Search addFilters={addFilters} />
            <AllMovies movies={movies} />
        </div>
    );
};

export default HomePage;
