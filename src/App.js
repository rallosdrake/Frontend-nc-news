import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

import AllArticles from "./Components/AllArticles";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/articles" element={<AllArticles />} />
      </Routes>
    </div>
  );
}

export default App;
