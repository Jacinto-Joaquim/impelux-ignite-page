import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Instructor from "@/components/Instructor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <Instructor />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
