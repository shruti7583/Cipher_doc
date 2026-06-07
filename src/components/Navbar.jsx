"use client";
import { useState, useEffect, useRef } from "react";
import { Search, X, Menu, ChevronRight } from "lucide-react";
import { docsPages } from "../data/docsPages";
import CipherLogo from "./CipherLogo";

const searchableContent = [
  {
    page: "Introduction",
    href: "/docs/introduction",
    keywords: [
      "about",
      "cipher",
      "userbot",
      "telethon",
      "rishabh",
      "thanos",
      "python",
      "mongodb",
      "what is",
    ],
  },
  {
    page: "Features",
    href: "/docs/features",
    keywords: [
      "ai",
      "anti-hack",
      "session",
      "plugin",
      "hosting",
      "analytics",
      "games",
      "update",
      "smart",
    ],
  },
  {
    page: "Telegram Deploy",
    href: "/docs/telegram-deploy",
    keywords: [
      "deploy",
      "bot",
      "session",
      "fork",
      "free",
      "elitedeployerbot",
      "elite_session_maker_bot",
    ],
  },
  {
    page: "VPS / Terminal",
    href: "/docs/vps-deploy",
    keywords: [
      "vps",
      "terminal",
      "tmux",
      "ubuntu",
      "termux",
      "bash",
      "git",
      "pip",
      "apt",
      "manual",
      "install",
    ],
  },
  {
    page: "Configuration",
    href: "/docs/configuration",
    keywords: [
      "api_id",
      "api_hash",
      "elite_session",
      "log_chat",
      "sudo",
      "env",
      "vars",
      "config",
    ],
  },
  {
    page: "Support & Credits",
    href: "/docs/support",
    keywords: [
      "telegram",
      "support",
      "community",
      "credits",
      "rishabh",
      "thanos",
      "channel",
      "group",
    ],
  },
];

export default function Navbar({ currentPage }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matched = searchableContent.filter(
      (item) =>
        item.page.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.includes(q)),
    );
    setResults(matched);
  }, [query]);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,15,0.95)" : "rgba(10,10,15,0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(241,0,112,0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0 group">
            <CipherLogo size={34} />
            <div className="flex flex-col leading-tight">
              <span className="font-black text-white text-base tracking-tight group-hover:text-[#F77247] transition-colors">
                CipherElite
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                Elite Userbot
              </span>
            </div>
          </a>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {docsPages.map((p) => (
              <a
                key={p.id}
                href={p.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: currentPage === p.id ? "#F77247" : "#9ca3af",
                  background:
                    currentPage === p.id
                      ? "rgba(241,0,112,0.1)"
                      : "transparent",
                }}
              >
                {p.emoji} {p.title}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#1e1e2e] bg-[#111118] hover:border-[#F10070]/40 transition-all text-sm text-gray-400 hover:text-white"
            >
              <Search size={14} />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline text-xs bg-[#1e1e2e] px-1.5 py-0.5 rounded font-mono text-gray-500">
                ⌘K
              </kbd>
            </button>
            <a
              href="https://github.com/rishabhops/CipherElite"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #F10070, #F77247)",
              }}
            >
              ⭐ Star
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#111118]"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1e1e2e] bg-[#0a0a0f] py-2">
            {docsPages.map((p) => (
              <a
                key={p.id}
                href={p.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-sm transition-colors"
                style={{ color: currentPage === p.id ? "#F77247" : "#9ca3af" }}
              >
                <span>{p.emoji}</span>
                <span>{p.title}</span>
                {currentPage === p.id && (
                  <ChevronRight size={14} className="ml-auto text-[#F10070]" />
                )}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
          onClick={() => {
            setSearchOpen(false);
            setQuery("");
          }}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-[#1e1e2e] overflow-hidden shadow-2xl"
            style={{ background: "#0d0d14" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-[#1e1e2e]">
              <Search size={18} className="text-[#F10070]" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-base"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setQuery("");
                }}
              >
                <X
                  size={16}
                  className="text-gray-500 hover:text-white transition-colors"
                />
              </button>
            </div>

            {/* Results */}
            <div className="py-2 max-h-80 overflow-y-auto">
              {query && results.length === 0 && (
                <p className="text-center text-gray-500 py-8 text-sm">
                  No results for "{query}"
                </p>
              )}
              {results.map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#F10070]/10 transition-colors group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                    style={{ background: "rgba(241,0,112,0.15)" }}
                  >
                    {docsPages.find((p) => p.href === r.href)?.emoji || "📄"}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium group-hover:text-[#F77247] transition-colors">
                      {r.page}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {docsPages.find((p) => p.href === r.href)?.description}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className="ml-auto text-gray-600 group-hover:text-[#F10070]"
                  />
                </a>
              ))}
              {!query && (
                <div className="px-4 py-3">
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
                    All Pages
                  </p>
                  {docsPages.map((p, i) => (
                    <a
                      key={i}
                      href={p.href}
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery("");
                      }}
                      className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-[#F10070]/10 transition-colors group"
                    >
                      <span className="text-lg">{p.emoji}</span>
                      <div>
                        <p className="text-white text-sm font-medium group-hover:text-[#F77247] transition-colors">
                          {p.title}
                        </p>
                        <p className="text-gray-500 text-xs">{p.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="px-4 py-2.5 border-t border-[#1e1e2e] flex gap-4 text-xs text-gray-600">
              <span>
                <kbd className="bg-[#1e1e2e] px-1.5 py-0.5 rounded font-mono">
                  ↑↓
                </kbd>{" "}
                navigate
              </span>
              <span>
                <kbd className="bg-[#1e1e2e] px-1.5 py-0.5 rounded font-mono">
                  ↵
                </kbd>{" "}
                select
              </span>
              <span>
                <kbd className="bg-[#1e1e2e] px-1.5 py-0.5 rounded font-mono">
                  Esc
                </kbd>{" "}
                close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
