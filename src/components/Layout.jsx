import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Form from "react-bootstrap/Form";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

/**Everything that I want to display on all pages is rendered in the Layout component and I used Outlet to show where the rest of the components should render */

export default function Layout() {
  const [runConfetti, setRunConfetti] = React.useState(false);
  const { width, height } = useWindowSize();
  const toggleConfetti = () => {
    setRunConfetti(!runConfetti);
  };

  return (
    <div className="site-wrapper">
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
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
