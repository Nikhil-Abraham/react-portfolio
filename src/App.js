import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="bg-bg_brown scroll-smooth">
      <Navbar />
      <HeroSection />
      <TechStack />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;
