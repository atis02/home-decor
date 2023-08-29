import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./component/footer/Footer";
import Catalogs from "./pages/catalog/catalogs";
import NotFound from "./component/NotFound";
import BaseApiImage from "./pages/home/BaseApiImage";
import Shopping from "./pages/home/Shopping";
import ApiImage from "./pages/catalog/ApiImage";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/catalogs" element={<Catalogs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/paintings" element={<BaseApiImage />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/paintings/:id" element={<ApiImage />} />
        </Routes>
      <Footer />
    </>
  );
}
export default App;