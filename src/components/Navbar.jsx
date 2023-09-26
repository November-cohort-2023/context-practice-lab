
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme.context";
 
function Navbar() {
    const {theme,setTheme} = useContext(ThemeContext)




  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button className="theme-btn" onClick={()=>{theme==="light" ? setTheme('dark') :setTheme('light')}}>
        {theme === "light" ? "dark " : "light "}
      </button>
      <button>Login</button>
      <p>USERNAME</p>
 
    </nav>
  );
}
 
export default Navbar;