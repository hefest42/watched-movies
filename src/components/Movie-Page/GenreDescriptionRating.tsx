import React, { useEffect, useState } from "react";

import MovieRatings from "./MovieRatings";

import { SiRottentomatoes } from "react-icons/si";
import { FaImdb } from "react-icons/fa";

interface GenreDescriptionRatingProps {
    genres: string[];
    description: string;
    ratings: {
        source: string;
        value: number | null;
        score?: number | null;
        votes?: number | null;
        url?: string;
        id?: any;
    }[];
}

const GenreDescriptionRating = ({ genres, description, ratings }: GenreDescriptionRatingProps) => {
    const [movieRatings, setMovieRatings] = useState<any[]>([]);

    useEffect(() => {
        const filteredRatings = ratings.filter((rating) => {
            if (rating.source === "imdb" || rating.source === "tomatoes") return rating;
        });
        setMovieRatings(filteredRatings);
    }, [ratings]);

    return (
        <div>
            <div>{description}</div>
            <div>
                {genres.map((genre) => (
                    <p key={genre}>{genre}</p>
                ))}
            </div>
            <div>
                {movieRatings.map((rating, i) => (
                    <MovieRatings key={i} />
                ))}
            </div>
        </div>
    );
};

export default GenreDescriptionRating;
