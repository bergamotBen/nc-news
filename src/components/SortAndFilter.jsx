import { useState } from "react";
const SortAndFilter = () => {
  const [sortOrder, setSortOrder] = useState(["DESC", " ⬇️ "]);
  // ⬇️
  const clickHandler = () => {
    if (sortOrder[0] === "DESC") {
      setSortOrder(["ASC", " ⬆️ "]);
      console.log(sortOrder[0]);
    } else if (sortOrder[0] === "ASC") {
      setSortOrder(["DESC", " ⬇️ "]);
      console.log(sortOrder[0]);
    }
  };
  return (
    <section id="sortAndFilter">
      <h3>sort and filter</h3>
      <form>
        <input type="radio" name="sortBy" value="createdAt" />
        <label htmlFor="createdAt">created at</label>
        <input type="radio" name="sortBy" value="comments" />
        <label htmlFor="comments">comments</label>
        <input type="radio" name="sortBy" value="votes" />
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
