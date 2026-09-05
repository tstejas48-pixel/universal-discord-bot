"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Bot, GitBranch } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Commands", href: "#commands" },
  { label: "Setup Guide", href: "#setup" },
  { label: "Code", href: "#code" },
  { label: "Feedback", href: "#feedback" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all">
              <Image
                src="/images/tejasbot-avatar.png"
                alt="TejasBot"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold gradient-text">TejasBot</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-purple-300 rounded-lg hover:bg-purple-900/20 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 border border-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-300 transition-all duration-200"
            >
              <GitBranch size={16} />
              GitHub
            </a>
            <a
              href="#setup"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-purple-900/30"
            >
              <Bot size={16} />
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a1a]/98 border-b border-purple-900/30 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-400 hover:text-purple-300 border-b border-gray-800/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-sm border border-gray-700 rounded-lg text-gray-300"
            >
              <GitBranch size={16} /> GitHub
            </a>
            <a
              href="#setup"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
