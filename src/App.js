import "./App.css";
import { ExamHero } from "./components/ExamHero";
import { Faculty } from "./components/Faculty";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ExamHero />
      <Faculty />
      <Footer />
    </>
  );
}

export default App;
