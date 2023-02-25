import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

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
    ratings: MovieRating[];
}

const Ratings = ({ ratings }: RatingsProps) => {
    const params = useParams();
    const [movieRatings, setMovieRatings] = useState<MovieRating[]>([]);

    const linkIconHandler = (source: string) => {
        if (source === "imdb") return <FaImdb className="w-8 h-8 md:w-10 md:h-10" />;
        if (source === "tomatoes") return <SiRottentomatoes className="w-8 h-8 md:w-10 md:h-10" />;
        if (source === "tomatoesaudience") return <GiPopcorn className="w-8 h-8 md:w-10 md:h-10" />;
    };

    useEffect(() => {
        const { id } = params;

        let rottentomatoesLink: any;
        // tomaotes has a proper working url, but tomatoesaudience doesn't...
        const filteredRatings = ratings
            .filter((rating) => {
                if (rating.source.includes("imdb") || rating.source.includes("tomatoes")) return rating;
            })
            .map((rating) => {
                if (rating.source === "tomatoes") rottentomatoesLink = rating.url;

                return {
                    source: rating.source,
                    value: rating.value,
                    url: rating.source.includes("imdb")
                        ? `https://www.imdb.com/title/${id}/`
                        : `https://www.rottentomatoes.com/${rottentomatoesLink}`,
                };
            });

        setMovieRatings(filteredRatings);
    }, [ratings, params]);

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
                        {rating.source.includes("imdb") ? `${rating.value}/10` : `${rating.value}%`}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Ratings;
