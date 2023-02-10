import { Link } from "react-router-dom";
import teacup from "../assets/teacup.png";
const Logo = () => {
  return (
    <Link to="/" id="logo">
      <img src={teacup} height="65px" alt="logo" />
      <h2>news</h2>
    </Link>
  );
};
export default Logo;
