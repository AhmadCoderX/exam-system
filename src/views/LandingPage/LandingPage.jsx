import React from "react";
import { ExamHero } from "../../components/ExamHero";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { Faculty } from "../../components/Faculty";
import { Footer } from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ExamHero />
      <Faculty />
      <Footer />
    </>
  );
};

export default LandingPage;
