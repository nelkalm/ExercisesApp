import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";

import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>YouTrain</h1>
          <p>Track Your Performance</p>
        </header>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/edit" element={<EditPage />} />
          </Routes>
        </main>
        <footer>&copy; 2022 Nelson Lu</footer>
      </Router>
    </>
  );
}

export default App;
