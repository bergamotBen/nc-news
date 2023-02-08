import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/apiRequests";

const AllArticles = ({ orderQueries }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articlePreviews, setArticlePreviews] = useState([]);
  useEffect(() => {
    getAllArticles(orderQueries).then((articles) => {
      setArticlePreviews(articles.articles);
      setIsLoading(false);
    });
  }, [orderQueries]);
  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <section id="allArticles">
      <h1>all articles</h1>
      {articlePreviews.map((article) => {
        return <ArticlePreview article={article} key={article.article_id} />;
      })}
    </section>
  );
};
export default AllArticles;
