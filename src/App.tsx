import React from "react";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";

import BlobAnimation from "./components/BlobAnimation";
import Layout from "./components/Layout";
import NotFound from "./pages/404";
import Hero from "./pages/Hero";
import Product from "./pages/Product";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className="fixed w-screen h-screen">
          <BlobAnimation />
        </div> */}

        <Layout>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:cocktailId" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

      </Router>
    </div>
  );
}

export default App;
