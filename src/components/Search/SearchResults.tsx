import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

interface SearchResultsProps {
    movies: any[];
    searchInput: string;
    setDisplaySearchResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchResults = ({ movies, searchInput, setDisplaySearchResults }: SearchResultsProps) => {
    function escapeRegExp(text: string) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }

    function highlight(fullText: string, searchTerm: string) {
        //Highlight function
        if (!searchTerm.trim()) {
            return <div>{fullText}</div>;
        }

        const regexStr = "(" + searchTerm.trim().split(/\s+/).map(escapeRegExp).join("|") + ")";
        const regex = new RegExp(regexStr, "gi");
        const parts = fullText.split(regex);
        let final = parts
            .filter((part) => part)
            .map((part, i) =>
                regex.test(part) ? (
                    <span style={{ backgroundColor: "coral" }} key={i}>
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            );
        return <span>{final}</span>;
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-green-400 overflow-y-scroll">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Search Results</h1>
                <AiOutlineClose className="w-8 h-8 cursor-pointer" onClick={() => setDisplaySearchResults(false)} />
            </div>
            <div className="w-full min-h-full">
                {movies.map((movie) => (
                    <Link
                        to={`movie/${movie.id}`}
                        state={{
                            id: movie.id,
                            genres: movie.genre,
                        }}
                        key={movie.name}
                        className="w-full h-24 mt-4 flex justify-start items-center"
                    >
                        <img src={movie.poster} alt="" className="aspect-auto h-full" />

                        <div className="text-lg ml-10">{highlight(movie.name, searchInput)}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;