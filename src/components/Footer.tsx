import { Bot, Code2, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060610] border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500/40">
                <Image
                  src="/images/tejasbot-avatar.png"
                  alt="TejasBot"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold gradient-text">TejasBot</span>
            </div>
            <p className="text-gray-500 text-sm">
              A multi-purpose Discord bot built with Python, discord.py, and SQLite.
              Perfect for learning Discord bot development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                { label: "Features", href: "#features" },
                { label: "Commands", href: "#commands" },
                { label: "Setup Guide", href: "#setup" },
                { label: "Source Code", href: "#code" },
                { label: "Feedback", href: "#feedback" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Python 3.10+", color: "bg-blue-900/30 text-blue-300 border-blue-700/30" },
                { label: "discord.py 2.x", color: "bg-indigo-900/30 text-indigo-300 border-indigo-700/30" },
                { label: "SQLite", color: "bg-green-900/30 text-green-300 border-green-700/30" },
                { label: "python-dotenv", color: "bg-yellow-900/30 text-yellow-300 border-yellow-700/30" },
                { label: "Slash Commands", color: "bg-purple-900/30 text-purple-300 border-purple-700/30" },
                { label: "VS Code", color: "bg-cyan-900/30 text-cyan-300 border-cyan-700/30" },
              ].map((tech) => (
                <span
                  key={tech.label}
                  className={`text-xs px-2 py-1 rounded border ${tech.color}`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Bot size={16} className="text-purple-400" />
            <span>TejasBot — Open Source Discord Bot Portfolio Project</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
            <span>using</span>
            <Code2 size={14} className="text-purple-400" />
            <span>Python &amp; Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
