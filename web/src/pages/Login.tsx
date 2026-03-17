import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { loginAdmin } from '../../../api/authService'
const Login = () => {
  const [email, setEmail] = useState('admin@nipiverse.com');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const setLogin = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const adminData = await loginAdmin(email, password);
      setLogin(adminData);
      navigate('/blog'); 
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl">
        <h2 className="text-3xl font-black text-white tracking-tighter mb-2">
          ADMIN <span className="text-purple-500">PORTAL</span>
        </h2>
        <p className="text-slate-400 text-xs font-bold tracking-widest mb-8">
          NipiVerse Studio. Security
        </p>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-xs font-bold p-3 rounded mb-6">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition-colors"
              placeholder="Enter admin12345..."
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase tracking-widest py-4 rounded-lg mt-4 transition-all"
          >
            {isLoading ? 'AUTHENTICATING...' : 'ACCESS DASHBOARD'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;