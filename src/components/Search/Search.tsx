import React, { useState } from "react";

import SideMenu from "./SideMenu";

import { RxHamburgerMenu } from "react-icons/rx";

const Search = () => {
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <div className="w-full px-2 flex flex-col justify-between items-center">
            <div className="relative w-full flex justify-between items-center">
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
