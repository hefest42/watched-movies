import React from "react";

interface GenreDescriptionRatingProps {
    genre: string[];
    description: string;
}

const GenreDescriptionRating = ({ genre, description }: GenreDescriptionRatingProps) => {
    return <div>{description}</div>;
};

export default GenreDescriptionRating;
