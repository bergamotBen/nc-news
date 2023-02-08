import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SortAndFilter = ({ setOrderQueries, topics }) => {
  const [sortOrder, setSortOrder] = useState(["DESC", " ⬇️ "]);
  const [orderBy, setOrderBy] = useState("");

  const clickHandler = () => {
    if (sortOrder[0] === "DESC") {
      setOrderQueries([orderBy, "ASC"]);
      setSortOrder(["ASC", " ⬆️ "]);
    } else if (sortOrder[0] === "ASC") {
      setOrderQueries([orderBy, "DESC"]);
      setSortOrder(["DESC", " ⬇️ "]);
    }
  };

  const changeHandler = (e) => {
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
        <select onChange={selectChangeHandler} tabindex="1">
          <option key="select">choose a topic</option>
          <option key="selectAll" value="">
            all
          </option>
          {topics.map((topic) => {
            return <option key={topic.slug}>{topic.slug}</option>;
          })}
        </select>
        <button tabindex="2">submit</button>
      </form>

      <form id="sort">
        <input
          type="radio"
          name="sortBy"
          value="created_at"
          tabindex="3"
          onChange={changeHandler}
        />
        <label htmlFor="created_at">date created</label>
        <input
          type="radio"
          name="sortBy"
          value="comment_count"
          tabindex="4"
          onChange={changeHandler}
        />
        <label htmlFor="comment_count">comments</label>
        <input
          type="radio"
          name="sortBy"
          value="votes"
          tabindex="5"
          onChange={changeHandler}
        />
        <label htmlFor="votes">votes</label>
        <label
          aria-label="ascending or descending"
          tabindex="6"
          onClick={() => {
            clickHandler();
          }}
        >
          {sortOrder[1]}
        </label>
      </form>
    </section>
  );
};
export default SortAndFilter;
