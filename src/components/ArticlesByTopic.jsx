import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/apiRequests";

const ArticlesByTopic = ({ topic, orderQueries }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articlePreviews, setArticlePreviews] = useState([]);
  useEffect(() => {
    getArticlesByTopic(topic, orderQueries).then((articles) => {
      setArticlePreviews(articles.articles);
      setIsLoading(false);
    });
  }, [topic, orderQueries]);

  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <section id="allArticles">
      <h1>{topic ? `articles about ${topic}` : `all articles`}</h1>
      {articlePreviews.map((article) => {
        return <ArticlePreview article={article} key={article.article_id} />;
      })}
    </section>
  );
};

export default ArticlesByTopic;
