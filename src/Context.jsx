import { createContext, useState } from "react";

export const ContextApi = createContext();


const AppProvider = ({children}) =>{

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isSearchValue ,setIsSearchValue] = useState("clouds");

    const toggleDarkTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle("dark-theme");
    }

    return (
        <ContextApi.Provider value={{isDarkTheme,toggleDarkTheme, isSearchValue, setIsSearchValue}}>
            {children}
        </ContextApi.Provider>
    )
};

export default AppProvider;