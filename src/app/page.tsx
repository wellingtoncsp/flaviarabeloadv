import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Approach } from "@/components/Approach";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Approach />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
