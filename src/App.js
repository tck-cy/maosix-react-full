import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import LoginPage from "./pages/LoginPage";
import ExcelImportPage from "./pages/ExcelImportPage";
import PurchaseReportsPage from "./pages/PurchaseReportsPage";
import SalesReportsPage from "./pages/SalesReportsPage";
import CareProceduresPage from "./pages/CareProceduresPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/excel-import" element={<ExcelImportPage />} />
        <Route path="/purchase-reports" element={<PurchaseReportsPage />} />
        <Route path="/sales-reports" element={<SalesReportsPage />} />
        <Route path="/care-procedures" element={<CareProceduresPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
