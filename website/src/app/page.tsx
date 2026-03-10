import { ScrollProgress } from "@/components/motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <UseCases />
        <Pricing />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
