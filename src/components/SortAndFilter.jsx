import { useState } from "react";
const SortAndFilter = ({ setOrderQueries }) => {
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
  return (
    <section id="sortAndFilter">
      <h3>sort and filter</h3>
      <form>
        <p>sort</p>
        <input
          type="radio"
          name="sortBy"
          value="created_at"
          onChange={changeHandler}
        />
        <label htmlFor="created_at">created at</label>
        <input
          type="radio"
          name="sortBy"
          value="comment_count"
          onChange={changeHandler}
        />
        <label htmlFor="comment_count">comments</label>
        <input
          type="radio"
          name="sortBy"
          value="votes"
          onChange={changeHandler}
        />
        <label htmlFor="votes">votes</label>
        <label
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
