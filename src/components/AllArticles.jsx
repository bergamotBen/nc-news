import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/apiRequests";

const AllArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articlePreviews, setArticlePreviews] = useState([]);
  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticlePreviews(articles.articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <section id="allArticles">
      <h3>all articles</h3>
      {articlePreviews.map((article) => {
        return <ArticlePreview article={article} key={article.article_id} />;
      })}
    </section>
  );
};
export default AllArticles;
