import React from "react";

import { Link } from "react-router-dom";

import { movieList } from "../../store/MOVIES";

const AllMovies = () => {
    return (
        <div className="w-full bg-slate-500 grid grid-cols-2">
            <Link to="movie/1" className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </Link>
            <div className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </div>
            <div className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </div>
            <div className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </div>
            <div className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </div>
            <div className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </div>
            <div className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </div>
            <div className="p-4">
                <img className="movie" src={movieList[0].links.poster} alt="" />
                <p>{movieList[0].name}</p>
            </div>
        </div>
    );
};

export default AllMovies;