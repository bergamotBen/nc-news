import { getCommentsByArticleId } from "../utils/apiRequests";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [article_id]);

  return (
    <section id="comments">
      <h2>comments</h2>
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.comment_id} />;
      })}
    </section>
  );
};
export default Comments;
