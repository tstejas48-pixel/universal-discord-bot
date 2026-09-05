"use client";

import { useState } from "react";
import { PROJECT_FILES, GITHUB_STEPS } from "@/lib/botData";
import CodeBlock from "./CodeBlock";
import { FileCode2, FolderOpen } from "lucide-react";

const FILE_KEYS = Object.keys(PROJECT_FILES);

const FILE_TREE = [
  { label: "TejasBot/", icon: "📁", type: "folder", indent: 0 },
  { label: "bot.py", icon: "🐍", type: "file", key: "bot.py", indent: 1 },
  { label: "config.py", icon: "⚙️", type: "file", key: "config.py", indent: 1 },
  { label: "requirements.txt", icon: "📋", type: "file", key: "requirements.txt", indent: 1 },
  { label: ".env.example", icon: "🔐", type: "file", key: ".env.example", indent: 1 },
  { label: "commands/", icon: "📁", type: "folder", indent: 1 },
  { label: "utility.py", icon: "🔧", type: "file", key: "commands/utility.py", indent: 2 },
  { label: "fun.py", icon: "🎮", type: "file", key: "commands/fun.py", indent: 2 },
  { label: "moderation.py", icon: "🛡️", type: "file", key: "commands/moderation.py", indent: 2 },
  { label: "levels.py", icon: "⭐", type: "file", key: "commands/levels.py", indent: 2 },
  { label: "events/", icon: "📁", type: "folder", indent: 1 },
  { label: "welcome.py", icon: "👋", type: "file", key: "events/welcome.py", indent: 2 },
  { label: "logging.py", icon: "📋", type: "file", key: "events/logging.py", indent: 2 },
  { label: "database/", icon: "📁", type: "folder", indent: 1 },
  { label: "database.py", icon: "💾", type: "file", key: "database/database.py", indent: 2 },
  { label: "data/", icon: "📁", type: "folder", indent: 1 },
  { label: "bot.db", icon: "🗄️", type: "file", indent: 2 },
];

export default function CodeSection() {
  const [activeFile, setActiveFile] = useState("bot.py");

  const currentFile = PROJECT_FILES[activeFile];

  return (
    <section id="code" className="py-24 bg-[#080812] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Full Source Code
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Browse the Code
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every file with beginner-friendly comments. Click a file to view its source.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* File tree sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl overflow-hidden">
              {/* Sidebar header */}
              <div className="px-4 py-3 bg-[#161b22] border-b border-gray-700/50 flex items-center gap-2">
                <FolderOpen size={16} className="text-yellow-400" />
                <span className="text-sm font-mono text-gray-300">Explorer</span>
              </div>
              {/* File tree */}
              <div className="p-2">
                {FILE_TREE.map((item, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      item.type === "file" && item.key
                        ? setActiveFile(item.key)
                        : undefined
                    }
                    className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm font-mono transition-colors ${
                      item.type === "file" && item.key
                        ? activeFile === item.key
                          ? "bg-purple-600/30 text-purple-300 cursor-pointer"
                          : "text-gray-400 hover:bg-gray-800/60 hover:text-gray-200 cursor-pointer"
                        : "text-gray-500 cursor-default"
                    }`}
                    style={{ paddingLeft: `${item.indent * 16 + 8}px` }}
                  >
                    <span>{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* File tabs for mobile */}
            <div className="mt-4 lg:hidden flex flex-wrap gap-2">
              {FILE_KEYS.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveFile(key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                    activeFile === key
                      ? "bg-purple-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:text-white"
                  }`}
                >
                  <FileCode2 size={12} />
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Code viewer */}
          <div className="lg:col-span-3">
            {currentFile && (
              <CodeBlock
                code={currentFile.code}
                language={currentFile.language}
                filename={currentFile.filename}
                collapsible={currentFile.code.split("\n").length > 40}
              />
            )}
          </div>
        </div>

        {/* GitHub upload instructions */}
        <div className="mt-16">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <span>📤</span> Upload to GitHub
            </h3>
            <p className="text-gray-400 mb-6">
              Follow these commands to push your TejasBot project to GitHub:
            </p>
            <div className="space-y-3">
              {GITHUB_STEPS.map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="w-7 h-7 flex-shrink-0 rounded-full bg-purple-600/30 text-purple-300 text-xs font-bold flex items-center justify-center mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <code className="block text-sm font-mono text-green-400 bg-black/40 px-3 py-2 rounded-lg mb-1">
                      {item.cmd}
                    </code>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-300 text-sm font-semibold mb-1">⚠️ Security Reminder</p>
              <p className="text-gray-400 text-sm">
                Your <code className="text-yellow-300">.gitignore</code> already excludes{" "}
                <code className="text-red-400">.env</code> and{" "}
                <code className="text-red-400">data/bot.db</code> — your token is safe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
