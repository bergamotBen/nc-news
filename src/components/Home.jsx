import { useEffect, useState } from "react";
import AllArticles from "./AllArticles";
import SortAndFilter from "./SortAndFilter";
import ArticlesByTopic from "./ArticlesByTopic";
import { getTopics } from "../utils/apiRequests";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [orderQueries, setOrderQueries] = useState([]);
  const [params] = useSearchParams();
  const topic = params.get("topic");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ data }) => {
      setTopics(data.topics);
    });
  }, []);
  return (
    <main id="home">
      <SortAndFilter topics={topics} setOrderQueries={setOrderQueries} />{" "}
      <AllArticles orderQueries={orderQueries} />
      {topic === null ? (
        <AllArticles orderQueries={orderQueries} />
      ) : (
        <ArticlesByTopic topic={topic} orderQueries={orderQueries} />
      )}
    </main>
  );
};

export default Home;
