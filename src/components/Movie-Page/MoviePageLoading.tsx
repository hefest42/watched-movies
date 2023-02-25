import React from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MoviePageLoading = () => {
    return (
        <div className="w-full sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12 ">
            <div className="w-full h-96 flex justify-center items-center">
                <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin text-slate-500 " />
            </div>
            <div className="w-full h-4 px-2 animate-pulse bg-slate-700"></div>
            <h1 className="px-2 h-10 mt-4 animate-pulse bg-slate-700"></h1>

            <div className="w-full mt-4 flex">
                <div className="w-16 h-6 px-4 py-1 mr-2 rounded-3xl animate-pulse bg-slate-700"></div>
                <div className="w-16 h-6 px-4 py-1 mr-2 rounded-3xl animate-pulse bg-slate-700"></div>
                <div className="w-16 h-6 px-4 py-1 mr-2 rounded-3xl animate-pulse bg-slate-700"></div>
            </div>
            <p className="w-full h-28 mt-8 animate-pulse bg-slate-700"></p>

            <div className="mt-6 flex justify-start items-center">
                <div className="mr-4 flex justify-start items-center">
                    <div className="w-10 h-12 animate-pulse bg-slate-700 rounded-3xl"></div>
                    <div className="w-12 h-6 ml-2 animate-pulse bg-slate-700"></div>
                </div>
                <div className="mr-4 flex justify-start items-center">
                    <div className="w-10 h-12 animate-pulse bg-slate-700 rounded-3xl"></div>
                    <div className="w-12 h-6 ml-2 animate-pulse bg-slate-700"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="w-10 h-12 animate-pulse bg-slate-700 rounded-3xl"></div>
                    <div className="w-12 h-6 ml-2 animate-pulse bg-slate-700"></div>
                </div>
            </div>

            <div className="w-full h-80 aspect-video flex justify-center items-center">
                <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin text-slate-500" />
            </div>
        </div>
    );
};

export default MoviePageLoading;
