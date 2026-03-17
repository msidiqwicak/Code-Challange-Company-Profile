import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <div id="home" className="bg-slate-950">
      <Hero />

      <div className="bg-slate-950">
        <AboutSection />
        <ProductSection />
      </div>
    </div>
  );
};

export default Home;
