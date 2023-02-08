import { useEffect, useState } from "react";
import AllArticles from "./AllArticles";
import SortAndFilter from "./SortAndFilter";
import ArticlesByTopic from "./ArticlesByTopic";
import { getTopics } from "../utils/apiRequests";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params] = useSearchParams();
  const topic = params.get("topic");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ data }) => {
      setTopics(data.topics);
    });
  }, []);
  if (topic === null) {
    return (
      <main id="home">
        <SortAndFilter topics={topics} /> <AllArticles />
      </main>
    );
  } else {
    return (
      <main id="home">
        <SortAndFilter topics={topics} /> <ArticlesByTopic topic={topic} />
      </main>
    );
  }
};
export default Home;
