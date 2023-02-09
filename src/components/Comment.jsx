import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../utils/apiRequests";

const Comment = ({ comment, setComments }) => {
  const [deletedComment, setDeletedComment] = useState([]);
  const userValue = useContext(UserContext);
  const isUser = comment.author === userValue.loggedInUser.username;
  const posted = comment.created_at
    ? comment.created_at.split(/[-T:.]/)
    : ["just now."];

  const deleteHandler = () => {
    setComments((currComments) => {
      const copy = [...currComments];
      const index = copy.findIndex((element) => {
        return element.comment_id === comment.comment_id;
      });
      setDeletedComment([copy[index], index]);
      copy.splice(index, 1);
      return copy;
    });
    deleteComment(comment.comment_id).catch(() => {
      setComments((currComments) => {
        const copy = [...currComments];
        copy.splice(deletedComment[1], 0, deletedComment[0]);
        return copy;
      });
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
        <p>
          {comment.author}, on {posted[2]}/{posted[1]}/{posted[0]} at{" "}
          {posted[3]}:{posted[4]}.
        </p>
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
