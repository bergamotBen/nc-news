import { useEffect, useState } from "react";
import Articles from "./Articles";
import SortAndFilter from "./SortAndFilter";

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
      <SortAndFilter topics={topics} setOrderQueries={setOrderQueries} />
      <Articles topic={topic} orderQueries={orderQueries}></Articles>
    </main>
  );
};

export default Home;
