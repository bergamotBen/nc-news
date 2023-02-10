import cross from "../assets/cross.png";
const NotFound = () => {
  return (
    <main id="notFound">
      <img src={cross} alt="" size="30px" />
      <h1>that doesn't exist</h1>
      <img src={cross} alt="" size="30px" />
    </main>
  );
};
export default NotFound;
