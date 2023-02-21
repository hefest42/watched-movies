import React, { useState, useEffect } from "react";

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
    const [movieRatings, setMovieRatings] = useState<MovieRating[]>([]);

    useEffect(() => {
        const filteredRatings = ratings.filter((rating) => {
            if (rating.source === "imdb" || rating.source === "tomatoes" || rating.source === "tomatoesaudience")
                return rating;
        });

        setMovieRatings(filteredRatings);
    }, ratings);

    return <div></div>;
};

export default Ratings;
