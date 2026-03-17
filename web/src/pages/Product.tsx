import React, { useState } from "react";
import { PRODUCTS } from "./gameData";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = PRODUCTS.filter((p) => {
    return (
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
          Our <span className="text-purple-500">Games</span>
        </h2>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search games or genre..."
            className="w-full bg-slate-900 border border-slate-800 p-4 pl-12 rounded-xl text-xs font-bold text-white outline-none focus:border-purple-500 transition-all placeholder:text-slate-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-12">
          {filteredProducts.map((p, i) => (
            <div
              key={i}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.2em]">
                  {p.type}
                </span>

                <h3 className="text-xl font-bold text-white mt-1 mb-3 tracking-tight">
                  {p.name}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                  {p.desc}
                </p>

                <button className="w-full text-[10px] cursor-pointer font-black uppercase tracking-widest py-3 border border-slate-700 rounded-lg hover:bg-white hover:text-black transition-all">
                  Get Game Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-slate-800 rounded-3xl">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            No games found for "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
