import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
// import Career from "./pages/CareerPage";
// import CareerDetail from "./pages/career/CareerDetails";
// import Error from "./pages/ErrorPage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg">
        <div className="wrapper">
          <Nav />
          <main>
            <Routes>
              <Route exact path="/" element={<Portfolio />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
