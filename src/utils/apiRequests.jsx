import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://news-7d6f.onrender.com/api",
});

const getAllArticles = () => {
  return ncNews.get("/articles").then(({ data }) => {
    return data;
  });
};

const getArticleById = (article_id) => {
  return ncNews.get(`articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

const patchArticleVotes = (article_id, inc_votes) => {
  return ncNews.patch(`articles/${article_id}`, { inc_votes }).then((data) => {
    return data;
  });
};

export { getAllArticles, getArticleById, patchArticleVotes };
