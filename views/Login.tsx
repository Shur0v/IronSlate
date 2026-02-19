
import React, { useState } from 'react';
import { Typography, Card, Button, Input } from '../components/UI';

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
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0D1117] to-[#121821]">
      <div className="w-full max-w-sm flex flex-col items-center gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center">
          <img 
            src="https://ironslate.co.uk/assets/logo-aHllsNa3.png" 
            alt="IRON SLATE" 
            className="w-48 h-auto object-contain brightness-125 drop-shadow-[0_0_40px_rgba(61,182,254,0.2)] transition-transform duration-700 hover:scale-105"
          />
        </div>

        <Card className="w-full flex flex-col gap-5 border-[#242E3D]/50 bg-[#121821]/80 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col gap-1 mb-2">
            <Typography.H2 className="!text-lg">Welcome Back</Typography.H2>
            <Typography.Body className="text-xs">Access your training profile</Typography.Body>
          </div>
          
          <Input label="Email Address" placeholder="athlete@ironslate.fit" type="email" />
          <Input label="Password" placeholder="••••••••" type="password" />

          <div className="flex justify-end mt-1">
            <button className="text-[11px] font-bold text-[#3db6fe] uppercase tracking-widest hover:opacity-80 transition-opacity">
              Reset Password
            </button>
          </div>

          <Button isLoading={loading} onClick={handleLogin} className="mt-2">
            SIGN IN
          </Button>
        </Card>

        <footer className="flex flex-col items-center gap-4 text-center mt-4">
          <div className="flex gap-2">
            <Typography.Body className="text-[13px]">Need access?</Typography.Body>
            <button className="text-[13px] font-bold text-[#3db6fe] hover:underline">Apply for Alpha</button>
          </div>
          
          {/* Highlighted Demo Instruction Badge */}
          <div className="px-6 py-2.5 bg-[#3db6fe]/10 rounded-full border border-[#3db6fe]/30 shadow-[0_0_20px_rgba(61,182,254,0.1)] transition-all">
             <span className="text-[10px] font-black text-[#3db6fe] uppercase tracking-[0.15em]">
               Use any ID / Password to Login
             </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
