import { Component } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

/** HashRouter is used so deep links work on GitHub Pages without server rewrites. */
export class App extends Component {
  render() {
    return (
      <HashRouter>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    );
  }
}
