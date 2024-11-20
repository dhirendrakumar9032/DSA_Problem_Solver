import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProblemList } from './pages/ProblemList';
import { ProblemSolver } from './pages/ProblemSolver';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProblemList />} />
        <Route path="/problem/:id" element={<ProblemSolver />} />
      </Routes>
    </Router>
  );
}

export default App;