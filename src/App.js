// DEPENDENCIES

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

// PAGES
import Results from "./Pages/Results";

// COMPONENTS
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Landing from "./Components/Landing/Landing";
import Register from "./Components/Landing/Register";
import LogIn from "./Components/Landing/LogIn";
import SearchBar from "./Pages/Search";

function App() {
  const [sharedData, setSharedData] = useState({});

  const updateData = (newData) => {
    setSharedData(newData);
  };

  return (
    <div className="app">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Landing sharedData={sharedData} />} />
            <Route path="/aboutUs" element={<About />} />
            <Route
              path="/search"
              element={
                <>
                  <NavBar />{" "}
                  <SearchBar sharedData={sharedData} updateData={updateData} />
                </>
              }
            />
            <Route
              path="/search-results/:query"
              element={
                <>
                  <Results />
                </>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <LogIn sharedData={sharedData} updateData={updateData} />
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
