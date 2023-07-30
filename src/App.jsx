import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Birding from "./pages/Birding/Birding";
import FAQs from "./pages/FAQs";
import "bootswatch/dist/lux/bootstrap.min.css";

/**This is where I have my routes set up */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="birding" element={<Birding />} />
          <Route path="faqs" element={<FAQs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
