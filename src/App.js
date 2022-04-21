import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticleByTopic from "./Components/ArticleByTopic";
import AllArticles from "./Components/AllArticles";
import SingleArticle from "./Components/SingleArticle";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="box">
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/:topic_slug" element={<ArticleByTopic />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
