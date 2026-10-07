"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Loved by global <span className="text-sea-green">travelers.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* Featured Testimonial with Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group"
        >
          <Image 
            src="/images/testimonial.jpg" 
            alt="Happy traveler" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <div className="flex gap-1 mb-4 text-amber-400">
              {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="currentColor" />)}
            </div>
            <p className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
              "GlobeRate's Scam Detector literally saved me ₹12,000 at the Bangkok airport. Nova AI is basically magic."
            </p>
            <p className="font-black text-lg">Aditi Sharma</p>
            <p className="text-white/80 font-medium">Solo Traveler</p>
          </div>
        </motion.div>

        {/* Other Testimonials Grid */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-soft-cream p-10 rounded-[2.5rem] border border-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-amber-500/10 transform rotate-12"><Star size={120} fill="currentColor" /></div>
            <p className="text-lg text-slate-800 font-bold mb-8 leading-relaxed relative z-10">
              "The Budget River feature is insane. It's the first time I actually understand how much I'm spending across 3 different European currencies."
            </p>
            <div className="relative z-10">
              <div className="font-black text-slate-900">Rahul Verma</div>
              <div className="text-sm font-bold text-amber-600">Digital Nomad</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-pale-purple p-10 rounded-[2.5rem] border border-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-purple-magenta/10 transform rotate-12"><Star size={120} fill="currentColor" /></div>
            <p className="text-lg text-slate-800 font-bold mb-8 leading-relaxed relative z-10">
              "I love the Price Anchor! Seeing that a ¥1,200 meal in Tokyo is just '1 Domino's Pizza' immediately stopped me from overspending."
            </p>
            <div className="relative z-10">
              <div className="font-black text-slate-900">Priya Patel</div>
              <div className="text-sm font-bold text-purple-magenta">Exchange Student</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
