"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { docsPages } from "../data/docsPages";

export default function DocPageNav({ currentId }) {
  const currentIndex = docsPages.findIndex((p) => p.id === currentId);
  const prev = currentIndex > 0 ? docsPages[currentIndex - 1] : null;
  const next =
    currentIndex < docsPages.length - 1 ? docsPages[currentIndex + 1] : null;

  return (
    <div className="mt-16 mb-8">
      {/* Dots progress indicator */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {docsPages.map((p, i) => {
          const isActive = i === currentIndex;
          const isDone = i < currentIndex;
          return (
            <a
              key={p.id}
              href={p.href}
              title={p.title}
              className="group relative flex items-center"
              style={{ outline: "none" }}
            >
              <div
                className="transition-all duration-400 rounded-full"
                style={{
                  width: isActive ? "32px" : "8px",
                  height: "8px",
                  background: isActive
                    ? "linear-gradient(90deg, #F10070, #F77247)"
                    : isDone
                      ? "rgba(241,0,112,0.55)"
                      : "rgba(255,255,255,0.13)",
                  boxShadow: isActive
                    ? "0 0 12px rgba(241,0,112,0.7), 0 0 24px rgba(241,0,112,0.35)"
                    : isDone
                      ? "0 0 6px rgba(241,0,112,0.25)"
                      : "none",
                  transform: isActive ? "scaleY(1.2)" : "scaleY(1)",
                  animation: isActive
                    ? "dotPulse 2s ease-in-out infinite"
                    : "none",
                }}
              />
              {/* Tooltip */}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "#111118",
                  color: "#F77247",
                  border: "1px solid rgba(241,0,112,0.25)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                  transform: "translateY(4px)",
                }}
              >
                {p.emoji} {p.title}
              </div>
            </a>
          );
        })}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F10070]/20 to-transparent mb-8" />

      {/* Prev / Next buttons */}
      <div className="flex items-stretch gap-4">
        {prev ? (
          <a
            href={prev.href}
            className="group flex-1 flex items-center gap-4 p-5 rounded-2xl border border-[#1e1e2e] hover:border-[#F10070]/40 bg-[#0d0d14] hover:bg-[#111118] transition-all duration-200"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
              style={{ background: "rgba(241,0,112,0.1)" }}
            >
              <ChevronLeft size={20} className="text-[#F10070]" />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs text-gray-500 mb-0.5 uppercase tracking-wider">
                Previous
              </span>
              <span className="text-white font-semibold text-sm truncate group-hover:text-[#F77247] transition-colors">
                {prev.emoji} {prev.title}
              </span>
              <span className="text-xs text-gray-500 truncate hidden sm:block">
                {prev.description}
              </span>
            </div>
          </a>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <a
            href={next.href}
            className="group flex-1 flex items-center justify-end gap-4 p-5 rounded-2xl border border-[#1e1e2e] hover:border-[#F10070]/40 bg-[#0d0d14] hover:bg-[#111118] transition-all duration-200"
          >
            <div className="flex flex-col text-right min-w-0">
              <span className="text-xs text-gray-500 mb-0.5 uppercase tracking-wider">
                Next
              </span>
              <span className="text-white font-semibold text-sm truncate group-hover:text-[#F77247] transition-colors">
                {next.emoji} {next.title}
              </span>
              <span className="text-xs text-gray-500 truncate hidden sm:block">
                {next.description}
              </span>
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
              style={{ background: "rgba(241,0,112,0.1)" }}
            >
              <ChevronRight size={20} className="text-[#F10070]" />
            </div>
          </a>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      <style jsx global>{`
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(241,0,112,0.6), 0 0 22px rgba(241,0,112,0.3); }
          50% { box-shadow: 0 0 18px rgba(241,0,112,0.9), 0 0 36px rgba(241,0,112,0.5); }
        }
        a[title]:hover > div:first-child {
          opacity: 0.85;
          transform: scaleY(1.3) !important;
        }
      `}</style>
    </div>
  );
}
