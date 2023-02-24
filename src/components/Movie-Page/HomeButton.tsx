import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <Link to="/" className="hidden md:block">
            <div className="hover fixed top-0 left-0 w-12 h-screen flex justify-center items-center cursor-pointer hover:text-black">
                <AiOutlineHome className="w-8 h-8" />
            </div>
        </Link>
    );
};

export default HomeButton;
