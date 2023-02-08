import { getCommentsByArticleId } from "../utils/apiRequests";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Comment from "./Comment";

const Comments = ({ comment, comments, setComments }) => {
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [article_id, setComments]);

  if (comments.length > 0) {
    return (
      <section id="comments">
        <h2>comments</h2>
        {comments.map((comment) => {
          return (
            <Comment
              comment={comment}
              setComments={setComments}
              key={comment.comment_id}
            />
          );
        })}
      </section>
    );
  }
  return <h2>👀 no comments to see here yet 👀 </h2>;
};
export default Comments;
