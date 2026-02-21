import { useState } from "react";

export function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem("theme") === "dark";
    });

    function handleToggle(e: React.ChangeEvent<HTMLInputElement>) {
        const theme = e.target.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        setIsDark(e.target.checked);
    }

    return (
        <label className="toggle text-base-content">
            <input type="checkbox" className="theme-controller" onChange={handleToggle} checked={isDark} />
        </label>
    );
}

export default ThemeSwitcher;