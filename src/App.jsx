import Discounts from "./components/Discounts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Stores from "./components/Stores";
import FabioS from "./pages/Fabios";
import Fraganza from "./pages/Fraganza";
import Skala from "./pages/Skala";
import ProductDetail from "./pages/ProductDetail";
import {
  ProductosFabios,
  SkalaProductos,
  FraganzaProductos,
} from "./constants";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ContactSection from "./components/Contact";

const App = () => {
  const allProducts = [
    ...ProductosFabios,
    ...SkalaProductos,
    ...FraganzaProductos,
  ];
  return (
    <BrowserRouter>
      <Navbar products={allProducts} />
      <div className="max-w-7xl mx-auto pt-0 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/store/FabioS" element={<FabioS />} />
          <Route path="/store/Fraganza" element={<Fraganza />} />
          <Route path="/store/Skala" element={<Skala />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route
            path="/product/:id"
            element={<ProductDetail products={allProducts} />}
          />
        </Routes>
        <FooterConditional />
      </div>
    </BrowserRouter>
  );
};

const FooterConditional = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return <Footer />;
};

export default App;
