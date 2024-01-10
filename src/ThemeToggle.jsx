import { useContext } from "react";
import { ContextApi } from "./Context";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle(){
    const {isDarkTheme, toggleDarkTheme} = useContext(ContextApi);
    return(
        <section className="toggle-container">
            <button className="dark-toggle"  onClick={toggleDarkTheme}>{isDarkTheme ? <FaMoon className="toggle-icon" style={{color: isDarkTheme ? "white": "black"}}/>: <FaSun className="toggle-icon" style={{color: isDarkTheme ? "white": "black"}}/>}</button>
        </section>
    )
};

export default ThemeToggle;