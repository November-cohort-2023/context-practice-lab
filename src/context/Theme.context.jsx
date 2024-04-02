 
import { createContext, useState } from "react";
 
const ThemeContext = createContext();
 
 
// CREATE A WRAPPER COMPONENT
function ThemeProviderWrapper(props) {
  const [theme,setTheme] = useState('dark')
 
  return (

    <ThemeContext.Provider value={{theme,setTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}
 
export { ThemeContext, ThemeProviderWrapper };
