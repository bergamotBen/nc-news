import { useState } from "react";
import { useNavigate } from "react-router-dom";
import asc from "../assets/asc.png";
import desc from "../assets/desc.png";

const SortAndFilter = ({ setOrderQueries, topics }) => {
  const [sortOrder, setSortOrder] = useState(["DESC", desc]);
  const [orderBy, setOrderBy] = useState("");

  const clickHandler = () => {
    if (sortOrder[0] === "DESC") {
      setOrderQueries([orderBy, "ASC"]);
      setSortOrder(["ASC", asc]);
    } else if (sortOrder[0] === "ASC") {
      setOrderQueries([orderBy, "DESC"]);
      setSortOrder(["DESC", desc]);
    }
  };

  const orderChangeHandler = (e) => {
    const orderBy = e.target.value;
    setOrderBy(orderBy);
    setOrderQueries([orderBy, sortOrder[0]]);
  };
  const [selectedTopic, setSelectedTopic] = useState("choose a topic");
  const navigateTo = useNavigate();

  const selectChangeHandler = (e) => {
    setSelectedTopic(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedTopic === "choose a topic") {
    } else {
      navigateTo(`/articles?topic=${selectedTopic}`);
    }
  };

  return (
    <section id="sortAndFilter">
      <form id="filter" onSubmit={submitHandler}>
        <select onChange={selectChangeHandler} tabIndex="1">
          <option key="select">choose a topic</option>
          <option key="selectAll" value="">
            all
          </option>
          {topics.map((topic) => {
            return <option key={topic.slug}>{topic.slug}</option>;
          })}
        </select>
        {"  "}
        <button tabIndex="2">submit</button>
      </form>

      <form id="sort">
        <input
          type="radio"
          name="sortBy"
          value="created_at"
          tabIndex="3"
          onChange={orderChangeHandler}
        />
        <label htmlFor="created_at">date created</label>
        <input
          type="radio"
          name="sortBy"
          value="comment_count"
          tabIndex="4"
          onChange={orderChangeHandler}
        />
        <label htmlFor="comment_count">comments</label>
        <input
          type="radio"
          name="sortBy"
          value="votes"
          tabIndex="5"
          onChange={orderChangeHandler}
        />
        <label htmlFor="votes">votes</label>
        <label
          aria-label="ascending or descending"
          tabIndex="6"
          onClick={() => {
            clickHandler();
          }}
        >
          <img src={sortOrder[1]} height="22px" alt="sort order"></img>
        </label>
      </form>
    </section>
  );
};
export default SortAndFilter;
