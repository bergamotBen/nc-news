import AddComment from "./AddComment";
import Article from "./Article";
import Comments from "./Comments";

const ReadArticle = () => {
  return (
    <section id="readArticle">
      (
      <section>
        <Article />
        <Comments />
      </section>
      )
      <AddComment />
    </section>
  );
};
export default ReadArticle;
