"use client";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Star,
  ExternalLink,
  ChevronRight,
  GitFork,
  Search,
  X,
} from "lucide-react";
import CipherLogo from "../components/CipherLogo";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: "🧠",
    title: "Smart Plugin Manager",
    desc: "Auto-installs missing dependencies. Zero crashes, ever.",
  },
  {
    icon: "🛡️",
    title: "Anti-Hack Session",
    desc: "ELITE_SESSION encryption — impossible to steal or reuse.",
  },
  {
    icon: "🤖",
    title: "Native AI",
    desc: "Built-in AI for auto-replies, summaries, and chat assistance.",
  },
  {
    icon: "⚡",
    title: "Free 24/7 Hosting",
    desc: "Deploy via our Telegram bot. No VPS, no credit card.",
  },
  {
    icon: "🎭",
    title: "Fun Plugins",
    desc: "Games, animations, and 'Magic' commands with zero lag.",
  },
  {
    icon: "📊",
    title: "Analytics",
    desc: "Built-in performance monitoring and ping checks.",
  },
];

const words = [
  "Anti-Hack Userbot",
  "Smart Automation",
  "Free 24/7 Hosting",
  "Native AI Power",
];

const searchPlaceholders = [
  "Search plugins...",
  "How to deploy for free?",
  "What is ELITE_SESSION?",
  "How to get LOG_CHAT_ID?",
  "Anti-hack session setup...",
  "VPS installation guide...",
  "Configure SUDO_USERS...",
];

const searchableContent = [
  {
    page: "Introduction",
    href: "/docs/introduction",
    desc: "What is CipherElite?",
    emoji: "📖",
    keywords: [
      "about",
      "cipher",
      "userbot",
      "telethon",
      "rishabh",
      "thanos",
      "python",
      "what is",
    ],
  },
  {
    page: "Features",
    href: "/docs/features",
    desc: "AI, Anti-Hack, Plugins",
    emoji: "⚡",
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
    desc: "Free 30-second deploy",
    emoji: "📲",
    keywords: ["deploy", "bot", "session", "fork", "free", "elitedeployerbot"],
  },
  {
    page: "VPS / Terminal",
    href: "/docs/vps-deploy",
    desc: "Manual install on server",
    emoji: "💻",
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
    desc: "API_ID, SESSION, LOG_CHAT_ID",
    emoji: "⚙️",
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
    desc: "Community and credits",
    emoji: "🆘",
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

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [ghStars, setGhStars] = useState("...");
  const [ghForks, setGhForks] = useState("...");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [phIndex, setPhIndex] = useState(0);
  const [phFade, setPhFade] = useState(true);
  const searchInputRef = useRef(null);

  // Word cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Placeholder cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setPhFade(false);
      setTimeout(() => {
        setPhIndex((i) => (i + 1) % searchPlaceholders.length);
        setPhFade(true);
      }, 250);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut
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

  // Focus input when modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  // Filter results
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    setResults(
      searchableContent.filter(
        (item) =>
          item.page.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.includes(q)),
      ),
    );
  }, [query]);

  useEffect(() => {
    fetch("https://api.github.com/repos/rishabhops/CipherElite")
      .then((r) => r.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setGhStars(
            data.stargazers_count >= 1000
              ? (data.stargazers_count / 1000).toFixed(1) + "K"
              : String(data.stargazers_count),
          );
          setGhForks(
            data.forks_count >= 1000
              ? (data.forks_count / 1000).toFixed(1) + "K"
              : String(data.forks_count),
          );
        }
      })
      .catch(() => {
        setGhStars("2K+");
        setGhForks("500+");
      });
  }, []);

  const stats = [
    {
      label: "GitHub Stars",
      value: ghStars,
      icon: "⭐",
      href: "https://github.com/rishabhops/CipherElite/stargazers",
    },
    {
      label: "GitHub Forks",
      value: ghForks,
      icon: "🍴",
      href: "https://github.com/rishabhops/CipherElite/network/members",
    },
    {
      label: "Official Plugins",
      value: "60+",
      icon: "🔌",
      href: "https://t.me/CipherElite_Userbot",
    },
    { label: "Uptime", value: "99.9%", icon: "📡", href: null },
  ];

  return (
    <div
      style={{
        background: "#0a0a0f",
        minHeight: "100vh",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(241,0,112,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-4 pt-36 pb-24">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border"
          style={{
            background: "rgba(241,0,112,0.1)",
            borderColor: "rgba(241,0,112,0.3)",
            color: "#F77247",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#F10070",
              display: "inline-block",
            }}
          />
          The Smartest Telegram Userbot — 2026
        </div>

        <div className="mb-6">
          <CipherLogo size={100} useImage={false} />
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4">
          <span className="text-white">Cipher</span>
          <span
            style={{
              background: "linear-gradient(135deg, #F10070, #F77247)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Elite
          </span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-6">
          <p
            className="text-xl sm:text-2xl font-bold"
            style={{
              color: "#F77247",
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            {words[wordIndex]}
          </p>
        </div>

        <p className="max-w-xl text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
          Built on <strong className="text-white">Telethon</strong> by{" "}
          <strong className="text-[#F77247]">Rishabh Anand</strong> under{" "}
          <strong className="text-white">Thanos Pro Organisation</strong>.
          Deploy in 30 seconds. No VPS. No credit card. Completely free.
        </p>

        {/* ── Animated Search Bar ── */}
        <div className="w-full max-w-lg mb-8">
          <button
            onClick={() => setSearchOpen(true)}
            className="w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl border text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
            style={{
              background: "rgba(13,13,20,0.95)",
              borderColor: "rgba(241,0,112,0.3)",
              boxShadow:
                "0 0 35px rgba(241,0,112,0.1), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
              style={{ background: "linear-gradient(135deg,#F10070,#F77247)" }}
            >
              <Search size={15} color="white" />
            </div>
            <span
              className="flex-1 text-sm font-medium"
              style={{
                color: "#6b7280",
                opacity: phFade ? 1 : 0,
                transform: phFade ? "translateY(0)" : "translateY(4px)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
              }}
            >
              {searchPlaceholders[phIndex]}
            </span>
            <kbd
              className="hidden sm:flex items-center gap-1 text-xs px-2 py-1 rounded-lg font-mono shrink-0"
              style={{
                background: "rgba(30,30,46,0.8)",
                color: "#4b5563",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              ⌘K
            </kbd>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="/docs/introduction"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #F10070, #F77247)",
              boxShadow: "0 0 40px rgba(241,0,112,0.3)",
            }}
          >
            Get Started <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/rishabhops/CipherElite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base border border-[#1e1e2e] hover:border-[#F10070]/40 bg-[#111118] hover:bg-[#15151f] transition-all duration-200"
          >
            <Star size={16} className="text-yellow-400" />
            Star on GitHub
            <ExternalLink size={14} className="text-gray-500" />
          </a>
        </div>

        {/* Live stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
          {stats.map((s, i) => {
            const inner = (
              <>
                <span className="text-2xl mb-1">{s.icon}</span>
                <span
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #F10070, #F77247)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </span>
                <span className="text-xs text-gray-500">{s.label}</span>
              </>
            );
            return s.href ? (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] flex flex-col items-center hover:border-[#F10070]/30 transition-all hover:scale-105"
              >
                {inner}
              </a>
            ) : (
              <div
                key={i}
                className="p-4 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] flex flex-col items-center"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Features grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Why CipherElite?
          </h2>
          <p className="text-gray-400">
            Every feature built for security, performance, and ease of use.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] hover:border-[#F10070]/40 hover:bg-[#111118] transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform"
                style={{ background: "rgba(241,0,112,0.1)" }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-[#F77247] transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community plugins banner */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
        <div className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: "rgba(241,0,112,0.1)" }}
            >
              🔌
            </div>
            <div>
              <h3 className="font-black text-white text-lg">
                60+ Official Plugins + Community Plugins
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">
                <strong className="text-[#F77247]">60+ official plugins</strong>{" "}
                made by Rishabh Anand. Plus a growing library of community
                plugins shared on our Telegram channel — made by devs like you!
              </p>
            </div>
          </div>
          <a
            href="https://t.me/CipherElite_Userbot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm shrink-0 transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #F10070, #F77247)" }}
          >
            📢 Browse Plugins
          </a>
        </div>
      </section>

      {/* Quick deploy CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 pb-24">
        <div
          className="p-8 sm:p-12 rounded-3xl border border-[#F10070]/20 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(241,0,112,0.08), rgba(247,114,71,0.05))",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Deploy?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Get CipherElite running in 30 seconds. Free hosting included. No
            technical knowledge required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs/telegram-deploy"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F10070, #F77247)",
              }}
            >
              📲 Telegram Deploy (Free) <ChevronRight size={16} />
            </a>
            <a
              href="/docs/vps-deploy"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white border border-[#1e1e2e] bg-[#111118] hover:border-[#F10070]/40 transition-all"
            >
              💻 VPS / Terminal <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1e1e2e] py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2.5">
            <CipherLogo size={28} />
            <span className="text-base font-bold text-white">CipherElite</span>
          </div>
          <p className="text-sm text-gray-400 text-center">
            Built by{" "}
            <a
              href="https://t.me/thanosceo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F77247] hover:underline font-semibold"
            >
              Rishabh Anand
            </a>{" "}
            under{" "}
            <span className="text-white font-semibold">
              Thanos Pro Organisation
            </span>
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://t.me/thanosceo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#F77247] transition-colors"
            >
              📲 @thanosceo
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://instagram.com/xrishabhanand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#F77247] transition-colors"
            >
              📸 @xrishabhanand
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://github.com/rishabhops/CipherElite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#F77247] transition-colors"
            >
              ⭐ GitHub
            </a>
          </div>
          <div className="h-px w-full max-w-md bg-[#1e1e2e]" />
          <p className="text-xs text-gray-600 text-center">
            © 2026 Rishabh Anand · CipherElite Documentation · MIT License ·
            Made with ❤️ under Thanos Pro Organisation
          </p>
        </div>
      </footer>

      {/* ── Search Modal ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-16 sm:pt-24 px-4"
          style={{
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
          onClick={() => {
            setSearchOpen(false);
            setQuery("");
          }}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-[#1e1e2e] overflow-hidden shadow-2xl"
            style={{
              background: "#0d0d14",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(241,0,112,0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-[#1e1e2e]">
              <Search size={18} style={{ color: "#F10070", flexShrink: 0 }} />
              <input
                ref={searchInputRef}
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
                <X size={16} style={{ color: "#6b7280" }} />
              </button>
            </div>
            {/* Results */}
            <div className="py-2 max-h-80 overflow-y-auto">
              {query && results.length === 0 && (
                <p className="text-center text-gray-500 py-8 text-sm">
                  No results for &ldquo;{query}&rdquo;
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
                    {r.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold group-hover:text-[#F77247] transition-colors">
                      {r.page}
                    </p>
                    <p className="text-gray-500 text-xs truncate">{r.desc}</p>
                  </div>
                  <ChevronRight
                    size={14}
                    style={{ color: "#374151", flexShrink: 0 }}
                  />
                </a>
              ))}
              {!query && (
                <div className="px-4 py-3">
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-bold">
                    All Pages
                  </p>
                  {searchableContent.map((p, i) => (
                    <a
                      key={i}
                      href={p.href}
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery("");
                      }}
                      className="flex items-center gap-3 py-2.5 px-2 rounded-xl hover:bg-[#F10070]/10 transition-colors group"
                    >
                      <span className="text-xl w-8 text-center shrink-0">
                        {p.emoji}
                      </span>
                      <div className="min-w-0">
                        <p className="text-white text-sm font-semibold group-hover:text-[#F77247] transition-colors">
                          {p.page}
                        </p>
                        <p className="text-gray-500 text-xs">{p.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="px-4 py-2.5 border-t border-[#1e1e2e] flex gap-5 text-xs text-gray-600">
              <span>
                <kbd className="bg-[#1e1e2e] px-1.5 py-0.5 rounded font-mono">
                  Esc
                </kbd>{" "}
                close
              </span>
              <span>
                <kbd className="bg-[#1e1e2e] px-1.5 py-0.5 rounded font-mono">
                  ↵
                </kbd>{" "}
                go to page
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { background-color: #0a0a0f; }
      `}</style>
    </div>
  );
}
