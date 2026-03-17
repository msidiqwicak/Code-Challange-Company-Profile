import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
          Level Up <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Your Reality
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          NipiVerse Studio is a game development and game design studio focused
          on creating immersive, innovative, and visually stunning games that
          connect players with extraordinary worlds.
        </p>
        <Link
          to="/products"
          className="px-10 py-4 bg-white text-black font-black rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          SUBMIT YOUR GAME
        </Link>
      </div>
    </section>
  );
};

export default Hero;
