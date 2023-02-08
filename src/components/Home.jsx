import AllArticles from "./AllArticles";
import SortAndFilter from "./SortAndFilter";
import { useState } from "react";

const Home = () => {
  const [orderQueries, setOrderQueries] = useState([]);
  return (
    <main id="home">
      <SortAndFilter setOrderQueries={setOrderQueries} />{" "}
      <AllArticles orderQueries={orderQueries} />
    </main>
  );
};
export default Home;
