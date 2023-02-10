import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Nav = () => {
  const {
    loggedInUser: { username, avatar_url },
  } = useContext(UserContext);

  return (
    <nav id="nav">
      <section id="user">
        <h4>{username}</h4>
        <img src={avatar_url} alt="user avatar"></img>
      </section>
    </nav>
  );
};
export default Nav;
