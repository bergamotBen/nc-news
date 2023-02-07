import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Comment = ({ comment }) => {
  const userValue = useContext(UserContext);
  const posted = comment.created_at
    ? comment.created_at.split(/[-T:.]/)
    : ["just now."];
  return (
    <div id="comment">
      <p> {comment.body}</p>
      {posted.length > 1 ? (
        <p>
          {comment.author}, on {posted[2]}/{posted[1]}/{posted[0]} at{" "}
          {posted[3]}:{posted[4]}.
        </p>
      ) : (
        <p>
          {userValue.loggedInUser.username}, {posted[0]}
        </p>
      )}
      <p>votes: {comment.votes ? comment.votes : 0}</p>
    </div>
  );
};
export default Comment;
