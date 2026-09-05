"use client";

import Image from "next/image";
import { Bot, Star, Zap, Shield, Code2 } from "lucide-react";

const stats = [
  { icon: <Zap size={18} />, label: "Slash Commands", value: "20+" },
  { icon: <Shield size={18} />, label: "Mod Tools", value: "4" },
  { icon: <Star size={18} />, label: "Feature Versions", value: "7" },
  { icon: <Code2 size={18} />, label: "Python Lines", value: "800+" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tejasbot-hero.png"
          alt="TejasBot Hero"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/60 via-[#0a0a1a]/40 to-[#0a0a1a]" />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/10 blur-xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Python Discord Bot · discord.py 2.x · SQLite · Open Source
        </div>

        {/* Avatar + Title */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="relative animate-float">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-purple-500/50 shadow-2xl shadow-purple-900/60 animate-glow">
              <Image
                src="/images/tejasbot-avatar.png"
                alt="TejasBot Avatar"
                width={112}
                height={112}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#0a0a1a]">
              <Bot size={16} className="text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-3">
              <span className="gradient-text">TejasBot</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
              A Multi-Purpose Discord Server Management Bot built with{" "}
              <span className="text-yellow-400 font-semibold">Python</span> &{" "}
              <span className="text-indigo-400 font-semibold">discord.py</span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#setup"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-purple-900/40 text-lg"
          >
            🚀 Get Started Free
          </a>
          <a
            href="#code"
            className="w-full sm:w-auto px-8 py-4 glass-card text-gray-300 font-semibold rounded-xl hover:text-white hover:border-purple-500/50 transition-all duration-200 text-lg"
          >
            📖 View Source Code
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-4 flex flex-col items-center gap-2"
            >
              <div className="text-purple-400">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 text-center">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
