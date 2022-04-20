import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ArticleByTopic from "./Components/ArticleByTopic";
import AllArticles from "./Components/AllArticles";
function App() {
  return (
    <div className="box">
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:topic_slug" element={<ArticleByTopic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
