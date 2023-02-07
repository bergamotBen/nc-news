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

const getCommentsByArticleId = (article_id) => {
  return ncNews.get(`articles/${article_id}/comments`).then((data) => {
    return data;
  });
};
export { getAllArticles, getArticleById, getCommentsByArticleId };
