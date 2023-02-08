import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils/apiRequests";

const Comment = ({ comment, setComments }) => {
  const [isUser, setIsUser] = useState(true);
  const userValue = useContext(UserContext);
  const posted = comment.created_at
    ? comment.created_at.split(/[-T:.]/)
    : ["just now."];

  useEffect(() => {
    if (comment.author === userValue.loggedInUser.username) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [userValue.loggedInUser.username, comment.author]);

  const deleteHandler = () => {
    setComments((currComments) => {
      const copy = [...currComments];
      const index = copy.findIndex((element) => {
        return element.comment_id === comment.comment_id;
      });
      copy.splice(index, 1);
      return copy;
    });
    deleteComment(comment.comment_id).catch(() => {
      alert("your comment did not delete. try again");
    });
  };
  const undoHandler = () => {
    setComments((currComments) => {
      const copy = [...currComments];
      const index = copy.findIndex((element) => {
        return element.comment_id === comment.comment_id;
      });
      copy.splice(index, 1);
      return copy;
    });
  };

  return (
    <div id="comment">
      <p> {comment.body}</p>
      {posted.length > 1 ? (
        <div>
          <p>
            {comment.author}, on {posted[2]}/{posted[1]}/{posted[0]} at{" "}
            {posted[3]}:{posted[4]}.
          </p>
        </div>
      ) : (
        <div>
          <p>
            {userValue.loggedInUser.username}, {posted[0]}
          </p>

          <p
            onClick={() => {
              undoHandler();
            }}
          >
            {" "}
            🗑{" "}
          </p>
        </div>
      )}
      <p
        hidden={!isUser}
        onClick={() => {
          deleteHandler();
        }}
      >
        {" "}
        🗑{" "}
      </p>
      <p>votes: {comment.votes ? comment.votes : 0}</p>
    </div>
  );
};
export default Comment;
