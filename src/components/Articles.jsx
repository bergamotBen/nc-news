import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import { getArticlesByTopic, getAllArticles } from "../utils/apiRequests";

const Articles = ({ orderQueries, topic }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articlePreviews, setArticlePreviews] = useState([]);

  useEffect(() => {
    if (topic) {
      getArticlesByTopic(topic, orderQueries).then((articles) => {
        setArticlePreviews(articles.articles);
        setIsLoading(false);
      });
    } else {
      getAllArticles(orderQueries).then((articles) => {
        setArticlePreviews(articles.articles);
        setIsLoading(false);
      });
    }
  }, [topic, orderQueries]);

  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <section id="allArticles">
      <h1>{topic ? `filed under ${topic}` : `all articles`}</h1>

      <div id="allPreviews">
        {articlePreviews.map((article) => {
          return <ArticlePreview article={article} key={article.article_id} />;
        })}
      </div>
    </section>
  );
};

export default Articles;
