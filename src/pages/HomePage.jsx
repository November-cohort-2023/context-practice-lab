import { useContext } from "react";
import { ThemeContext } from "../context/Theme.context";
import { UserContext } from "../context/User.context";

 
const profileImg = 'https://i.imgur.com/i1gsj0v.png';
 
function HomePage() {
    const {theme} = useContext(ThemeContext)
    const {user} = useContext(UserContext)
  return (
    <div className={"HomePage " + theme}>
    {user=== "Nadine"? <h1>Hi! Welcome {user}</h1> : <h1>Please Log In</h1>}
      
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}
 
export default HomePage;