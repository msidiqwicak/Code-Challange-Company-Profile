import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/iconimage.png";

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, targetPath: string) => {
    if (location.pathname === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white mb-6"
            >
              <img src={logoImage} alt="NipiVerse Logo" className="w-10 h-10" />
              <span>
                NipiVerse Studio<span className="text-purple-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Crafting immersive digital experiences and failed diving headers
              since 2026. Join the verse.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={(e) => handleNavClick(e, "/")}
                  className="text-slate-400 hover:text-purple-500 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  onClick={(e) => handleNavClick(e, "/products")}
                  className="text-slate-400 hover:text-purple-500 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  Our Games
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={(e) => handleNavClick(e, "/about")}
                  className="text-slate-400 hover:text-purple-500 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  onClick={(e) => handleNavClick(e, "/blog")}
                  className="text-slate-400 hover:text-purple-500 transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Connect
            </h4>
            <div className="flex gap-5">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-[#FF0000] transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-[#5865F2] transition-all"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 NIPIVERSE STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-purple-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
