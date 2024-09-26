//create
import { createContext, useState } from "react";

export const Themecontex=createContext();

//provider
export function ThemecontexProvider({children})
{
    const [theme,setTheme]=useState("light")

    const ToggleTheme=()=>{
        setTheme(theme=="light"?"dark":"light")
    }
    return(
        <Themecontex.Provider  value={{theme,ToggleTheme}}>
            {children}
        </Themecontex.Provider>
        )
}