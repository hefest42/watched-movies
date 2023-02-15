import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";

const Search = () => {
    return (
        <div className="w-full px-2 flex justify-between items-center">
            <p>Movies Watched in 2021</p>
            <RxHamburgerMenu className="w-10 h-10 cursor-pointer" />
        </div>
    );
};

export default Search;
