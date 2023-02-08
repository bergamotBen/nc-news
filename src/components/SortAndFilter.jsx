import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SortAndFilter = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState("choose a topic");
  const navigateTo = useNavigate();

  const changeHandler = (e) => {
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
      <h3>sort and filter</h3>

      <form onSubmit={submitHandler}>
        <select onChange={changeHandler}>
          <option key="select" selected="selected">
            choose a topic
          </option>
          <option key="selectAll" value="">
            all
          </option>
          {topics.map((topic) => {
            return <option key={topic.slug}>{topic.slug}</option>;
          })}
        </select>

        <button>submit</button>
      </form>
    </section>
  );
};
export default SortAndFilter;
