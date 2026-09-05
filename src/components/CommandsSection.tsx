"use client";

import { useState } from "react";
import { BOT_VERSIONS } from "@/lib/botData";

const ALL_COMMANDS = BOT_VERSIONS.flatMap((v) =>
  v.commands.map((cmd) => ({ ...cmd, version: v.version, icon: v.icon, badge: v.badge }))
);

const CATEGORIES = ["All", ...BOT_VERSIONS.map((v) => v.title)];

export default function CommandsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ALL_COMMANDS.filter((cmd) => {
    const matchesCategory =
      activeCategory === "All" ||
      BOT_VERSIONS.find((v) => v.title === activeCategory)?.commands.some(
        (c) => c.name === cmd.name
      );
    const matchesSearch =
      cmd.name.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="commands" className="py-24 bg-[#080812] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Command Reference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            All Slash Commands
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Browse, search, and filter every command available in TejasBot.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">/</span>
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-4 py-3 bg-gray-900/60 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                  : "text-gray-400 hover:text-gray-200 bg-gray-800/50 hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Commands grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <span className="text-5xl mb-4 block">🔍</span>
            <p>No commands found for &quot;{search}&quot;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((cmd, i) => (
              <div
                key={`${cmd.name}-${i}`}
                className="glass-card rounded-xl p-5 hover:border-purple-500/30 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{cmd.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <code className="text-purple-300 font-mono text-sm font-bold">
                        {cmd.name}
                      </code>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${cmd.badge}`}>
                        {cmd.version}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{cmd.description}</p>
                    <div className="bg-black/30 rounded-lg px-3 py-2">
                      <p className="text-xs text-gray-600 font-mono truncate" title={cmd.example}>
                        💬 {cmd.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
