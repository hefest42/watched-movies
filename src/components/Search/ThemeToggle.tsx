import React from "react";

const ThemeToggle = () => {
    return (
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
    );
};

export default ThemeToggle;
