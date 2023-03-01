import React, { useContext } from "react";

import { ThemeContext } from "../../App";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="flex justify-between p-2">
            <p>Light / Dark</p>
            <div>
                <input
                    type="checkbox"
                    defaultChecked={theme}
                    className="checkbox"
                    id="checkbox"
                    onClick={() => setTheme((state) => !state)}
                />
                <label htmlFor="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    );
};

export default ThemeToggle;
