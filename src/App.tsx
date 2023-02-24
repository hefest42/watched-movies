import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./components/Pages/HomePage";
import MoviePage from "./components/Pages/MoviePage";
import WrongURL from "./components/Pages/WrongURL";

// TODO add a home page button to movie page
// TODO add search function
// TODO see if you can add lazy loading for the whole movie page

function App() {
    return (
        <div className="relative w-full bg-gray-900 text-yellow-300">
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="movie/:id" element={<MoviePage />} />
                <Route path="*" element={<WrongURL />} />
            </Routes>
        </div>
    );
}

export default App;
