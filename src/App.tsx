import { Component, useEffect } from "react";
import { HashRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Brand } from "./pages/Brand";
import { CV } from "./pages/CV";
import { Contact } from "./pages/Contact";

/** Returns every new page to the top, as a native site would. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/** HashRouter is used so deep links work on GitHub Pages without server rewrites. */
export class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop />
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    );
  }
}
