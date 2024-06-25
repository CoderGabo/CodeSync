import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ContactPage } from "../pages/ContactPage";
import { PricingPage } from "../pages/PricingPage";


export const AppRouter = () => {
    return (
        <Routes>
          {/* Ruta de inicio de sesión */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      );
}
