import React from "react";

import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="home" element={<div>HOME</div>} />
                <Route path="About" element={<div>ABOUT</div>} />
            </Routes>
        </div>
    );
}

export default App;
