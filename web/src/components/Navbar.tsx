import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import logoImage from "../assets/iconimage.png";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, targetPath: string) => {
    if (location.pathname === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Studio", path: "/teams" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-[100] border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-2 font-black text-xl tracking-tighter text-white z-[110]"
        >
          <img
            src={logoImage}
            alt="NipiVerse Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span>
            NipiVerse Studio<span className="text-purple-500">.</span>
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[110] p-2"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        <div
          className={`
          fixed inset-0 bg-[#020617] flex flex-col items-center justify-start pt-32 gap-8 transition-all duration-500 ease-in-out
          md:static md:inset-auto md:bg-transparent md:flex-row md:pt-0 md:opacity-100 md:translate-x-0
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 md:opacity-100"}
          z-[105]
        `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`text-base md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                location.pathname === link.path
                  ? "text-purple-500"
                  : "text-slate-200 md:text-slate-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 md:ml-4 md:border-l md:border-slate-800 md:pl-6 w-full md:w-auto px-10 md:px-0">
            {isAuthenticated && (
              <Link
                to="/create-blog"
                onClick={(e) => handleNavClick(e, "/create-blog")}
                className="w-full md:w-auto text-center px-6 py-4 md:py-2 bg-purple-600 text-white border border-purple-500 rounded-xl text-xs font-black tracking-widest"
              >
                + CREATE POST
              </Link>
            )}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-sm md:text-[10px] font-black text-slate-200 md:text-slate-500 hover:text-white tracking-widest uppercase"
              >
                LOGOUT
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm md:text-[10px] font-black text-slate-200 md:text-slate-500 hover:text-white tracking-widest uppercase"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
