import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { patchCommentVotes } from "../utils/apiRequests";

const Comment = ({ comment, setComment }) => {
  const { comment_id } = comment;
  const userValue = useContext(UserContext);
  const [commentVotes, setCommentVotes] = useState(0);

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
  return (
    <article id="comment">
      <p> {comment.body}</p>
      {posted.length > 1 ? (
        <p>
          Posted by {comment.author}, on {posted[2]}/{posted[1]}/{posted[0]} at{" "}
          {posted[3]}:{posted[4]}.
        </p>
      ) : (
        <p>
          Posted by {userValue.loggedInUser.username}, {posted[0]}
        </p>
      )}
      <section id="votes">
        <div
          onClick={() => {
            commentVote(1);
          }}
        >
          ⬆️
        </div>
        votes: {commentVotes}
        <div
          onClick={() => {
            commentVote(-1);
          }}
        >
          ⬇️
        </div>
      </section>
    </article>
  );
};
export default Comment;
