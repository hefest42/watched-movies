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
    ratings: MovieRating[];
}

const Ratings = ({ ratings }: RatingsProps) => {
    const location = useLocation();
    const [movieRatings, setMovieRatings] = useState<MovieRating[]>([]);

    const ratingsHandler = (rating: MovieRating) => {
        const { id } = location.state;

        switch (rating.source) {
            case "imdb":
                return (
                    <div>
                        <a href={`https://www.imdb.com/title/${id}`} target="_blank" rel="noopener noreferrer">
                            <FaImdb />
                        </a>
                        <p>{`${rating.value}/10`}</p>
                    </div>
                );

            case "tomatoes":
                return (
                    <div>
                        <a href="www.imdb/" target="_blank" rel="noopener noreferrer">
                            <SiRottentomatoes />
                        </a>
                        <p>{`${rating.value}/100`}</p>
                    </div>
                );

            case "tomatoesaudience":
                return (
                    <div>
                        <a href="www.imdb/" target="_blank" rel="noopener noreferrer">
                            <GiPopcorn />
                        </a>
                        <p>{`${rating.value}/100`}</p>
                    </div>
                );
        }
    };

    useEffect(() => {
        const filteredRatings = ratings.filter((rating) => {
            if (rating.source === "imdb" || rating.source === "tomatoes" || rating.source === "tomatoesaudience")
                return rating;
        });

        setMovieRatings(filteredRatings);
    }, ratings);

    return (
        <div>
            {movieRatings.map((rating, i) => (
                <div key={i}>{ratingsHandler(rating)}</div>
            ))}
        </div>
    );
};

export default Ratings;
