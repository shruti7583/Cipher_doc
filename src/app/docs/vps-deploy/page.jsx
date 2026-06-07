"use client";
import DocLayout from "../../../components/DocLayout";
import DocPageNav from "../../../components/DocPageNav";
import CodeBlock from "../../../components/CodeBlock";
import { AlertCircle } from "lucide-react";

// Simple numbered steps - pure copy-paste, no fluff
const vpsSteps = [
  {
    num: 1,
    title: "Update VPS & Install Required Tools",
    desc: "Copy and paste this one command. It updates your server and installs Python, Git, and Tmux — everything you need.",
    code: `sudo apt update && sudo apt upgrade -y && sudo apt install python3-pip git tmux -y`,
    note: null,
  },
  {
    num: 2,
    title: "Download CipherElite",
    desc: "This downloads CipherElite onto your server and opens the folder.",
    code: `git clone https://github.com/rishabhops/CipherElite\ncd CipherElite`,
    note: "💡 If you forked the repo, replace the URL with your own fork URL.",
  },
  {
    num: 3,
    title: "Create Your Config File",
    desc: "This creates your .env file. After running this, a text editor opens — fill in your values (see table below), then save.",
    code: `cp sample.env .env && nano .env`,
    note: "📝 In nano: fill your values → press Ctrl+O → press Enter → press Ctrl+X to exit.",
  },
  {
    num: 4,
    title: "Install Python Packages",
    desc: "Installs all the libraries CipherElite needs. Wait for it to finish.",
    code: `pip3 install -r requirements.txt`,
    note: null,
  },
  {
    num: 5,
    title: "Start a Tmux Session",
    desc: "Tmux keeps your bot running even after you close the terminal or disconnect from SSH.",
    code: `tmux new -s cipher`,
    note: "⚡ A new terminal window appears — this is your tmux session. Run the next command inside it.",
  },
  {
    num: 6,
    title: "Start the Bot!",
    desc: "Run this inside your tmux session. Your bot will start and you'll see logs.",
    code: `python3 main.py`,
    note: "✅ Bot is running! To leave it running in background: press Ctrl+B then press D. Done!",
  },
];

const envVars = [
  { name: "API_ID", where: "my.telegram.org → API Dev Tools", required: true },
  {
    name: "API_HASH",
    where: "my.telegram.org → API Dev Tools",
    required: true,
  },
  {
    name: "ELITE_SESSION",
    where: "@elite_session_maker_bot on Telegram",
    required: true,
  },
  {
    name: "LOG_CHAT_ID",
    where: "Your private channel ID (starts with -100)",
    required: false,
  },
  {
    name: "SUDO_USERS",
    where: "Your Telegram user ID (get from @userinfobot)",
    required: false,
  },
];

const tmuxKeys = [
  { key: "Ctrl+B → D", what: "Detach (bot keeps running in background)" },
  { key: "tmux attach -t cipher", what: "Come back to check your bot logs" },
  { key: "Ctrl+C", what: "Stop the bot (inside tmux session)" },
  { key: "tmux ls", what: "See all running sessions" },
  { key: "tmux kill-session -t cipher", what: "Stop bot and delete session" },
];

const termuxSteps = [
  {
    num: 1,
    code: "pkg update && pkg upgrade -y && pkg install python git tmux -y",
  },
  {
    num: 2,
    code: "git clone https://github.com/rishabhops/CipherElite\ncd CipherElite",
  },
  { num: 3, code: "cp sample.env .env && nano .env" },
  { num: 4, code: "pip install -r requirements.txt" },
  { num: 5, code: "tmux new -s cipher" },
  { num: 6, code: "python main.py" },
];

const fixes = [
  {
    error: "ModuleNotFoundError: No module named 'telethon'",
    fix: "pip3 install telethon",
  },
  {
    error: "Bot stops when SSH disconnects",
    fix: "tmux new -s cipher  (always run inside tmux!)",
  },
  {
    error: "Permission denied on pip3",
    fix: "pip3 install --user -r requirements.txt",
  },
  {
    error: "AUTH_KEY_UNREGISTERED / session not working",
    fix: "Get a new ELITE_SESSION from @elite_session_maker_bot",
  },
];

export default function VpsDeployPage() {
  return (
    <DocLayout currentId="vps-deploy">
      {/* Header */}
      <div className="mb-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
          style={{
            background: "rgba(241,0,112,0.1)",
            borderColor: "rgba(241,0,112,0.3)",
            color: "#F77247",
          }}
        >
          💻 VPS / Terminal Deploy
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          VPS / Terminal{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F10070, #F77247)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Setup
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          Simple numbered steps. Every command is copyable. Just paste and go —
          no terminal knowledge needed.
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-[#F10070]/30 via-[#F10070]/10 to-transparent mb-10" />

      {/* Works on banner */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["Ubuntu 20.04+", "Debian", "Termux (Android)", "Any Linux VPS"].map(
          (p, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#1e1e2e] bg-[#111118] text-gray-300"
            >
              ✅ {p}
            </span>
          ),
        )}
      </div>

      {/* Before you start — .env table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            📋
          </span>
          Before You Start — Get These Values Ready
        </h2>
        <p className="text-gray-400 text-sm mb-5 ml-11">
          Have these values copied before starting Step 3 — you will need to
          paste them into the .env file.
        </p>
        <div className="rounded-2xl border border-[#1e1e2e] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr
                className="border-b border-[#1e1e2e]"
                style={{ background: "#111118" }}
              >
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Variable
                </th>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Where to Get It
                </th>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Required?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e1e2e]">
              {envVars.map((v, i) => (
                <tr key={i} className="hover:bg-[#111118] transition-colors">
                  <td className="px-5 py-3">
                    <code className="text-[#F77247] font-mono font-bold text-sm">
                      {v.name}
                    </code>
                  </td>
                  <td className="px-5 py-3 text-gray-400 text-xs">{v.where}</td>
                  <td className="px-5 py-3">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{
                        background: v.required
                          ? "rgba(239,68,68,0.15)"
                          : "rgba(107,114,128,0.15)",
                        color: v.required ? "#ef4444" : "#6b7280",
                      }}
                    >
                      {v.required ? "Required" : "Optional"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Main steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            🚀
          </span>
          Ubuntu / Debian VPS — Step by Step
        </h2>

        <div className="space-y-6">
          {vpsSteps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] overflow-hidden"
            >
              {/* Step header */}
              <div
                className="flex items-center gap-3 px-5 py-4 border-b border-[#1e1e2e]"
                style={{ background: "#111118" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 text-white"
                  style={{
                    background: "linear-gradient(135deg, #F10070, #F77247)",
                  }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-base">{step.title}</h3>
              </div>
              <div className="px-5 pt-4">
                <p className="text-gray-400 text-sm mb-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="px-5 pb-2">
                <CodeBlock code={step.code} />
              </div>
              {step.note && (
                <div
                  className="mx-5 mb-5 flex items-start gap-2.5 p-3 rounded-xl"
                  style={{
                    background: "rgba(241,0,112,0.05)",
                    border: "1px solid rgba(241,0,112,0.15)",
                  }}
                >
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {step.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Done! banner */}
        <div
          className="mt-6 p-6 rounded-2xl border text-center"
          style={{
            background: "rgba(16,185,129,0.06)",
            borderColor: "rgba(16,185,129,0.25)",
          }}
        >
          <div className="text-3xl mb-2">🎉</div>
          <h3 className="text-white font-bold text-base mb-1">
            Bot is Running!
          </h3>
          <p className="text-gray-400 text-sm">
            After pressing <code className="text-[#F77247]">Ctrl+B → D</code> to
            detach, you can safely close your terminal. Bot stays live 24/7.
          </p>
        </div>
      </section>

      {/* Tmux quick reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            ⌨️
          </span>
          Tmux Keys — Quick Reference
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tmuxKeys.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl border border-[#1e1e2e] bg-[#0d0d14]"
            >
              <code
                className="text-xs font-mono shrink-0 px-2.5 py-1.5 rounded-lg whitespace-nowrap"
                style={{ background: "rgba(241,0,112,0.1)", color: "#F77247" }}
              >
                {item.key}
              </code>
              <span className="text-xs text-gray-400">{item.what}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Termux (Android) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            📱
          </span>
          Termux (Android) — Same Steps, Different Commands
        </h2>
        <p className="text-gray-400 text-sm mb-6 ml-11">
          Termux uses <code className="text-[#F77247]">pkg</code> instead of{" "}
          <code className="text-[#F77247]">apt</code>. Same idea — just copy and
          paste each one.
        </p>

        <div className="space-y-4">
          {termuxSteps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] overflow-hidden"
            >
              <div
                className="flex items-center gap-3 px-5 py-3 border-b border-[#1e1e2e]"
                style={{ background: "#111118" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 text-white"
                  style={{
                    background: "linear-gradient(135deg, #F10070, #F77247)",
                  }}
                >
                  {step.num}
                </div>
                <span className="text-xs text-gray-400">Step {step.num}</span>
              </div>
              <div className="px-5 pb-2 pt-2">
                <CodeBlock code={step.code} />
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4 flex items-start gap-2.5 p-4 rounded-xl"
          style={{
            background: "rgba(247,114,71,0.06)",
            border: "1px solid rgba(247,114,71,0.2)",
          }}
        >
          <span className="text-sm shrink-0">⚠️</span>
          <p className="text-xs text-gray-300 leading-relaxed">
            On Termux, disable battery optimization for the Termux app so
            Android doesn't kill it. Settings → Apps → Termux → Battery →
            Unrestricted.
          </p>
        </div>
      </section>

      {/* Common fixes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
            style={{ background: "rgba(241,0,112,0.15)", color: "#F10070" }}
          >
            🔧
          </span>
          Something Wrong? Fix It Here
        </h2>
        <div className="space-y-4">
          {fixes.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-[#1e1e2e] bg-[#0d0d14]"
            >
              <p className="text-sm font-semibold text-red-400 mb-2">
                ❌ {item.error}
              </p>
              <p className="text-xs text-gray-500 mb-1">✅ Fix — run this:</p>
              <CodeBlock code={item.fix} />
            </div>
          ))}
        </div>
      </section>

      {/* Security warning */}
      <div
        className="flex items-start gap-3 p-5 rounded-2xl border mb-10"
        style={{
          background: "rgba(239,68,68,0.05)",
          borderColor: "rgba(239,68,68,0.2)",
        }}
      >
        <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-red-400 mb-1">
            🔒 Security Reminder
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Never push your <code className="text-[#F77247]">.env</code> file to
            GitHub. It contains your ELITE_SESSION which gives full access to
            your Telegram account. It is already in{" "}
            <code className="text-[#F77247]">.gitignore</code> — but double
            check before every push.
          </p>
        </div>
      </div>

      <DocPageNav currentId="vps-deploy" />
    </DocLayout>
  );
}
