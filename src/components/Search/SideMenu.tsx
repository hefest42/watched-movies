import React from "react";

import { AiOutlineClose } from "react-icons/ai";

interface SideMenuProps {
    showSideMenu: boolean;
    setShowSideMenu: (showSideMenu: boolean) => void;
}

const SideMenu = ({ showSideMenu, setShowSideMenu }: SideMenuProps) => {
    const searchHandler = (e: React.FormEvent) => {};

    return (
        <div
            className={`absolute top-0 left-0 bg-slate-500 w-8/12 h-screen flex flex-col justify-between transition-transform	${
                showSideMenu ? "" : "-translate-x-[100%]"
            }`}
        >
            <div className="px-2">
                <div className="flex justify-between items-center">
                    <h1>Movies Watched in 2021</h1>
                    <AiOutlineClose className="w-10 h-10" />
                </div>
                <form className="flex flex-col" onSubmit={searchHandler}>
                    <input type="text" id="search" name="search" placeholder="Search For a Movie" />
                    <button className="bg-yellow-400 text-black w-full">Search</button>
                </form>
                <div className="w-full mt-8 flex flex-col justify-start items-start">
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                    <input className="mt-4" type="checkbox" name="" id="" />
                </div>
            </div>

            <div>
                <p>Dark/White</p>
                <div></div>
            </div>
        </div>
    );
};

export default SideMenu;
