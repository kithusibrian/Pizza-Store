import "./App.css";
import Menu from "./pages/Menu";

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/menu" Component={Menu} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
