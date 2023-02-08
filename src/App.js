import "./App.css";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import ReadArticle from "./components/ReadArticle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="App">
      <Logo />

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/articles`} element={<Home />} />
        <Route path={`/articles/:article_id`} element={<ReadArticle />} />
      </Routes>
    </section>
  );
}

export default App;
