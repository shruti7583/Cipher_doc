"use client";
import { useEffect, useState } from "react";
import { docsPages } from "../data/docsPages";
import Navbar from "./Navbar";
import CipherLogo from "./CipherLogo";

export default function DocLayout({ children, currentId }) {
  const [activeSection, setActiveSection] = useState(null);
  const currentIndex = docsPages.findIndex((p) => p.id === currentId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    document
      .querySelectorAll("h2[id], h3[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", color: "white" }}>
      <Navbar currentPage={currentId} />

      {/* Ambient glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(241,0,112,0.06) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 flex gap-8 relative z-10">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col gap-1 w-64 shrink-0 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pb-4">
          <div className="flex items-center gap-2 px-3 py-3 mb-2">
            <CipherLogo size={22} />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Documentation
            </span>
          </div>

          <div className="h-px bg-gradient-to-r from-[#F10070]/30 to-transparent mb-3" />

          {docsPages.map((page, i) => {
            const isActive = page.id === currentId;
            const isDone = i < currentIndex;
            return (
              <a
                key={page.id}
                href={page.href}
                className="group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 relative"
                style={{
                  background: isActive ? "rgba(241,0,112,0.1)" : "transparent",
                  border: isActive
                    ? "1px solid rgba(241,0,112,0.25)"
                    : "1px solid transparent",
                }}
              >
                {/* Active indicator line */}
                {isActive && (
                  <div
                    className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #F10070, #F77247)",
                    }}
                  />
                )}

                {/* Step number / check */}
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-all"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #F10070, #F77247)"
                      : isDone
                        ? "rgba(241,0,112,0.2)"
                        : "rgba(255,255,255,0.05)",
                    color: isActive ? "white" : isDone ? "#F10070" : "#6b7280",
                  }}
                >
                  {isDone ? "✓" : i + 1}
                </div>

                <div className="flex flex-col min-w-0">
                  <span
                    className="text-sm font-semibold truncate transition-colors"
                    style={{ color: isActive ? "#F77247" : "white" }}
                  >
                    {page.emoji} {page.title}
                  </span>
                  <span className="text-xs text-gray-500 truncate">
                    {page.description}
                  </span>
                </div>
              </a>
            );
          })}

          {/* Divider */}
          <div className="h-px bg-[#1e1e2e] my-3" />

          {/* Quick links */}
          <div className="px-3">
            <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">
              Quick Links
            </p>
            <a
              href="https://t.me/CipherElite_Userbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-[#F77247] transition-colors"
            >
              🔌 Plugin Channel
            </a>
            <a
              href="https://t.me/cipherelite_support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-[#F77247] transition-colors"
            >
              🆘 CipherElite Support
            </a>
            <a
              href="https://t.me/THANOS_PRO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-[#F77247] transition-colors"
            >
              📢 Thanos Pro Channel
            </a>
            <a
              href="https://t.me/thanosprosss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-[#F77247] transition-colors"
            >
              👥 Thanos Support Hub
            </a>
            <a
              href="https://github.com/rishabhops/CipherElite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1.5 text-xs text-gray-400 hover:text-[#F77247] transition-colors"
            >
              ⭐ GitHub Repo
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <a href="/" className="hover:text-[#F77247] transition-colors">
              Home
            </a>
            <span>/</span>
            <a
              href="/docs/introduction"
              className="hover:text-[#F77247] transition-colors"
            >
              Docs
            </a>
            <span>/</span>
            <span style={{ color: "#F77247" }}>
              {docsPages.find((p) => p.id === currentId)?.title}
            </span>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
