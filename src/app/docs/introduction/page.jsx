"use client";
import DocLayout from "../../../components/DocLayout";
import DocPageNav from "../../../components/DocPageNav";
import { Shield, Cpu, Bot } from "lucide-react";

export default function IntroductionPage() {
  return (
    <DocLayout currentId="introduction">
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 flex-wrap mb-4">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
            style={{
              background: "rgba(241,0,112,0.1)",
              borderColor: "rgba(241,0,112,0.3)",
              color: "#F77247",
            }}
          >
            📖 Introduction
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border"
            style={{
              background: "rgba(139,92,246,0.15)",
              borderColor: "rgba(139,92,246,0.4)",
              color: "#a78bfa",
            }}
          >
            🚀 v2.0 — Latest
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          What is{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F10070, #F77247)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CipherElite?
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          The world's first AI-powered anti-hack Telegram userbot. Google AI at
          its core. Free forever.
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-[#F10070]/30 via-[#F10070]/10 to-transparent mb-10" />

      {/* Overview */}
      <section className="mb-12">
        <h2
          id="overview"
          className="text-2xl font-bold text-white mb-5 flex items-center gap-3"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            📖
          </span>
          Overview
        </h2>
        <div className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] mb-6">
          <p className="text-gray-300 leading-relaxed text-base">
            <strong className="text-white">CipherElite</strong> isn't just
            another userbot — it is a{" "}
            <strong className="text-[#F77247]">
              Self-Healing Automation Suite
            </strong>{" "}
            powered by <strong className="text-white">Google AI</strong>. Built
            on <strong className="text-white">Telethon</strong> by{" "}
            <strong className="text-[#F77247]">Rishabh Anand</strong> under{" "}
            <strong className="text-white">Thanos Pro Organisation</strong>, it
            is the{" "}
            <strong className="text-[#F77247]">first Telegram userbot</strong>{" "}
            to use Google AI as its main core engine — solving the biggest
            problems in Telegram automation: security, stability, and
            intelligence.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: <Shield size={20} />,
              title: "Security First",
              desc: "ELITE_SESSION encryption locks your session to CipherElite only. Stolen sessions are useless on any other tool.",
              color: "#ef4444",
            },
            {
              icon: <Cpu size={20} />,
              title: "Always Stable",
              desc: "Smart Plugin Manager auto-installs missing libraries before any plugin crashes. Zero downtime, zero crashes.",
              color: "#3b82f6",
            },
            {
              icon: <Bot size={20} />,
              title: "Google AI Core",
              desc: "Google AI powers PM protection, spam detection, auto-warnings, and smart decisions. Built-in, not a plugin.",
              color: "#8b5cf6",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-[#1e1e2e] bg-[#111118] group hover:border-[#F10070]/30 transition-all"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ background: `${card.color}15`, color: card.color }}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5">
                {card.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2
          id="tech-stack"
          className="text-2xl font-bold text-white mb-5 flex items-center gap-3"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            🛠️
          </span>
          Tech Stack
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              name: "Python 3.10+",
              role: "Core Language",
              badge:
                "https://img.shields.io/badge/Python-3.10%2B-blue?style=for-the-badge&logo=python&logoColor=white",
              desc: "Entire userbot written in modern Python 3.10+ for best performance and compatibility.",
            },
            {
              name: "Telethon",
              role: "Telegram Library",
              badge:
                "https://img.shields.io/badge/Library-Telethon-orange?style=for-the-badge&logo=telegram",
              desc: "Asyncio-based MTProto library providing the fastest and most reliable Telegram API access.",
            },
            {
              name: "Google AI",
              role: "Main AI Core ⭐",
              badge: null,
              special: true,
              desc: "Google AI is the brain of CipherElite v2.0. Powers PM permit, spam detection, 3-strike warnings, and logger intelligence.",
            },
            {
              name: "MongoDB",
              role: "Database",
              badge:
                "https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb",
              desc: "MongoDB stores all user data, plugin configs, warning counts, and bot state persistently.",
            },
            {
              name: "Smart Plugin Engine",
              role: "Exclusive Tech",
              badge: null,
              desc: "Auto-scans all imported libraries in every plugin and silently installs any that are missing.",
            },
            {
              name: "Free AI Models",
              role: "Extra Plugin Pack",
              badge: null,
              desc: "Community extra plugins give users access to multiple free AI models for different tasks.",
            },
          ].map((tech, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] hover:border-[#F10070]/20 transition-all"
              style={
                tech.special
                  ? {
                      borderColor: "rgba(139,92,246,0.3)",
                      background: "rgba(139,92,246,0.05)",
                    }
                  : {}
              }
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-bold text-white text-sm">{tech.name}</h3>
                  <p
                    className="text-xs font-medium"
                    style={{ color: tech.special ? "#a78bfa" : "#F77247" }}
                  >
                    {tech.role}
                  </p>
                </div>
                {tech.badge && (
                  <img
                    src={tech.badge}
                    alt={tech.name}
                    className="h-6 shrink-0"
                  />
                )}
                {!tech.badge && (
                  <span
                    className="text-xs px-2 py-1 rounded-full font-semibold shrink-0"
                    style={{
                      background: tech.special
                        ? "rgba(139,92,246,0.2)"
                        : "rgba(241,0,112,0.15)",
                      color: tech.special ? "#a78bfa" : "#F77247",
                    }}
                  >
                    {tech.special ? "v2.0 Core" : "Exclusive"}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What makes it elite */}
      <section className="mb-12">
        <h2
          id="highlights"
          className="text-2xl font-bold text-white mb-5 flex items-center gap-3"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            ✨
          </span>
          What Makes It Elite?
        </h2>
        <div className="space-y-3">
          {[
            {
              point: "The First Anti-Hack Userbot",
              detail:
                "No other userbot has a session system locked to specific tools. Ours is — stolen sessions are completely useless.",
            },
            {
              point: "First Userbot with Google AI as Main Core",
              detail:
                "CipherElite v2.0 is the first Telegram userbot in history where Google AI is embedded as the main engine, not an add-on.",
            },
            {
              point: "AI Understands Intent — Not Just Keywords",
              detail:
                "The PM Permit system uses Google AI to understand if someone is abusing you, spamming you, or messaging something important.",
            },
            {
              point: "Automatic 3-Strike Protection System",
              detail:
                "If AI detects abuse — it warns the user 3 times automatically, then blocks them. You don't need to do anything.",
            },
            {
              point: "Self-Healing Architecture",
              detail:
                "Missing a library? The plugin manager detects and installs it before your command even fails. Zero crashes.",
            },
            {
              point: "Zero-Cost Deployment",
              detail:
                "Our Deployer Bot hosts your userbot on real servers, free of charge. No VPS, no credit card, ever.",
            },
            {
              point: "Safe Over-the-Air Updates",
              detail:
                "Pull the latest v2.0 code without losing your credentials or configuration. Session and variables are always preserved.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl border border-[#1e1e2e] bg-[#0d0d14] hover:border-[#F10070]/20 transition-all group"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #F10070, #F77247)",
                  color: "white",
                }}
              >
                {i + 1}
              </div>
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-[#F77247] transition-colors">
                  {item.point}
                </p>
                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ultron bot tip — getting IDs */}
      <section className="mb-12">
        <h2
          id="get-ids"
          className="text-2xl font-bold text-white mb-5 flex items-center gap-3"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            🤖
          </span>
          Getting Group ID & User ID — via @ultron2_robot
        </h2>
        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
          <strong className="text-white">@ultron2_robot</strong> is the official
          Thanos Pro group management robot. Use it to easily get your Group ID
          (for logger group) and your User ID (for SUDO_USERS).
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Group ID */}
          <div className="p-5 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14]">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: "rgba(241,0,112,0.1)" }}
              >
                👥
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  Get Your Group ID
                </h3>
                <p className="text-xs text-[#F77247]">
                  For LOG_CHAT_ID variable
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                "Create a new private Telegram group",
                "Go to Group Settings → Chat History → make it Visible",
                "Add @ultron2_robot to the group",
                "Make @ultron2_robot an Admin",
                "Type /id in the group",
                "Bot replies with the Group ID — copy it!",
              ].map((step, si) => (
                <div key={si} className="flex items-start gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{
                      background: "rgba(241,0,112,0.15)",
                      color: "#F10070",
                    }}
                  >
                    {si + 1}
                  </div>
                  <span className="text-xs text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User ID */}
          <div className="p-5 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14]">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: "rgba(247,114,71,0.1)" }}
              >
                👤
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  Get Your User ID
                </h3>
                <p className="text-xs text-[#F77247]">
                  For SUDO_USERS variable
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                "Open Telegram and search for @ultron2_robot",
                "Start a chat with the bot",
                "Type /id in the chat",
                "Bot replies with YOUR Telegram user ID",
                "Copy the number — this is your User ID!",
              ].map((step, si) => (
                <div key={si} className="flex items-start gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{
                      background: "rgba(247,114,71,0.15)",
                      color: "#F77247",
                    }}
                  >
                    {si + 1}
                  </div>
                  <span className="text-xs text-gray-300">{step}</span>
                </div>
              ))}
            </div>
            <a
              href="https://t.me/ultron2_robot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F10070, #F77247)",
              }}
            >
              🤖 Open @ultron2_robot
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div
        className="p-5 rounded-2xl border mb-10"
        style={{
          background: "rgba(241,0,112,0.05)",
          borderColor: "rgba(241,0,112,0.2)",
        }}
      >
        <p className="text-sm font-bold text-[#F77247] mb-1">⚠️ Disclaimer</p>
        <p className="text-xs text-gray-400 leading-relaxed">
          CipherElite is an open-source educational project. Rishabh Anand &
          Thanos Pro Organisation are not responsible for any account bans or
          restrictions caused by improper usage of this tool.
        </p>
      </div>

      <DocPageNav currentId="introduction" />
    </DocLayout>
  );
}
