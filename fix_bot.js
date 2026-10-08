const fs = require('fs');
const code = `"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

export default function NovaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi there! I am Nova, your personal travel finance AI. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const playPopSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) {}
  };

  useEffect(() => {
    const timer = setTimeout(() => { setHasGreeted(true); }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const quickQuestions = ["Is Euronet ATM a scam?", "How much is €50 in USD?", "Where is the cheapest ATM?"];

  const handleAsk = (q) => {
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    setIsTyping(true);
    playPopSound();
    
    setTimeout(() => {
      setIsTyping(false);
      let reply = "I'm looking that up for you!";
      if (q.includes("Euronet")) reply = "Euronet ATMs often charge huge hidden markups (up to 12%). I highly recommend finding a local bank ATM instead to avoid the scam!";
      if (q.includes("€50")) reply = "€50 is currently around $54.20 USD at the live mid-market rate.";
      if (q.includes("cheapest ATM")) reply = "Based on your location, the 7-Eleven bank ATM 2 blocks away has the lowest fees (0% markup).";
      
      setMessages(prev => [...prev, { role: 'ai', text: reply }]);
      playPopSound();
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen === false && hasGreeted && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 mb-2 w-48 bg-white p-4 rounded-2xl shadow-2xl border border-purple-100 origin-bottom-right pointer-events-none"
          >
            <div className="absolute -bottom-2 right-6 w-5 h-5 bg-white border-b border-r border-purple-100 transform rotate-45"></div>
            <p className="text-sm font-black text-slate-800 flex items-center gap-2">
              <span className="text-2xl animate-bounce">👋</span> Hi! Need help?
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white/95 backdrop-blur-3xl border border-slate-200 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col h-[500px]"
          >
             <div className="p-4 bg-gradient-to-r from-purple-magenta to-rose-500 text-white flex justify-between items-center shadow-md z-10">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 shadow-inner">
                   <Bot size={20} />
                 </div>
                 <div>
                   <span className="font-black block leading-tight">Nova AI</span>
                   <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Online</span>
                 </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors"><X size={20}/></button>
             </div>
             
             <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 bg-slate-50">
               {messages.map((m, i) => (
                 <div key={i} className={\`max-w-[85%] p-4 rounded-2xl shadow-sm \${m.role === 'ai' ? 'bg-white border border-slate-100 rounded-tl-sm self-start text-slate-800' : 'bg-gradient-to-br from-purple-magenta to-rose-500 text-white rounded-tr-sm self-end'}\`}>
                   <p className="text-sm font-medium leading-relaxed">{m.text}</p>
                 </div>
               ))}
               {isTyping && (
                 <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm self-start p-4 max-w-[80%] flex gap-1 shadow-sm">
                   <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-purple-magenta rounded-full" />
                   <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-purple-magenta rounded-full" />
                   <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-purple-magenta rounded-full" />
                 </div>
               )}
             </div>

             <div className="p-4 border-t border-slate-100 bg-white flex flex-wrap gap-2">
               <p className="w-full text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Ask a question:</p>
               {quickQuestions.map((q, i) => (
                 <button key={i} onClick={() => handleAsk(q)} disabled={isTyping} className="text-xs font-bold text-purple-magenta bg-purple-50 border border-purple-100 px-3 py-2 rounded-full hover:bg-purple-100 hover:scale-[1.02] active:scale-95 transition-all text-left">
                   {q}
                 </button>
               ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => { 
          if (isOpen === false) playPopSound(); 
          setIsOpen(!isOpen); 
          setHasGreeted(false); 
        }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-magenta to-rose-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(211,169,255,0.8)] hover:scale-110 hover:rotate-12 transition-all relative z-50 border-4 border-white"
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </button>
    </div>
  );
}`;
fs.writeFileSync('src/components/chat/NovaAssistant.tsx', code);
