import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home"
import Favorite_todos from "./pages/Favorite-todos";
import Completed_todos from "./pages/Completed-todos";
import Not_Completed_todos from "./pages/Not-Completed-todos";
import All_todos from "./pages/All-todos";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All_todos />} />
        <Route path="/favorite" element={<Favorite_todos />} />
        <Route path="/completed" element={<Completed_todos />} />
        <Route path="/not-completed" element={<Not_Completed_todos />} />
      </Routes>
    </Router>
  );
};

export default App;
