import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieSearchApp from "./components/MovieSearchApp";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieSearchApp />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
