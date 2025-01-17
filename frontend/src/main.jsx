import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AssetsForDesign from "./pages/Assets";
import HomePage from "./pages/Home/Home";
import AboutUs from "./pages/About/HeroAbout";
import ContactSection from "./pages/Contact/ContactHero";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactSection/>}/>
          <Route path="/our/assets" element={<AssetsForDesign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
