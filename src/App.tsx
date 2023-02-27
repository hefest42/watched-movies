import React, { createContext, useState } from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./components/Pages/HomePage";
import MoviePage from "./components/Pages/MoviePage";
import WrongURL from "./components/Pages/WrongURL";

//TODO change colors for dark/light theme

interface ThemeContextValues {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextValues>({
    theme: false,
    setTheme: () => {},
});

function App() {
    const [theme, setTheme] = useState(false);

    return (
        <div
            className={`relative w-full h-min-screen pb-8 text-gray-800 ${
                !theme ? "text-gray-800" : "bg-slate-800 text-slate-100"
            }`}
        >
            <ThemeContext.Provider
                value={{
                    theme: theme,
                    setTheme: setTheme,
                }}
            >
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="movie/:id" element={<MoviePage />} />
                    <Route path="*" element={<WrongURL />} />
                </Routes>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
