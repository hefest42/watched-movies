import React from "react";

import Search from "../Search/Search";
import AllMovies from "../All-Movies/AllMovies";

const HomePage = () => {
    return (
        <div className="w-full">
            <Search />
            <AllMovies />
        </div>
    );
};

export default HomePage;
