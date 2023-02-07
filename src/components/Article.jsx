import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchArticleVotes } from "../utils/apiRequests";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticleById(article_id).then((articleById) => {
      setArticle(articleById);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h2> loading </h2>;
  }
  return (
    <section id="article">
      <img
        src={article.article.article_img_url}
        alt={article.article.title}
      ></img>
      <div>
        <h1>{article.article.title}</h1>
        <p>by {article.article.author}</p>
      </div>
      <p>{article.article.body}</p>
      <h3>
        in: {article.article.topic} <br></br>
        <div onClick={patchArticleVotes(article_id, 1)}>⬆️</div>
        votes: {article.article.votes}{" "}
        <div onClick={patchArticleVotes(article_id, -1)}>⬇️</div>
      </h3>
    </section>
  );
};
export default Article;
