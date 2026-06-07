"use client";
import DocLayout from "../../../components/DocLayout";
import DocPageNav from "../../../components/DocPageNav";
import { ExternalLink, Star } from "lucide-react";

const community = [
  {
    icon: "🔌",
    title: "CipherElite Plugins",
    handle: "@CipherElite_Userbot",
    href: "https://t.me/CipherElite_Userbot",
    desc: "Official plugin channel. Community devs submit their plugins here. Browse 60+ official + unlimited community plugins.",
    color: "rgba(241,0,112,0.1)",
  },
  {
    icon: "🆘",
    title: "CipherElite Support",
    handle: "@cipherelite_support",
    href: "https://t.me/cipherelite_support",
    desc: "Official CipherElite-only support group. Ask anything about setup, plugins, errors — the team is active here.",
    color: "rgba(59,130,246,0.1)",
  },
  {
    icon: "📢",
    title: "Thanos Pro Channel",
    handle: "@THANOS_PRO",
    href: "https://t.me/THANOS_PRO",
    desc: "Main Thanos Pro Organisation channel. Get announcements, updates, and news about all bots including CipherElite.",
    color: "rgba(247,114,71,0.1)",
  },
  {
    icon: "👥",
    title: "Thanos Pro Support Hub",
    handle: "@thanosprosss",
    href: "https://t.me/thanosprosss",
    desc: "General support for all Thanos Pro bots. If you need help with any bot — including CipherElite — come here.",
    color: "rgba(16,185,129,0.1)",
  },
];

export default function SupportPage() {
  return (
    <DocLayout currentId="support">
      <div className="mb-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
          style={{
            background: "rgba(241,0,112,0.1)",
            borderColor: "rgba(241,0,112,0.3)",
            color: "#F77247",
          }}
        >
          🌟 Support & Credits
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Community &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F10070, #F77247)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Credits
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          Join the CipherElite community for plugins, updates, and support. Meet
          the team behind it all.
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-[#F10070]/30 via-[#F10070]/10 to-transparent mb-10" />

      {/* Community links — all 4 correct channels */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            💬
          </span>
          Our Telegram Community
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {community.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] hover:border-[#F10070]/40 hover:bg-[#111118] transition-all flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: c.color }}
              >
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-[#F77247] transition-colors">
                  {c.title}
                </h3>
                <p className="text-[#F10070] text-xs font-mono mb-1">
                  {c.handle}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <ExternalLink
                size={14}
                className="text-gray-600 group-hover:text-[#F10070] shrink-0 mt-1 transition-colors"
              />
            </a>
          ))}
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/rishabhops/CipherElite"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full p-5 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] hover:border-[#F10070]/40 hover:bg-[#111118] transition-all flex items-center gap-4"
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            ⭐
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-[#F77247] transition-colors">
              Star on GitHub
            </h3>
            <p className="text-gray-400 text-xs">
              github.com/rishabhops/CipherElite — If CipherElite helps you,
              please drop a ⭐ star!
            </p>
          </div>
          <ExternalLink
            size={16}
            className="text-gray-600 group-hover:text-[#F10070] shrink-0"
          />
        </a>
      </section>

      {/* Getting help */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            🆘
          </span>
          How to Get Help
        </h2>
        <div className="space-y-3">
          {[
            {
              step: "1",
              title: "Check the docs first",
              desc: "Use the search bar (Ctrl+K) or browse pages. Most common questions are answered here.",
            },
            {
              step: "2",
              title: "Join @cipherelite_support",
              desc: "CipherElite-only support group. Ask about setup, plugins, or errors — the team is active daily.",
            },
            {
              step: "3",
              title: "Browse Plugin Channel @CipherElite_Userbot",
              desc: "Looking for a specific plugin? Check the community plugin channel first — it's probably already there.",
            },
            {
              step: "4",
              title: "Thanos Pro Hub @thanosprosss",
              desc: "For general Thanos Pro bot help. Works for CipherElite too — a large community is always ready to help.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl border border-[#1e1e2e] bg-[#0d0d14] hover:border-[#F10070]/20 transition-all"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #F10070, #F77247)",
                  color: "white",
                }}
              >
                {item.step}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Developer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            👑
          </span>
          Lead Developer
        </h2>
        <div
          className="p-8 rounded-3xl border border-[#1e1e2e] text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(241,0,112,0.05), rgba(247,114,71,0.03))",
          }}
        >
          <div className="relative inline-block mb-6">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{
                background: "linear-gradient(135deg, #F10070, #F77247)",
              }}
            />
            <img
              src="https://github.com/rishabhops.png"
              alt="Rishabh Anand"
              className="relative w-28 h-28 rounded-full border-4 shadow-2xl"
              style={{ borderColor: "rgba(241,0,112,0.4)" }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{
                background: "linear-gradient(135deg, #F10070, #F77247)",
              }}
            >
              👑
            </div>
          </div>
          <h3 className="text-2xl font-black text-white mb-1">Rishabh Anand</h3>
          <p className="text-[#F77247] font-bold text-sm tracking-wider uppercase mb-3">
            Lead Developer & Founder · Thanos Pro Organisation
          </p>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Security researcher and Telegram automation expert. Built
            CipherElite from scratch — the first anti-hack userbot with free
            24/7 hosting.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://t.me/thanosceo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F10070, #F77247)",
              }}
            >
              📲 Telegram @thanosceo
            </a>
            <a
              href="https://instagram.com/xrishabhanand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white border border-[#1e1e2e] bg-[#111118] hover:border-[#F10070]/40 transition-all"
            >
              📸 Instagram @xrishabhanand
            </a>
            <a
              href="https://github.com/rishabhops"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white border border-[#1e1e2e] bg-[#111118] hover:border-[#F10070]/40 transition-all"
            >
              <Star size={14} className="text-yellow-400" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            🙏
          </span>
          Acknowledgments
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Telethon",
              desc: "The MTProto library powering CipherElite's Telegram connection. Extraordinary open-source engineering.",
              link: "https://github.com/LonamiWebs/Telethon",
              icon: "📡",
            },
            {
              title: "Community Developers",
              desc: "Every plugin developer who submits their work to @CipherElite_Userbot — you make the ecosystem grow.",
              link: "https://t.me/CipherElite_Userbot",
              icon: "💖",
            },
            {
              title: "Thanos Pro Organisation",
              desc: "The team that provides the deployer bot, free infrastructure, and ongoing maintenance.",
              link: "https://t.me/THANOS_PRO",
              icon: "⚡",
            },
            {
              title: "You — Our Users",
              desc: "Every person who uses CipherElite, shares it, and drops a GitHub star makes this worth building.",
              link: "https://github.com/rishabhops/CipherElite/stargazers",
              icon: "🌟",
            },
          ].map((ack, i) => (
            <a
              key={i}
              href={ack.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] hover:border-[#F10070]/30 hover:bg-[#111118] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{ack.icon}</span>
                <h3 className="font-bold text-white text-sm group-hover:text-[#F77247] transition-colors">
                  {ack.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                {ack.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Site Credits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            🌐
          </span>
          Site Credits
        </h2>
        <div className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
              style={{ background: "rgba(241,0,112,0.1)" }}
            >
              🌐
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                CipherElite Documentation Website
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">
                Designed & Developed by{" "}
                <strong className="text-[#F77247]">Rishabh Anand</strong>
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-400">
            {[
              { label: "Developer", value: "Rishabh Anand" },
              { label: "Organisation", value: "Thanos Pro Organisation" },
              { label: "Telegram", value: "@thanosceo" },
              { label: "Instagram", value: "@xrishabhanand" },
              { label: "License", value: "MIT License" },
              { label: "Year", value: "© 2026" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-gray-600 w-24 shrink-0">{row.label}</span>
                <span className="text-white font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div
        className="p-5 rounded-2xl border mb-10"
        style={{
          background: "rgba(107,114,128,0.06)",
          borderColor: "rgba(107,114,128,0.2)",
        }}
      >
        <p className="text-sm font-bold text-gray-400 mb-2">⚖️ Disclaimer</p>
        <p className="text-xs text-gray-500 leading-relaxed">
          CipherElite is an open-source educational project. Rishabh Anand &
          Thanos Pro Organisation are not responsible for any account bans or
          restrictions caused by improper usage. Use responsibly and in
          accordance with Telegram's Terms of Service.
        </p>
      </div>

      <DocPageNav currentId="support" />
    </DocLayout>
  );
}
