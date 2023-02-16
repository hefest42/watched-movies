import React, { useState } from "react";

import SideMenu from "./SideMenu";

import { RxHamburgerMenu } from "react-icons/rx";

const Search = () => {
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <div className="w-full px-2 flex flex-col justify-between items-center lg:w-[30%] lg:pr-2 lg:pl-0 lg:fixed lg:top-0 lg:left-0 lg:z-50 xl:w-1/4 2xl:w-[20%]">
            <div className="relative w-full flex justify-between items-center lg:hidden">
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
