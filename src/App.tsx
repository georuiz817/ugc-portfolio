import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Reviews />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}