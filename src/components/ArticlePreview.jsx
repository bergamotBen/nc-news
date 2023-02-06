import { Link } from "react-router-dom";
const ArticlePreview = (article) => {
  return (
    <Link to={`/articles/${article.article.article_id}`}>
      <div id="articlePreview">
        <img
          src={article.article.article_img_url}
          alt={article.article.title}
        />
        <h3 id="articleTitle">{article.article.title}</h3>
        <h4 id="articleAuthor">{article.article.author}</h4>
        <p id="details">
          votes: {article.article.votes} comments:
          {article.article.comment_count}
        </p>
      </div>
    </Link>
  );
};
export default ArticlePreview;
