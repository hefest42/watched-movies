import React, { lazy, Suspense } from "react";

import MoviePageLoading from "../Movie-Page/MoviePageLoading";
const MoviePageContainer = lazy(() => import("../Movie-Page/MoviePageContainer"));

const MoviePage = () => {
    return (
        <div className="relative w-full min-h-screen flex justify-center items-start">
            <Suspense fallback={<MoviePageLoading />}>
                <MoviePageContainer />
            </Suspense>
        </div>
    );
};

export default MoviePage;
