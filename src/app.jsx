import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TodoList from "./pages/ToDoList";
import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/ToDoList" element={<TodoList />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
