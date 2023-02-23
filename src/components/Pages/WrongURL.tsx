import React from "react";
import { Link } from "react-router-dom";

const WrongURL = () => {
    return (
        <div className="w-full h-screen">
            <div className="star-wars w-full h-screen flex flex-col justify-center items-center">
                <div className="crawl">Oops... This page does not exist.</div>
            </div>

            <div className="flex justify-center item-start">
                <Link to="" className="text-3xl hover:underline">
                    Click here to back to the Home Page
                </Link>
            </div>
        </div>
    );
};

export default WrongURL;
