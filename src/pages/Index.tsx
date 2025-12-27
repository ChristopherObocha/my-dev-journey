import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
