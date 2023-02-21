import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import { FaImdb } from "react-icons/fa";
import { SiRottentomatoes } from "react-icons/si";
import { GiPopcorn } from "react-icons/gi";

type MovieRating = {
    source: string;
    value: number | null;
    score?: number | null;
    votes?: number | null;
    url?: string;
    id?: null;
};

interface RatingsProps {
    title: string;
    ratings: MovieRating[];
}

const Ratings = ({ title, ratings }: RatingsProps) => {
    const location = useLocation();
    const [movieRatings, setMovieRatings] = useState<MovieRating[]>([]);

    const linkIconHandler = (source: string) => {
        if (source === "imdb") return <FaImdb className="w-8 h-8" />;
        if (source === "tomatoes") return <SiRottentomatoes className="w-8 h-8" />;
        if (source === "tomatoesaudience") return <GiPopcorn className="w-8 h-8" />;
    };

    useEffect(() => {
        const { id } = location.state;

        // tomaotes has a proper working url, but tomatoesaudience doesn't...
        const filteredRatings = ratings
            .filter((rating) => {
                if (rating.source.includes("imdb") || rating.source.includes("tomatoes")) return rating;
            })
            .map((rating) => {
                return {
                    source: rating.source,
                    value: rating.value,
                    url: rating.source.includes("imdb")
                        ? `https://www.imdb.com/title/${id}/`
                        : `https://www.rottentomatoes.com/m/${title}`,
                };
            });

        setMovieRatings(filteredRatings);
    }, [ratings]);

    return (
        <div className="flex px-2 mt-4">
            {movieRatings.map((rating, i) => (
                <a
                    href={rating.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    className="mr-4 flex justify-center items-center hover:underline"
                >
                    <div className="mr-1">{linkIconHandler(rating.source)}</div>
                    <div className="text-lg">
                        {rating.source.includes("imdb") ? `${rating.value}/10` : `${rating.value}/100`}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Ratings;
