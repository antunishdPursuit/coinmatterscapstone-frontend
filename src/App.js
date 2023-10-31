import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Landing from "./Components/Landing";


function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
