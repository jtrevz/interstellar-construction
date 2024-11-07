import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Landing from "./pages/Landing";
function App() {
  return (
    <ParallaxProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
