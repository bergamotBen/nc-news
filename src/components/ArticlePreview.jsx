import { Link } from "react-router-dom";
const ArticlePreview = (article) => {
  return (
    <Link
      to={`/articles/${article.article.article_id}`}
      aria-label="click to view"
    >
      <article id="articlePreview">
        <img
          src={article.article.article_img_url}
          alt={article.article.title}
        />
        <h2 id="articleTitle">{article.article.title}</h2>
        <h3 id="articleAuthor">{article.article.author}</h3>
        <div id="details">
          <div>votes: {article.article.votes} </div>{" "}
          <div>comments:{article.article.comment_count}</div>
        </div>
      </article>
    </Link>
  );
};
export default ArticlePreview;
