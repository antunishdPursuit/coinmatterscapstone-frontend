import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/users" element={<Index />} />
            <Route path="/users/new" element={<New />} />
            <Route exact path="/users/:id" element={<Show />} />
            <Route path="/users/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
