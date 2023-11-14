// DEPENDENCIES

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

// PAGES
import Home from "./Pages/Home";
// import Edit from "./Pages/Edit";
// import Error from "./Pages/ErrorPage";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import LandingNavBar from "./Components/Landing/LandingNavBar";
import About from "./Pages/About"
import Landing from "./Components/Landing/Landing";
import Register from "./Components/Landing/Register";
import LogIn from "./Components/Landing/LogIn";
import SearchBar from "./Components/SearchBar"

function App() {
  const [sharedData, setSharedData] = useState({})

  const updateData = newData => {
    setSharedData(newData);
  };

  return (
    <div className="app">
      <Router>
        <main>
          <LandingNavBar></LandingNavBar>
          <Routes>
            <Route path="/" element={<Landing sharedData={sharedData}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/search" element={<SearchBar sharedData={sharedData} updateData={updateData}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn sharedData={sharedData} updateData={updateData}/>} />
          </Routes>
        </main>
        <section>

        </section>
      </Router>
    </div>
  );
}

export default App;
