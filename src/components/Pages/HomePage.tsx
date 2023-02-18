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

    const addFilters = (filter: string) => {
        if (filters.some((genre) => genre === filter)) {
            const filteredGenres = filters.filter((genre) => genre !== filter);
            setFilters(filteredGenres);
        } else setFilters((state) => [...state, filter]);
    };

    useEffect(() => {
        setMovies(movieList);
    }, []);

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    return (
        <div className="w-full flex flex-col md:flex-row md:justify-end">
            <Search addFilters={addFilters} />
            <AllMovies movies={movies} />
        </div>
    );
};

export default HomePage;
