const SortAndFilter = ({ topics }) => {
  return (
    <section id="sortAndFilter">
      <h3>sort and filter</h3>

      <form>
        <select>
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
