"use client";
import { useState } from "react";
import DocLayout from "../../../components/DocLayout";
import DocPageNav from "../../../components/DocPageNav";
import { Copy, Check, Eye, EyeOff } from "lucide-react";

const vars = [
  {
    name: "API_ID",
    required: true,
    type: "Integer",
    example: "12345678",
    category: "Telegram API",
    desc: "Your Telegram application's API ID. Every Telegram app needs this to connect to the Telegram API. You get this when you create an application at my.telegram.org.",
    howToGet:
      "Go to my.telegram.org → Log in → API Development Tools → Create App → Copy the app_id value.",
    link: {
      label: "Get it at my.telegram.org",
      href: "https://my.telegram.org",
    },
  },
  {
    name: "API_HASH",
    required: true,
    type: "String",
    example: "abcdef1234567890abcdef1234567890",
    category: "Telegram API",
    desc: "Your Telegram application's API Hash. This is the secret key paired with your API_ID. Together they identify your app to Telegram's servers.",
    howToGet:
      "Go to my.telegram.org → API Development Tools → Copy the api_hash value (the long string below api_id).",
    link: {
      label: "Get it at my.telegram.org",
      href: "https://my.telegram.org",
    },
  },
  {
    name: "ELITE_SESSION",
    required: true,
    type: "String (Encrypted)",
    example: "xxxxxxxx...xxxxxxxx (very long string)",
    category: "Authentication",
    desc: "Your CipherElite-specific session string. Unlike regular Telegram session strings, this is cryptographically locked to CipherElite's authentication layer. Even if stolen, it cannot be used on any other tool. This is what keeps your account safe.",
    howToGet:
      "Start @elite_session_maker_bot on Telegram → Follow the prompts → Authenticate with your phone number and OTP → Copy the long session string it gives you.",
    link: {
      label: "Generate at @elite_session_maker_bot",
      href: "https://t.me/elite_session_maker_bot",
    },
    secret: true,
  },
  {
    name: "LOG_CHAT_ID",
    required: false,
    type: "Integer (Negative)",
    example: "-100123456789",
    category: "Logging",
    desc: "The ID of a private Telegram GROUP where CipherElite will send system logs, startup messages, errors, AI decisions, and important events. It must be a group (not a channel) and CipherElite must be a member of that group.",
    howToGet:
      "Create a private Telegram group → Add CipherElite (your userbot) to it → Add @ultron2_robot to the group → Send /id in the group — the bot will reply with the group ID (it starts with -100). Copy that number.",
    link: null,
  },
  {
    name: "SUDO_USERS",
    required: false,
    type: "Integer (User ID)",
    example: "123456789",
    category: "Access Control",
    desc: "Your Telegram user ID. Users listed here have admin access to the bot — they can run all commands, change settings, and update the bot. You should always add your own user ID here.",
    howToGet:
      "Start a chat with @ultron2_robot on Telegram → Send /id — it will instantly reply with your numeric Telegram user ID. Copy that number.",
    link: {
      label: "Get your ID via @ultron2_robot",
      href: "https://t.me/ultron2_robot",
    },
  },
];

function VarCard({ v }) {
  const [showExample, setShowExample] = useState(!v.secret);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(v.example);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] overflow-hidden hover:border-[#F10070]/20 transition-all group">
      {/* Header */}
      <div className="p-5 border-b border-[#1e1e2e]">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <code className="text-lg font-black font-mono text-[#F77247]">
              {v.name}
            </code>
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
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "rgba(241,0,112,0.1)", color: "#F10070" }}
            >
              {v.category}
            </span>
          </div>
          <span className="text-xs text-gray-500 font-mono bg-[#111118] px-2 py-1 rounded-lg">
            {v.type}
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{v.desc}</p>

        {/* Example value */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">
            Example Value
          </p>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#111118] border border-[#1e1e2e]">
            <code
              className="flex-1 text-xs font-mono truncate"
              style={{ color: showExample ? "#34d399" : "#6b7280" }}
            >
              {showExample ? v.example : "••••••••••••••••••••••••"}
            </code>
            <div className="flex items-center gap-1.5 shrink-0">
              {v.secret && (
                <button
                  onClick={() => setShowExample(!showExample)}
                  className="p-1.5 rounded-lg hover:bg-[#1e1e2e] transition-colors text-gray-500 hover:text-white"
                >
                  {showExample ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
              )}
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg hover:bg-[#1e1e2e] transition-colors"
                style={{ color: copied ? "#10b981" : "#6b7280" }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
              </button>
            </div>
          </div>
        </div>

        {/* How to get */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">
            How to Get It
          </p>
          <p className="text-xs text-gray-400 leading-relaxed mb-2">
            {v.howToGet}
          </p>
          {v.link && (
            <a
              href={v.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
              style={{ background: "rgba(241,0,112,0.1)", color: "#F77247" }}
            >
              🔗 {v.link.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConfigurationPage() {
  return (
    <DocLayout currentId="configuration">
      <div className="mb-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
          style={{
            background: "rgba(241,0,112,0.1)",
            borderColor: "rgba(241,0,112,0.3)",
            color: "#F77247",
          }}
        >
          ⚙️ Configuration
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Environment{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F10070, #F77247)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Variables
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          Every variable explained in detail — what it does, where to get it,
          and what format it expects.
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-[#F10070]/30 via-[#F10070]/10 to-transparent mb-10" />

      {/* Quick reference table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-5">Quick Reference</h2>
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
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hidden sm:table-cell">
                  Type
                </th>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hidden md:table-cell">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e1e2e]">
              {vars.map((v, i) => (
                <tr key={i} className="hover:bg-[#111118] transition-colors">
                  <td className="px-5 py-3">
                    <code className="font-mono font-bold text-sm text-[#F77247]">
                      {v.name}
                    </code>
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-500 font-mono hidden sm:table-cell">
                    {v.type}
                  </td>
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
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className="text-xs text-gray-500">{v.category}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Security notice */}
      <div
        className="p-5 rounded-2xl border mb-10"
        style={{
          background: "rgba(239,68,68,0.06)",
          borderColor: "rgba(239,68,68,0.2)",
        }}
      >
        <p className="text-sm font-bold text-red-400 mb-2">
          🛡️ Security Notice — Read This First
        </p>
        <div className="space-y-2">
          {[
            "Never share your ELITE_SESSION, API_ID, or API_HASH with anyone.",
            "Never commit your .env file to GitHub — it is already in .gitignore but verify before pushing.",
            "The ELITE_SESSION is useless to anyone other than CipherElite — but keep it private anyway.",
            "If you suspect your session is compromised, terminate it at my.telegram.org → Active Sessions.",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-red-400 text-xs mt-0.5">⚠️</span>
              <span className="text-xs text-red-300/80 leading-relaxed">
                {tip}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed var cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Detailed Breakdown
        </h2>
        <div className="space-y-5">
          {vars.map((v, i) => (
            <VarCard key={i} v={v} />
          ))}
        </div>
      </section>

      {/* Sample .env */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-5">Sample .env File</h2>
        <p className="text-gray-400 text-sm mb-4">
          This is what your <code className="text-[#F77247]">.env</code> file
          should look like after you fill it in. Replace the example values with
          your real ones.
        </p>
        <div className="rounded-xl overflow-hidden border border-[#1e1e2e]">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#111118] border-b border-[#1e1e2e]">
            <span className="text-xs text-gray-400 font-mono">.env</span>
          </div>
          <div className="bg-[#0d0d14] p-5 font-mono text-sm space-y-1">
            <div className="text-gray-600">
              # ===== CipherElite Configuration =====
            </div>
            <div className="mt-2 text-gray-600">
              # --- Telegram API (get from my.telegram.org) ---
            </div>
            <div>
              <span className="text-[#a78bfa]">API_ID</span>
              <span className="text-gray-500">=</span>
              <span className="text-[#34d399]">12345678</span>
            </div>
            <div>
              <span className="text-[#a78bfa]">API_HASH</span>
              <span className="text-gray-500">=</span>
              <span className="text-[#34d399]">
                abcdef1234567890abcdef1234567890
              </span>
            </div>
            <div className="mt-2 text-gray-600">
              # --- Session (get from @elite_session_maker_bot) ---
            </div>
            <div>
              <span className="text-[#F77247]">ELITE_SESSION</span>
              <span className="text-gray-500">=</span>
              <span className="text-[#F10070]">xxxxxxxxxxxxxxxxxxxx...</span>
            </div>
            <div className="mt-2 text-gray-600">
              # --- Optional Configuration ---
            </div>
            <div>
              <span className="text-[#a78bfa]">LOG_CHAT_ID</span>
              <span className="text-gray-500">=</span>
              <span className="text-[#34d399]">-100123456789</span>
            </div>
            <div>
              <span className="text-[#a78bfa]">SUDO_USERS</span>
              <span className="text-gray-500">=</span>
              <span className="text-[#34d399]">987654321</span>
            </div>
          </div>
        </div>
      </section>

      <DocPageNav currentId="configuration" />
    </DocLayout>
  );
}
