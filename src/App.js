import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import TopicButtons from "./Components/Topicbuttons";
import ArticleByTopic from "./Components/ArticleByTopic";
import AllArticles from "./Components/AllArticles";
import ViewArticles from "./Components/ViewArticles";
import ViewComments from "./Components/ViewComments";
function App() {
  return (
    <div className="box">
      <div className="App">
        <Header />
        <TopicButtons />
        <ViewArticles />
        <ViewComments />
        <Routes>
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:topic_slug" element={<ArticleByTopic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
