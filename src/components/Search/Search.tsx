import React, { useState } from "react";

import SideMenu from "./SideMenu";

import { RxHamburgerMenu } from "react-icons/rx";

// This product uses the TMDB API but is not endorsed or certified by TMDB.
const Search = () => {
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <div className="w-full px-2 flex flex-col justify-between items-center md:w-[30%] md:pr-2 md:pl-0 md:fixed md:top-0 md:left-0 md:z-50 xl:w-1/4 2xl:w-[20%]">
            <div className="relative w-full flex justify-between items-center md:hidden">
                <p>Movies Watched in 2021</p>
                <RxHamburgerMenu
                    className="w-10 h-10 cursor-pointer"
                    onClick={() => setShowSideMenu((state) => !state)}
                />
            </div>
            <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
        </div>
    );
};

export default Search;
