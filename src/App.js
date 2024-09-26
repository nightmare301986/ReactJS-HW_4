import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </div>
  );

  function NoMatch() {
    return (
      <div class="shadowbox">
        <h1>Страница 404</h1>
        <p>
          <Link to="/">На главную</Link>
        </p>
      </div>
    );
  }
}

export default App;