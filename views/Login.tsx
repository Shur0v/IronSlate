
import React, { useState } from 'react';
import { Typography, Card, Button, Input } from '../components/UI';
import { Mail, Lock, Eye } from 'lucide-react';

export const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-[#0D1117]">
      <div className="w-full max-w-sm flex flex-col items-center gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center">
          <img 
            src="https://ironslate.co.uk/assets/logo-aHllsNa3.png" 
            alt="IRON SLATE" 
            className="w-48 h-auto object-contain brightness-125 drop-shadow-[0_0_40px_rgba(61,182,254,0.2)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Login Card with High-Impact Structured Background */}
        <div className="w-full relative overflow-hidden rounded-[24px] border border-[#242E3D] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Enhanced Texture Layer */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-60"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&q=80&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(1) contrast(1.2)'
            }}
          />
          
          {/* Gradient Overlay for Legibility */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#121821]/80 via-[#121821]/90 to-[#121821] pointer-events-none" />
          
          <Card className="relative z-10 w-full flex flex-col gap-6 !bg-transparent !border-none !p-8 backdrop-blur-[2px]">
            <div className="flex flex-col items-center gap-1 mb-2 text-center">
              <Typography.H2 className="!text-2xl font-black tracking-tight text-white">Welcome Back</Typography.H2>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-[#6B7280] uppercase tracking-[0.1em] ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" size={18} />
                  <input 
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-[#0D1117]/60 border border-[#242E3D] text-[#E6EDF3] rounded-[14px] h-12 pl-12 pr-4 focus:outline-none focus:border-[#3db6fe] transition-all placeholder:opacity-30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black text-[#6B7280] uppercase tracking-[0.1em] ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" size={18} />
                  <input 
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#0D1117]/60 border border-[#242E3D] text-[#E6EDF3] rounded-[14px] h-12 pl-12 pr-12 focus:outline-none focus:border-[#3db6fe] transition-all placeholder:opacity-30"
                  />
                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] cursor-pointer" size={18} />
                </div>
              </div>
            </div>

            <Button isLoading={loading} onClick={handleLogin} className="mt-2 !h-14 !text-lg !bg-[#3db6fe] !rounded-[16px] shadow-xl shadow-[#3db6fe]/20">
              Sign In
            </Button>

            <div className="flex flex-col items-center gap-6 mt-2">
              <button className="text-[13px] font-semibold text-[#9AA4B2] hover:text-[#3db6fe] transition-colors tracking-wide">
                Forgot your password?
              </button>
              
              <div className="flex items-center gap-2">
                <Typography.Body className="text-[13px]">Don't have an account?</Typography.Body>
                <button className="text-[13px] font-bold text-[#3db6fe] hover:underline">Sign up</button>
              </div>
            </div>
          </Card>
        </div>

        <footer className="flex flex-col items-center gap-6 text-center mt-4">
          {/* Highlighted Demo Instruction Badge */}
          <div className="px-8 py-3 bg-[#3db6fe]/10 rounded-full border border-[#3db6fe]/30 shadow-[0_0_25px_rgba(61,182,254,0.15)] transition-all">
             <span className="text-[11px] font-black text-[#3db6fe] uppercase tracking-[0.25em]">
               Use any ID / Password to Login
             </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
