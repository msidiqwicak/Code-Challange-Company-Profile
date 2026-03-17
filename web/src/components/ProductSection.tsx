import { Link } from "react-router-dom";
import football from "../assets/football.jpg";
import rpg from "../assets/rpg.jpg";
import quest from "../assets/peakpx1.jpg";
import racing from "../assets/racing.webp";
const ProductSection = () => {
  const featuredGames = [
    {
      title: "Super Football",
      genre: "Sports",
      image: football,
    },
    {
      title: "2D Horizon",
      genre: "Action RPG",
      image: rpg,
    },
    {
      title: "Retro Quest",
      genre: "Action Platformer",
      image: quest,
    },
    {
      title: "2D Pixel Cars",
      genre: "Futuristic Racing",
      image: racing,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:gap-20">
      <div className="flex justify-between items-end mb-10 ">
        <div>
          <h2 className="text-3xl font-black uppercase text-white tracking-tight">
            Latest <span className="text-purple-500">Releases</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Ready for new adventure?
          </p>
        </div>

        <Link
          to="/products"
          className="text-xs font-bold text-purple-400 hover:text-purple-300 transition uppercase tracking-widest flex items-center gap-1 border-b border-purple-400/30 pb-1"
        >
          Explore All Games
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 lg:px-30 sm:gap-10">
        {featuredGames.map((game, idx) => (
          <div
            key={idx}
            className="group relative h-64 md:h-80 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl"
          >
            <img
              src={game.image}
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] mb-1">
                {game.genre}
              </span>

              <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight">
                {game.title}
              </h3>

              <button className="w-fit px-6 py-2.5 bg-white text-black text-[10px] font-black rounded-lg md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 cursor-pointer uppercase tracking-tighter">
                GET GAME
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
