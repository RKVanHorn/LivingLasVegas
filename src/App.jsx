import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
//import Layout from "./components/Layout";
//import { Outlet } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Form from "react-bootstrap/Form";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Birding from "./pages/Birding/Birding";
import FAQs from "./pages/FAQs";
import "bootswatch/dist/lux/bootstrap.min.css";

/**This is where I have my routes set up */

function App() {
  const [runConfetti, setRunConfetti] = React.useState(false);
  const { width, height } = useWindowSize();
  const toggleConfetti = () => {
    setRunConfetti(!runConfetti);
  };

  return (
    <BrowserRouter>
      <Hero />
      <Navigation />
      <Form className="m-3">
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label={runConfetti ? "Enough confetti!" : "Give me confetti!"}
          onClick={toggleConfetti}
        />
      </Form>
      {runConfetti && (
        <Confetti numberOfPieces={700} width={width} height={height} />
      )}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="birding" element={<Birding />} />
        <Route path="faqs" element={<FAQs />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
