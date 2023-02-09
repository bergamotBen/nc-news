import { Link } from "react-router-dom";
const ArticlePreview = (article) => {
  return (
    <Link to={`/articles/${article.article.article_id}`}>
      <div className="articlePreview">
        <img
          src={article.article.article_img_url}
          alt={article.article.title}
        />
        <h2 id="articleTitle">{article.article.title}</h2>
        <h3 id="articleAuthor">{article.article.author}</h3>
        <p id="details">
          votes: {article.article.votes} comments:
          {article.article.comment_count}
        </p>
      </div>
    </Link>
  );
};
export default ArticlePreview;
