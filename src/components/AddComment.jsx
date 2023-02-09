import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentByArticleId } from "../utils/apiRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ comment, setComment, setComments }) => {
  const { article_id } = useParams();
  const userValue = useContext(UserContext);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (comment.body) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [comment, setComment]);

  const changeHandler = (key, value) => {
    setComment((currComment) => {
      setIsValid(true);
      const copy = { ...currComment };
      copy[key] = value;
      copy["username"] = userValue.loggedInUser.username;
      return copy;
    });
  };
  const submitHandler = () => {
    if (isValid) {
      setIsValid(true);
      setComments((currComments) => {
        return [comment, ...currComments];
      });
      setComment({});
      postCommentByArticleId(article_id, comment).catch((err) => {
        alert("Your comment failed to post. Try again.");
      });
    }
  };

  return (
    <section id="addComment">
      <h2>add comment</h2>
      <input
        id="commentInput"
        type="text"
        default=""
        onChange={(e) => {
          changeHandler("body", e.target.value);
        }}
      ></input>
      <button disabled={!isValid} type="submit" onClick={submitHandler}>
        post
      </button>
    </section>
  );
};
export default AddComment;
