import { getCommentsByArticleId } from "../utils/apiRequests";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Comment from "./Comment";
import userComments from "../assets/userComments.png";
import cross from "../assets/cross.png";

const Comments = ({ comment, comments, setComments, setComment }) => {
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [article_id, setComments]);

  if (comments.length > 0) {
    return (
      <section id="comments">
        <h2>
          {"  "}
          <img src={userComments} alt="" height="30px" />
          comments
        </h2>
        {comments.map((comment) => {
          return (
            <Comment
              comment={comment}
              setComments={setComments}
              setComment={setComment}
              key={comment.comment_id}
            />
          );
        })}
      </section>
    );
  }
  return (
    <h2>
      <img src={cross} alt="" height="24px" /> no comments to see here yet
      <img src={cross} alt="" height="24px" />
    </h2>
  );
};
export default Comments;
