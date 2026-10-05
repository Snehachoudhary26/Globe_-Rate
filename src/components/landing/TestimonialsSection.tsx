"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aditi Sharma",
      role: "Solo Traveler",
      text: "GlobeRate's Scam Detector literally saved me ₹12,000 at the Bangkok airport. The booth was hiding an 11% markup!",
      bg: "bg-pale-aqua",
      accent: "text-sea-green"
    },
    {
      name: "Rahul Verma",
      role: "Digital Nomad",
      text: "The Budget River feature is insane. It's the first time I actually understand how much I'm spending across 3 different European currencies.",
      bg: "bg-soft-cream",
      accent: "text-amber-500"
    },
    {
      name: "Priya Patel",
      role: "Exchange Student",
      text: "I love the Price Anchor! Seeing that a ¥1,200 meal in Tokyo is just '1 Domino's Pizza' immediately stopped me from overthinking.",
      bg: "bg-pale-purple",
      accent: "text-purple-magenta"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Loved by global <span className="text-sea-green">travelers.</span>
        </h2>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
          Join thousands of smart travelers who protect their money and travel with confidence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: "spring" }}
            whileHover={{ y: -10 }}
            className={`text-left p-8 rounded-3xl ${t.bg} border border-white shadow-lg relative overflow-hidden`}
          >
            <div className="absolute -top-4 -right-4 text-white opacity-50 transform rotate-12">
              <Star size={100} fill="currentColor" />
            </div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={16} className={t.accent} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-800 font-medium text-lg mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm font-medium text-slate-600">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
