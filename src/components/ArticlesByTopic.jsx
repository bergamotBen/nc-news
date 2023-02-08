import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/apiRequests";

const ArticlesByTopic = ({ topic }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articlePreviews, setArticlePreviews] = useState([]);
  useEffect(() => {
    getArticlesByTopic(topic).then((articles) => {
      setArticlePreviews(articles.articles);
      setIsLoading(false);
    });
  }, [topic]);
  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <section id="allArticles">
      {articlePreviews.map((article) => {
        return <ArticlePreview article={article} key={article.article_id} />;
      })}
    </section>
  );
};

export default ArticlesByTopic;
