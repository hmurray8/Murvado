import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import WhyMurvado from "./components/WhyMurvado";
import Process from "./components/Process";
import BigStatement from "./components/BigStatement";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <FeaturedWork />
        <Services />
        <WhyMurvado />
        <Process />
        <BigStatement />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
