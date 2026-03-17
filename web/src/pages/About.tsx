import gameGif from '../assets/giphy.gif'; 

const About = () => (
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter">
          We build <br/><span className="text-primary">New Realities.</span>
        </h1>
        <p className="text-slate-400 text-lg">
          NipiVerse Studios is home to creators who believe that games are the highest form of art. 
          We combine modern technology with storytelling that touches the soul.
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
            <h4 className="text-white font-black text-2xl">10+</h4>
            <p className="text-slate-500 text-xs uppercase font-bold">Games Released</p>
          </div>
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
            <h4 className="text-white font-black text-2xl">1M+</h4>
            <p className="text-slate-500 text-xs uppercase font-bold">Active Players</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 aspect-video rounded-3xl border border-slate-800 relative flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
  
  <img 
    src={gameGif} 
    alt="Nipiverse Showcase" 
    className="w-full h-full object-cover relative z-10" 
  />
</div>
    </div>
  </div>
);

export default About;