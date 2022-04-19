import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Articles />
    </div>
  );
}

export default App;
