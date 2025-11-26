import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./components/Gallery";
import Motion from "./pages/Motion";
import { FilterProvider } from './context/FilterContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <FilterProvider>
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/gallery/:filter" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/motion" element={<Motion />} />
        </Routes>
      </main>

      <footer>{/* Footer */}</footer>
    </FilterProvider>
  );
}

export default App;
