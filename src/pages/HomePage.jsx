import { useContext } from "react";
import { ThemeContext } from "../context/Theme.context";

 
const profileImg = 'https://i.imgur.com/i1gsj0v.png';
 
function HomePage() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={"HomePage " + theme}>
      <h1>Hi! Welcome USERNAME</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}
 
export default HomePage;