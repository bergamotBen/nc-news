import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchArticleVotes } from "../utils/apiRequests";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState(0);
  const articleVote = (vote) => {
    setArticleVotes((currVotes) => {
      return currVotes + vote;
    });
    patchArticleVotes(article_id, vote)
      .then((articleById) => {
        setArticle(articleById.data);
      })
      .catch(() => {
        setArticleVotes((currVotes) => {
          alert("Your vote didn't count sorry. Try again.");
          return currVotes - vote;
        });
      });
  };
  useEffect(() => {
    getArticleById(article_id).then((articleById) => {
      setArticleVotes(articleById.article.votes);
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
        <div
          onClick={() => {
            articleVote(1);
          }}
        >
          ⬆️
        </div>
        votes: {articleVotes}
        <div
          onClick={() => {
            articleVote(-1);
          }}
        >
          ⬇️
        </div>
      </h3>
    </section>
  );
};
export default Article;
