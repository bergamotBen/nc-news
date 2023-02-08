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
    return <h1> loading </h1>;
  }
  return (
    <article id="article">
      <img
        src={article.article.article_img_url}
        alt={article.article.title}
      ></img>
      <div>
        <h1>{article.article.title}</h1>
        <p>
          Posted by {article.article.author} in {article.article.topic}.
        </p>
      </div>
      <p>{article.article.body}</p>

      <section id="votes">
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
      </section>
    </article>
  );
};
export default Article;
