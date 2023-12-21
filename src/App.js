// DEPENDENCIES
import { BrowserRouter as Router } from "react-router-dom";

// Auth
import {AuthWrapper} from "./context/GetUser";

// Layout
import Footer from './layout/footer/Footer';

function App() {

  return (
    <div className="app">
      <Router>
        <AuthWrapper/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
