import React from "react";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";

import BlobAnimation from "./components/BlobAnimation";
import Hero from "./pages/Hero";
import Product from "./pages/Product";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="absolute w-screen h-screen">
          <BlobAnimation />
        </header>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:cocktailId" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
