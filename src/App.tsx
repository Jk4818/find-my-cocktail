import React from "react";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";

import BlobAnimation from "./components/BlobAnimation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Product from "./pages/Product";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Router>
        <header className="fixed w-screen h-screen">
          <BlobAnimation />
        </header>
        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:cocktailId" element={<Product />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
