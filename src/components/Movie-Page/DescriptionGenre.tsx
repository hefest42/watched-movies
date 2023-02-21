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
                    <div key={genre} className="px-4 py-1 mr-2 rounded-3xl border border-yellow-500">
                        {genre}
                    </div>
                ))}
            </div>
            <p className="text-justify mt-4">{description}</p>
        </div>
    );
};

export default DescriptionGenre;
