import AddComment from "./AddComment";
import Article from "./Article";
import Comments from "./Comments";
import { useState } from "react";

const ReadArticle = () => {
  const [comment, setComment] = useState({});
  const [comments, setComments] = useState([]);
  return (
    <section id="readArticle">
      <Article />
      <AddComment
        comment={comment}
        setComment={setComment}
        setComments={setComments}
      />
      <Comments
        comment={comment}
        comments={comments}
        setComments={setComments}
      />
    </section>
  );
};
export default ReadArticle;
