"use client";

import { BOT_VERSIONS } from "@/lib/botData";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0a0a1a] relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            7 Feature Versions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built progressively from basic utility commands to a full server management suite
            with XP leveling, moderation, and real-time logging.
          </p>
        </div>

        {/* Version cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOT_VERSIONS.map((version) => (
            <div
              key={version.version}
              className="glass-card rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group cursor-default"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${version.badge}`}>
                    {version.version}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">{version.title}</h3>
                </div>
                <span className="text-4xl">{version.icon}</span>
              </div>

              {/* Gradient bar */}
              <div className={`h-1 w-full rounded-full bg-gradient-to-r ${version.color} mb-4 opacity-70 group-hover:opacity-100 transition-opacity`} />

              {/* Commands list */}
              <ul className="space-y-3">
                {version.commands.map((cmd) => (
                  <li key={cmd.name} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono text-purple-300 bg-purple-900/20 px-2 py-0.5 rounded">
                        {cmd.name}
                      </code>
                    </div>
                    <p className="text-xs text-gray-500 pl-1">{cmd.description}</p>
                    <p className="text-xs text-gray-600 italic pl-1 font-mono truncate" title={cmd.example}>
                      {cmd.example}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
