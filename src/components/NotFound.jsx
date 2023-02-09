import cross from "../assets/cross.png";
const NotFound = () => {
  return (
    <main id="home">
      <h1>
        <img src={cross} alt="" size="30px" />
        that doesn't exist
        <img src={cross} alt="" size="30px" />
      </h1>
    </main>
  );
};
export default NotFound;
