import { lazy, Suspense } from "react";

import Testimonials from "./sections/Testimonials";
import Achievements from "./sections/Achievements";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const SharedCanvas = lazy(() => import("./components/models/SharedCanvas"));

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <Experience />
    <TechStack />
    <LogoShowcase />
    <FeatureCards />
    <Achievements />
    <Testimonials />
    <Contact />
    <Footer />
    {/* Single shared WebGL canvas that all 3D card previews render into via
        drei's View portals, so we never exceed the browser's WebGL context limit. */}
    <Suspense fallback={null}>
      <SharedCanvas />
    </Suspense>
  </>
);

export default App;
