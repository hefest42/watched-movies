import React from "react";

interface DescriptionGenreProps {
    description: string;
    genres: string[];
}

const DescriptionGenre = ({ description, genres }: DescriptionGenreProps) => {
    return (
        <div className="w-full px-2 mt-4">
            <div className="w-full mt-2 flex justify-start items-center">
                {genres.map((genre) => (
                    <div
                        key={genre}
                        className="px-2 py-1 mr-2 rounded-3xl border border-yellow-500 sm:px-4 sm:py-1 sm:text-lg"
                    >
                        {genre}
                    </div>
                ))}
            </div>
            <p className="text-justify mt-4 sm:text-lg">{description}</p>
        </div>
    );
};

export default DescriptionGenre;
