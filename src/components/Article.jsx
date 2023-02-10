import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById, patchArticleVotes } from "../utils/apiRequests";
import asc from "../assets/asc.png";
import desc from "../assets/desc.png";
const Article = () => {
  const goTo = useNavigate();
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
    getArticleById(article_id)
      .then((articleById) => {
        setArticleVotes(articleById.article.votes);
        setArticle(articleById);
        setIsLoading(false);
      })
      .catch((err) => {
        return goTo("/notFound");
      });
  }, [article_id, goTo]);

  if (isLoading) {
    return <h1> loading </h1>;
  }
  return (
    <section id="article">
      <img
        src={article.article.article_img_url}
        alt={article.article.title}
        id="article-img"
      ></img>
      <div>
        <h1>{article.article.title}</h1>
        <p>
          Posted by {article.article.author} in {article.article.topic}.
        </p>
      </div>
      <p>{article.article.body}</p>

      <article id="articleVotes">
        <img
          id="up-arrow"
          src={asc}
          height="18px"
          alt="up arrow"
          onClick={() => {
            articleVote(1);
          }}
        />
        {"  "} votes: {articleVotes} {"  "}
        <img
          id="down-arrow"
          src={desc}
          height="18px"
          alt="down arrow"
          onClick={() => {
            articleVote(-1);
          }}
        />
      </article>
    </section>
  );
};
export default Article;
