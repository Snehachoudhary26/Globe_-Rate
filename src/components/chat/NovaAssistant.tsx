"use client";
import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

export default function NovaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'nova', text: string}[]>([
    { role: 'nova', text: "Hi! I'm Nova. I can help you spot ATM scams, translate menus, and track your travel budget. What do you need?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const playPopSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggle = () => {
    if (!isOpen) playPopSound();
    setIsOpen(!isOpen);
  };

  const handleAsk = (query: string) => {
    if (!query.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I'm analyzing that for you now...";
      if (query.toLowerCase().includes("scam") || query.toLowerCase().includes("atm")) {
        reply = "Always decline the ATM's conversion rate! Choose 'Continue Without Conversion' to let your own bank handle the exchange rate. This saves you 8-12% immediately.";
      } else if (query.toLowerCase().includes("budget")) {
        reply = "You currently have $4,250 USD remaining in your Euro Trip budget. Your average daily spend is $140.";
      }
      setMessages(prev => [...prev, { role: 'nova', text: reply }]);
      setIsTyping(false);
      playPopSound();
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-black text-white text-lg leading-tight">Nova AI</h3>
                <p className="text-indigo-100 text-xs font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={handleToggle} className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none shadow-md' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm'}`}>
                  <p className="leading-relaxed font-medium">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: "0.15s"}}></span>
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: "0.3s"}}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide">
              {["How do I avoid ATM fees?", "Check my budget"].map((q, i) => (
                <button key={i} onClick={() => handleAsk(q)} disabled={isTyping} className="whitespace-nowrap px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full border border-indigo-100 dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors">
                  {q}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Nova anything..." className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white" />
              <button type="submit" disabled={!input.trim() || isTyping} className="absolute right-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="relative">
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl rounded-br-none shadow-lg border border-slate-200 dark:border-slate-700 animate-bounce cursor-pointer" onClick={handleToggle}>
            <p className="text-xs font-black text-slate-700 dark:text-slate-200 whitespace-nowrap flex items-center gap-2">
              👋 Hi! Need help?
            </p>
          </div>
        )}
        <button onClick={handleToggle} className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-indigo-500/50 transition-all border-4 border-white dark:border-slate-900 relative z-10">
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </button>
      </div>
    </div>
  );
}
