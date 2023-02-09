import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { patchCommentVotes } from "../utils/apiRequests";
import { deleteComment } from "../utils/apiRequests";
import trash from "../assets/trash.png";
import asc from "../assets/asc.png";
import desc from "../assets/desc.png";

const Comment = ({ comment, setComment, setComments }) => {
  const { comment_id } = comment;
  const userValue = useContext(UserContext);
  const [commentVotes, setCommentVotes] = useState(0);
  const isUser = comment.author === userValue.loggedInUser.username;
  const commentVote = (vote) => {
    setCommentVotes((currVotes) => {
      return currVotes + vote;
    });
    patchCommentVotes(comment_id, vote)
      .then((commentById) => {
        setComment(commentById.data);
      })
      .catch(() => {
        setCommentVotes((currVotes) => {
          alert("Your vote didn't count sorry. Try again");
          return currVotes - vote;
        });
      });
  };

  useEffect(() => {
    setCommentVotes(comment.votes);
  }, [comment.votes]);

  const posted = comment.created_at
    ? comment.created_at.split(/[-T:.]/)
    : ["just now."];

  const deleteHandler = () => {
    const deletedComment = [];
    setComments((currComments) => {
      const copy = [...currComments];
      const index = copy.findIndex((element) => {
        return element.comment_id === comment.comment_id;
      });
      deletedComment.push(currComments[index], index);
      copy.splice(index, 1);
      return copy;
    });

    deleteComment(comment.comment_id).catch(() => {
      setComments((currComments) => {
        currComments.splice(deletedComment[1], 0, deletedComment[0]);
      });
      alert("Your comment did not delete. Try again.");
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
    <article id="comment">
      <p className="commentBody"> {comment.body}</p>
      {posted.length > 1 ? (
        <div>
          <p className="commentBody">
            Posted by {comment.author}, on {posted[2]}/{posted[1]}/{posted[0]}{" "}
            at {posted[3]}:{posted[4]}.
          </p>
          <section id="votes">
            <img
              alt="up arrow"
              src={asc}
              height="18px"
              onClick={() => {
                commentVote(1);
              }}
            />
            votes:{commentVotes}
            <img
              alt="down arrow"
              src={desc}
              height="18px"
              onClick={() => {
                commentVote(-1);
              }}
            />
          </section>
        </div>
      ) : (
        <div>
          <p className="commentBody">
            {userValue.loggedInUser.username}, {posted[0]}
          </p>

          <p
            onClick={() => {
              undoHandler();
            }}
          >
            <img src={trash} height="30px" alt="delete" />
          </p>
        </div>
      )}
      <p
        hidden={!isUser}
        onClick={() => {
          deleteHandler();
        }}
      >
        <img src={trash} height="30px" alt="delete" />
      </p>
    </article>
  );
};
export default Comment;
