import "./App.css";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import ReadArticle from "./components/ReadArticle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Logo />

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/articles/:article_id`} element={<ReadArticle />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
