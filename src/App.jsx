import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./components/Gallery";
import Motion from "./pages/Motion";
import { FilterProvider } from './context/FilterContext';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <FilterProvider>
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />\
          <Route path="/motion" element={<Motion />} />\
        </Routes>
      </main>

      <footer>{/* Footer */}</footer>
    </FilterProvider>
  );
}

export default App;
