"use client";

import { useState } from "react";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export default function CodeBlock({
  code,
  language = "python",
  filename,
  collapsible = false,
  defaultCollapsed = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-gray-700/50">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-700/50">
        <div className="flex items-center gap-3">
          {/* Traffic light dots */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="text-xs text-gray-400 font-mono">{filename}</span>
          )}
          <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded font-mono">
            {language}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {collapsible && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors px-2 py-1 rounded hover:bg-gray-700"
            >
              {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
              {collapsed ? "Expand" : "Collapse"}
            </button>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-green-400 transition-colors px-2 py-1 rounded hover:bg-gray-700"
          >
            {copied ? (
              <>
                <Check size={14} className="text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code content */}
      {!collapsed && (
        <div className="overflow-x-auto text-sm">
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            customStyle={{
              margin: 0,
              padding: "1.25rem",
              background: "#0d1117",
              fontSize: "0.82rem",
              lineHeight: "1.6",
            }}
            showLineNumbers
            lineNumberStyle={{ color: "#484f58", minWidth: "2.5em" }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
