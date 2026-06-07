"use client";
import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

export default function CodeBlock({ code, language = "bash", title = null }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className="rounded-xl overflow-hidden border border-[#1e1e2e] my-4 group">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#111118] border-b border-[#1e1e2e]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {title && (
            <div className="flex items-center gap-1.5 ml-2">
              <Terminal size={12} className="text-[#F77247]" />
              <span className="text-xs text-gray-400 font-mono">{title}</span>
            </div>
          )}
          {!title && (
            <span className="text-xs text-gray-500 font-mono ml-2">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
          style={{
            background: copied
              ? "linear-gradient(135deg, #28c840, #1a9e2e)"
              : "linear-gradient(135deg, #F10070, #F77247)",
            color: "white",
          }}
        >
          {copied ? (
            <>
              <Check size={12} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code area */}
      <div className="bg-[#0d0d14] overflow-x-auto">
        <table className="w-full text-sm font-mono">
          <tbody>
            {lines.map((line, i) => (
              <tr
                key={i}
                className="hover:bg-[#F10070]/5 transition-colors group/line"
              >
                <td className="select-none text-right pr-4 pl-4 py-0.5 text-gray-600 text-xs w-8 border-r border-[#1e1e2e] align-top">
                  {i + 1}
                </td>
                <td className="pl-4 pr-4 py-0.5 align-top">
                  {line.startsWith("#") ? (
                    <span className="text-gray-500 italic">{line}</span>
                  ) : line.trim() === "" ? (
                    <span>&nbsp;</span>
                  ) : (
                    <span className="text-[#e0e0f0]">
                      {line.split(" ").map((word, wi) => {
                        if (
                          [
                            "sudo",
                            "apt",
                            "pip3",
                            "git",
                            "tmux",
                            "cd",
                            "cp",
                            "nano",
                            "python3",
                          ].includes(word)
                        ) {
                          return (
                            <span key={wi}>
                              <span className="text-[#F10070]">
                                {word}
                              </span>{" "}
                            </span>
                          );
                        }
                        if (word.startsWith("-")) {
                          return (
                            <span key={wi}>
                              <span className="text-[#F77247]">
                                {word}
                              </span>{" "}
                            </span>
                          );
                        }
                        if (word.includes("=") && !word.startsWith("-")) {
                          const parts = word.split("=");
                          return (
                            <span key={wi}>
                              <span className="text-[#a78bfa]">{parts[0]}</span>
                              =
                              <span className="text-[#34d399]">
                                {parts.slice(1).join("=")}
                              </span>{" "}
                            </span>
                          );
                        }
                        return <span key={wi}>{word} </span>;
                      })}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
