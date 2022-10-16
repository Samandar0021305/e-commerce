import React , {useContext , useState , useEffect, createContext} from "react";
const ThemeContext = createContext()

function ThemeProvider(props){
    const [theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || false);
    
    useEffect(()=>{
     localStorage.setItem("theme",JSON.stringify(theme))
    }, [theme])

    const setThemeMode = mode => setTheme(mode)

    return(
        <ThemeContext.Provider value={{theme , setThemeMode}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

const useThemeHook =()=>{
    const {theme} = useContext(ThemeContext)
    return [theme]
}

export default {ThemeProvider , useThemeHook , ThemeContext};