import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
// import Articles from "./Components/Articles";
import GetAllArticles from "./Components/getAllArticles";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/articles" element={<GetAllArticles />} />
      </Routes>
    </div>
  );
}

export default App;
