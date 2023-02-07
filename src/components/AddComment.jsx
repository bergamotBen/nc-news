import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentByArticleId } from "../utils/apiRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AddComment = () => {
  const { article_id } = useParams();
  const userValue = useContext(UserContext);
  const [comment, setComment] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (comment.body) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [comment, setComment]);

  const changeHandler = (key, value) => {
    setComment((prev) => {
      setIsValid(true);
      const copy = { ...prev };
      copy[key] = value;
      copy["username"] = userValue.loggedInUser.username;
      return copy;
    });
  };
  const submitHandler = () => {
    if (isValid) {
      setIsValid(true);
      postCommentByArticleId(article_id, comment).then((data) => {});
    }
  };

  return (
    <section>
      <h2>add comment</h2>
      <input
        type="text"
        onChange={(e) => {
          changeHandler("body", e.target.value);
        }}
      ></input>
      <button disabled={!isValid} onClick={submitHandler}>
        post comment
      </button>
    </section>
  );
};
export default AddComment;
