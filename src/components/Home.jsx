import { useEffect, useState } from "react";
import AllArticles from "./AllArticles";
import SortAndFilter from "./SortAndFilter";
import { getTopics } from "../utils/apiRequests";
const Home = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ data }) => {
      setTopics(data.topics);
    });
  }, []);

  return (
    <main id="home">
      <SortAndFilter topics={topics} /> <AllArticles />
    </main>
  );
};
export default Home;
