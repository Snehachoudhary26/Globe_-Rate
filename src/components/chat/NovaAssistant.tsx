"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageSquare, X, Send, Sparkles, Camera, Image as ImageIcon, RotateCcw, AlertTriangle, ShieldCheck } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "nova";
  text: string;
  image?: string;
  time: string;
}

export default function NovaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "nova",
      text: "👋 Hi! I'm Nova, your Global Travel Finance AI. Upload an ATM screen photo or ask me about foreign exchange rates, cash limits, and scam detection.",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      // Audio not permitted without interaction
    }
  };

  const handleToggle = () => {
    if (!isOpen) playPopSound();
    setIsOpen(!isOpen);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG, JPG, WEBP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    // Reset file input
    e.target.value = "";
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "nova",
        text: "Chat cleared. What can I help you calculate or verify?",
        time: "Just now",
      },
    ]);
  };

  const handleSend = async (customText?: string) => {
    const textToSend = customText !== undefined ? customText : input;
    if (!textToSend.trim() && !selectedImage) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: textToSend.trim() || (selectedImage ? "📷 Scanned Travel Photo / ATM Screen" : ""),
      image: selectedImage || undefined,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    const imagePayload = selectedImage;
    setSelectedImage(null);
    setIsTyping(true);

    try {
      const response = await fetch("/api/nova/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          image: imagePayload,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await response.json();
      const replyText =
        data.success && data.reply
          ? data.reply
          : "I analyzed your query, but could not retrieve current rate details. Always decline ATM conversion rates to stay safe!";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "nova",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      playPopSound();
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "nova",
          text: "⚠️ Offline fallback: Always decline ATM conversion rates ('Continue Without Conversion') to let your home bank convert at fair mid-market rates.",
          time: "Just now",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[360px] sm:w-[420px] bg-[#FAF8F6] rounded-3xl shadow-[0_25px_60px_rgba(73,38,63,0.25)] border border-[#DDD7D0] overflow-hidden flex flex-col h-[540px] animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#49263F] p-4 px-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/25 backdrop-blur-sm shadow-inner">
                <Sparkles className="text-white" size={19} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-white text-lg tracking-tight">Nova AI</h3>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full">
                    Vision 2.0
                  </span>
                </div>
                <p className="text-white/80 text-xs font-semibold flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Institutional Currency Agent
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Reset Conversation"
                className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={handleToggle}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAF8F6]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#49263F] text-white rounded-br-none shadow-md"
                      : "bg-white text-[#29252B] border border-[#DDD7D0] rounded-bl-none shadow-sm"
                  }`}
                >
                  {/* Attached Image Thumbnail */}
                  {msg.image && (
                    <div className="relative w-full h-36 rounded-xl overflow-hidden mb-2 border border-white/20 bg-black/10">
                      <Image
                        src={msg.image}
                        alt="Uploaded Scan"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="whitespace-pre-line font-medium">
                    {msg.text}
                  </div>
                  <div
                    className={`text-[10px] font-bold mt-1 text-right ${
                      msg.role === "user" ? "text-white/60" : "text-[#8A7B85]"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#DDD7D0] p-3.5 px-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#49263F] rounded-full animate-bounce"></span>
                  <span
                    className="w-2 h-2 bg-[#49263F] rounded-full animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-[#49263F] rounded-full animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  ></span>
                  <span className="text-xs font-bold text-[#8A7B85] ml-1">
                    Nova is analyzing rates...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-4 py-2 bg-[#FAF8F6] border-t border-[#DDD7D0]/60 flex gap-1.5 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1 whitespace-nowrap px-3 py-1 bg-white hover:bg-[#EFECE8] text-[#49263F] text-xs font-black rounded-full border border-[#DDD7D0] shadow-2xs transition-colors"
            >
              <Camera size={13} /> Scan ATM Photo
            </button>
            <button
              onClick={() => handleSend("How do I avoid ATM conversion scams?")}
              className="whitespace-nowrap px-3 py-1 bg-white hover:bg-[#EFECE8] text-[#49263F] text-xs font-black rounded-full border border-[#DDD7D0] shadow-2xs transition-colors"
            >
              🛡️ Avoid ATM Fees
            </button>
            <button
              onClick={() => handleSend("Dubai cash limits & UPI payment rules")}
              className="whitespace-nowrap px-3 py-1 bg-white hover:bg-[#EFECE8] text-[#49263F] text-xs font-black rounded-full border border-[#DDD7D0] shadow-2xs transition-colors"
            >
              🇦🇪 Dubai Rules
            </button>
            <button
              onClick={() => handleSend("Japan cash and 7-Eleven foreign ATMs")}
              className="whitespace-nowrap px-3 py-1 bg-white hover:bg-[#EFECE8] text-[#49263F] text-xs font-black rounded-full border border-[#DDD7D0] shadow-2xs transition-colors"
            >
              🇯🇵 Japan ATMs
            </button>
          </div>

          {/* Image Upload Preview Bar */}
          {selectedImage && (
            <div className="px-4 py-2 bg-[#EFECE8] border-t border-[#DDD7D0] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#DDD7D0]">
                  <Image src={selectedImage} alt="Scan preview" fill className="object-cover" />
                </div>
                <span className="text-xs font-bold text-[#29252B]">
                  ATM / Receipt Photo Ready
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-[#8A7B85] hover:text-[#29252B] p-1 rounded-full hover:bg-black/5"
              >
                <X size={15} />
              </button>
            </div>
          )}

          {/* Input Form */}
          <div className="p-3 bg-white border-t border-[#DDD7D0]">
            <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                className="hidden"
              />

              {/* Camera / Upload Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Upload ATM screen or receipt photo"
                className="p-2.5 rounded-xl border border-[#DDD7D0] bg-[#FAF8F6] text-[#49263F] hover:bg-[#EFECE8] transition-colors flex-shrink-0"
              >
                <Camera size={18} />
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={selectedImage ? "Add a note or click Send..." : "Ask Nova or upload an ATM photo..."}
                className="flex-1 px-4 py-2.5 bg-[#FAF8F6] border border-[#DDD7D0] rounded-xl text-sm font-medium focus:outline-none focus:border-[#49263F] focus:ring-1 focus:ring-[#49263F] transition-all text-[#29252B] placeholder-[#8A7B85]"
              />

              <button
                type="submit"
                disabled={(!input.trim() && !selectedImage) || isTyping}
                className="p-2.5 bg-[#49263F] text-white rounded-xl hover:bg-[#3B1E33] disabled:opacity-40 disabled:hover:bg-[#49263F] transition-colors flex-shrink-0 shadow-sm"
              >
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="relative">
        {!isOpen && (
          <div
            className="absolute -top-12 right-0 bg-white px-3.5 py-1.5 rounded-2xl rounded-br-none shadow-[0_8px_25px_rgba(73,38,63,0.15)] border border-[#DDD7D0] animate-bounce cursor-pointer flex items-center gap-1.5"
            onClick={handleToggle}
          >
            <Sparkles className="text-[#49263F]" size={14} />
            <p className="text-xs font-black text-[#29252B] whitespace-nowrap">
              Scan ATM / Ask Nova
            </p>
          </div>
        )}
        <button
          onClick={handleToggle}
          className="w-16 h-16 bg-[#49263F] hover:bg-[#3B1E33] text-white rounded-full flex items-center justify-center shadow-[0_12px_35px_rgba(73,38,63,0.35)] hover:scale-105 transition-all border-4 border-[#FAF8F6] relative z-10"
        >
          {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        </button>
      </div>
    </div>
  );
}
