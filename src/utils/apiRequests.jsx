import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://news-7d6f.onrender.com/api",
});

const getAllArticles = () => {
  return ncNews.get("/articles").then(({ data }) => {
    return data;
  });
};

export { getAllArticles };
