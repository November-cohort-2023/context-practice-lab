
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme.context";
import { UserContext } from "../context/User.context";

 
function Navbar() {
    const {theme,setTheme} = useContext(ThemeContext)
    const {user, toggleUser} = useContext(UserContext)




  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button className="theme-btn" onClick={()=>{theme==="light" ? setTheme('dark') :setTheme('light')}}>
        Change Theme
      </button>
      <button onClick={()=>{toggleUser(user)}}>Login</button>
      <div id="username-navbar">
      <p>{user}</p>

      </div>
 
    </nav>
  );
}
 
export default Navbar;