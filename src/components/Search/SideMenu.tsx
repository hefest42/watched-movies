import React, { useMemo } from "react";

import CheckboxInput from "./CheckboxInput";

import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { movieList } from "../../store/MOVIES";

interface SideMenuProps {
    showSideMenu: boolean;
    setShowSideMenu: (showSideMenu: boolean) => void;
    addFilters: (filter: string) => void;
}

const SideMenu = ({ showSideMenu, setShowSideMenu, addFilters }: SideMenuProps) => {
    const movieInputs = useMemo(() => [...new Set(movieList.map((movie) => movie.genre).flat())], [movieList]);

    const searchHandler = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const addFiltersHandler = (filter: string) => addFilters(filter);

    return (
        <div
            className={`fixed top-0 left-0 bg-slate-500 w-7/12 sm:w-5/12 h-screen z-50 flex flex-col justify-between transition-transform md:relative md:w-[100%] md:translate-x-0 ${
                showSideMenu ? "" : "-translate-x-[100%]"
            }`}
        >
            <div className="px-2">
                <div className="flex justify-between items-center">
                    <h1>Movies Watched in 2021</h1>
                    <AiOutlineClose
                        className="w-10 h-10 cursor-pointer md:hidden"
                        onClick={() => setShowSideMenu(false)}
                    />
                </div>

                <form className="mt-4 flex flex-col" onSubmit={searchHandler}>
                    <div className="bg-white h-8 flex justify-center items-center">
                        <BsSearch className="text-black w-6 h-6 ml-2" />
                        <input
                            className="bg-transparent text-black w-full h-full ml-2 outline-none border-none"
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search For a Movie"
                            autoComplete="off"
                        />
                    </div>
                    <button className="bg-yellow-400 text-black w-full h-10 mt-4 font-bold hover:bg-yellow-300">
                        SEARCH
                    </button>
                </form>

                <div className="w-full mt-8 flex flex-col justify-start items-start">
                    {movieInputs.map((genre) => (
                        <CheckboxInput key={genre} genre={genre} addFiltersHandler={addFiltersHandler} />
                    ))}
                </div>
            </div>

            <div className="flex justify-between p-2">
                <p>Dark / Light</p>
                <div>
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" className="checkbox-label">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <span className="ball"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
