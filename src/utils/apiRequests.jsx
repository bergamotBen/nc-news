import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://news-7d6f.onrender.com/api",
});

const getAllArticles = (orderQueries) => {
  if (orderQueries) {
    return ncNews
      .get("/articles", {
        params: { sort_by: orderQueries[0], order: orderQueries[1] },
      })
      .then(({ data }) => {
        return data;
      });
  } else {
    return ncNews.get(`/articles`).then(({ data }) => {
      return data;
    });
  }
};

const getArticlesByTopic = (topic, orderQueries) => {
  return ncNews
    .get(`/articles?topic=${topic}`, {
      params: { sort_by: orderQueries[0], order: orderQueries[1] },
    })
    .then(({ data }) => {
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
const patchArticleVotes = (article_id, inc_votes) => {
  return ncNews.patch(`articles/${article_id}`, { inc_votes }).then((data) => {
    return data;
  });
};

const postCommentByArticleId = (article_id, comment) => {
  return ncNews
    .post(`articles/${article_id}/comments`, {
      body: comment.body,
      username: comment.username,
    })
    .then(({ data }) => {
      return data;
    });
};

const getTopics = () => {
  return ncNews.get("/topics").then((data) => {
    return data;
  });
};

const patchCommentVotes = (comment_id, inc_votes) => {
  return ncNews.patch(`comments/${comment_id}`, { inc_votes }).then((data) => {
    return data;
  });
};

const deleteComment = (commentId) => {
  return ncNews
    .delete(`/comments/${commentId}`)
    .then(() => {
      const complete = "your comment has been deleted";
      return complete;
    })
    .catch((err) => {
      alert(err);
    });
};

export {
  getAllArticles,
  getArticlesByTopic,
  getArticleById,
  postCommentByArticleId,
  getCommentsByArticleId,
  patchArticleVotes,
  getTopics,
  patchCommentVotes,
  deleteComment,
};
