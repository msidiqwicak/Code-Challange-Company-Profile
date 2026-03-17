import pixelHero from "../assets/image1.gif"

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
   
        <div className="relative order-2 lg:order-1">
          <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors"></div>
            <img 
  src={pixelHero} 
  alt="Nipi Studio"
  className="absolute inset-0 w-full h-full object-cover" 
/>
          </div>
         
          <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full"></div>
        </div>

     
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-white">
            Behind the <span className="text-purple-500">Pixels</span>
          </h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            NipiVerse Studios is not just a place where code is written, but a place where new worlds are created. We focus on developing games with innovative mechanics and deep, immersive narratives
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-500/20 p-1 rounded border border-purple-500/30">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Performance First</h4>
                <p className="text-slate-500 text-xs">High frame-rate optimization for a smooth and seamless experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-500/20 p-1 rounded border border-purple-500/30">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Community</h4>
                <p className="text-slate-500 text-xs">Listening to player feedback for every game update</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;