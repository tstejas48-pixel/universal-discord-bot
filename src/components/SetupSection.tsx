"use client";

import { SETUP_STEPS } from "@/lib/botData";
import { CheckCircle } from "lucide-react";

export default function SetupSection() {
  return (
    <section id="setup" className="py-24 bg-[#0a0a1a] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">
            Beginner Friendly
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Setup Guide
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From zero to a running Discord bot in under 15 minutes.
            No prior experience required.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="space-y-6">
          {SETUP_STEPS.map((step, index) => (
            <div key={step.step} className="flex gap-6 group">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-purple-900/40 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {step.icon}
                </div>
                {index < SETUP_STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-600/50 to-transparent mt-2 min-h-8" />
                )}
              </div>

              {/* Step content */}
              <div className="flex-1 glass-card rounded-xl p-6 mb-2 hover:border-purple-500/30 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{step.description}</p>

                {/* Detail checklist */}
                <ul className="space-y-2">
                  {step.details.map((detail, di) => (
                    <li key={di} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quick install block */}
        <div className="mt-12 glass-card rounded-2xl p-8 border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-4">⚡ Quick Install</h3>
          <div className="space-y-3 font-mono text-sm">
            {[
              { prompt: "$", cmd: "mkdir TejasBot && cd TejasBot", comment: "# Create project folder" },
              { prompt: "$", cmd: "python -m venv venv && source venv/bin/activate", comment: "# Set up virtual environment" },
              { prompt: "$", cmd: "pip install discord.py python-dotenv", comment: "# Install dependencies" },
              { prompt: "$", cmd: "cp .env.example .env", comment: "# Copy env template" },
              { prompt: "$", cmd: "python bot.py", comment: "# Start TejasBot!" },
            ].map(({ prompt, cmd, comment }, i) => (
              <div key={i} className="flex gap-3 items-center bg-black/40 rounded-lg px-4 py-3">
                <span className="text-green-400 font-bold">{prompt}</span>
                <span className="text-gray-200">{cmd}</span>
                <span className="text-gray-600 hidden sm:block ml-auto">{comment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
