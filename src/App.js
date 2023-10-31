// DEPENDENCIES

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

// PAGES
import Home from "./Pages/Home";
// import Edit from "./Pages/Edit";
// import Error from "./Pages/ErrorPage";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import About from "./Pages/About"
import Landing from "./Components/Landing";

function App() {
  return (

    <div className="App">
      <Router>
//         <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/users" element={<Index />} />
            <Route path="/users/new" element={<New />} />
            <Route exact path="/users/:id" element={<Show />} />
            <Route path="/users/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} /> */}
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
