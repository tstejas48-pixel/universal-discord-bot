"use client";

import { useState, useEffect } from "react";
import { ThumbsUp } from "lucide-react";

const FEATURES = [
  { key: "slash_commands", label: "Slash Commands", emoji: "⚡" },
  { key: "moderation", label: "Moderation Tools", emoji: "🛡️" },
  { key: "xp_levels", label: "XP & Levels", emoji: "⭐" },
  { key: "fun_commands", label: "Fun Commands", emoji: "🎮" },
  { key: "welcome_system", label: "Welcome System", emoji: "👋" },
  { key: "logging", label: "Server Logging", emoji: "📋" },
];

export default function VoteSection() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/votes")
      .then((r) => r.json())
      .then((data) => setVotes(data.votes || {}))
      .catch(() => {});
  }, []);

  const handleVote = async (key: string) => {
    if (voted.has(key) || loading) return;
    setLoading(key);

    try {
      const res = await fetch("/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featureKey: key }),
      });
      const data = await res.json();
      if (data.success) {
        setVotes((prev) => ({ ...prev, [key]: data.votes }));
        setVoted((prev) => new Set([...prev, key]));
      }
    } catch {
      console.error("Vote failed");
    } finally {
      setLoading(null);
    }
  };

  const maxVotes = Math.max(...Object.values(votes), 1);

  return (
    <section className="py-24 bg-[#0a0a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">
            Community Poll
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Your Favourite Feature?
          </h2>
          <p className="text-gray-400">Vote for the TejasBot feature you love most!</p>
        </div>

        <div className="space-y-4">
          {FEATURES.map((feature) => {
            const count = votes[feature.key] || 0;
            const pct = maxVotes > 0 ? (count / maxVotes) * 100 : 0;
            const hasVoted = voted.has(feature.key);
            const isLoading = loading === feature.key;

            return (
              <div
                key={feature.key}
                className="glass-card rounded-xl p-5 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.emoji}</span>
                    <span className="text-white font-semibold">{feature.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm font-mono">
                      {count} vote{count !== 1 ? "s" : ""}
                    </span>
                    <button
                      onClick={() => handleVote(feature.key)}
                      disabled={hasVoted || !!loading}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        hasVoted
                          ? "bg-purple-600/40 text-purple-300 cursor-default"
                          : isLoading
                          ? "bg-gray-700 text-gray-500 cursor-wait"
                          : "bg-purple-600 hover:bg-purple-500 text-white hover:scale-105 active:scale-95"
                      }`}
                    >
                      <ThumbsUp size={14} />
                      {hasVoted ? "Voted!" : isLoading ? "..." : "Vote"}
                    </button>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
