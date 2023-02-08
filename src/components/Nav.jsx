import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Nav = () => {
  const {
    loggedInUser: { username, avatar_url },
  } = useContext(UserContext);

  return (
    <div id="nav">
      <h3>nav</h3>
      <section id="user">
        <img src={avatar_url} alt="user avatar"></img>
        <h4>{username}</h4>
      </section>
    </div>
  );
};
export default Nav;
