import React from "react";

import { MdOutlineError } from "react-icons/md";
import { Link } from "react-router-dom";

const MoviePageError = () => {
    return (
        <div className="text-red-600 w-full sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12">
            <div className="mt-24 flex justify-center items-start">
                <MdOutlineError className=" w-16 h-16" />
                <div className="ml-8 text-lg">
                    <p>Sorry something went wrong.</p>
                    <Link to="/" className="hover:underline">
                        Click here go to back to the home page, and try again.
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MoviePageError;
