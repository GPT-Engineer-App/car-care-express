import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Packages from "./pages/Packages.jsx";
import NewProducts from "./pages/NewProducts.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import CarTowels from "./pages/CarTowels.jsx";
import ExteriorProducts from "./pages/ExteriorProducts.jsx";
import InteriorProducts from "./pages/InteriorProducts.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/new-products" element={<NewProducts />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/car-towels" element={<CarTowels />} />
        <Route path="/exterior-products" element={<ExteriorProducts />} />
        <Route path="/interior-products" element={<InteriorProducts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
