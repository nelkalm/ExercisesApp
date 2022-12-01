import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import { useState } from "react";

import Nav from "./components/Nav";

function App() {
  const [exercise, setExercise] = useState([]);

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
            <Route
              path="/"
              element={<HomePage setExercise={setExercise} />}
              exact
            />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/edit" element={<EditPage exercise={exercise} />} />
          </Routes>
        </main>
        <footer>&copy; 2022 Nelson Lu</footer>
      </Router>
    </>
  );
}

export default App;
