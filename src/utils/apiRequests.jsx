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

const postCommentByArticleId = (article_id, comment) => {
  console.log(comment);
  return ncNews
    .post(`articles/${article_id}/comments`, {
      body: comment.body,
      username: comment.username,
    })
    .then((data) => {
      console.log(data);
    });
};

export { getAllArticles, getArticleById, postCommentByArticleId };
