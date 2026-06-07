"use client";
import DocLayout from "../../../components/DocLayout";
import DocPageNav from "../../../components/DocPageNav";

const features = [
  {
    icon: "🧠",
    title: "Smart Plugin Manager",
    badge: "Exclusive",
    badgeColor: "#F10070",
    desc: "The crown jewel of CipherElite. When you load a plugin, our engine scans every import statement in that plugin's code. If a library is missing from the Python environment, it silently runs pip install in the background and retries — all within milliseconds. No more crashes. No more manual installation.",
    points: [
      "Auto-detects missing libraries at load time",
      "Runs pip install silently in background",
      "Retries plugin load after installation",
      "Supports complex multi-dependency plugins",
    ],
    color: "#3b82f6",
  },
  {
    icon: "🤖",
    title: "Google AI — Main Core Intelligence",
    badge: "First Ever",
    badgeColor: "#8b5cf6",
    desc: "CipherElite is the FIRST Telegram userbot to use Google AI as its main core engine. Google AI powers everything — from understanding conversations to making smart decisions automatically. This is not an add-on or a plugin. It is built directly into the heart of CipherElite v2.0.",
    points: [
      "Google AI as the main brain of the entire userbot",
      "Understands full conversation context, not just commands",
      "Powers PM Permit, auto-decisions, and smart alerts",
      "First userbot ever with this level of AI integration",
    ],
    color: "#8b5cf6",
    highlight: true,
  },
  {
    icon: "🛡️",
    title: "AI-Powered PM Permit",
    badge: "Google AI",
    badgeColor: "#F10070",
    desc: "The most advanced PM protection system ever built for a Telegram userbot. Google AI reads every incoming private message and automatically understands the intent — whether the person is abusing you, spamming you, sending something important, or genuinely trying to talk. No keywords, no rules — pure AI understanding.",
    points: [
      "AI detects abusers, spammers, and important contacts",
      "Automatically sends 3 warnings before blocking",
      "Reports everything to your private logger group",
      "Understands intent — not just keywords",
    ],
    color: "#F10070",
  },
  {
    icon: "⚠️",
    title: "3-Strike Auto Warning & Block System",
    badge: "AI Enforcement",
    badgeColor: "#ef4444",
    desc: "When the AI detects someone abusing or spamming you in PMs, it does not act immediately. It gives the user exactly 3 warnings automatically. If the user continues after 3 warnings, CipherElite blocks them without any input from you. All of this is logged to your logger group in real time.",
    points: [
      "Warning 1: AI sends polite automated warning",
      "Warning 2: Stronger warning with notice",
      "Warning 3: Final warning before action",
      "After 3rd warning: User is automatically blocked",
    ],
    color: "#ef4444",
  },
  {
    icon: "📋",
    title: "Smart Logger Group",
    badge: "Real-time",
    badgeColor: "#06b6d4",
    desc: "CipherElite creates a private logger group where it reports everything important — who messaged you, who got warned, who got blocked, and what the AI detected. You get a full live feed of what your bot is doing, all in one private Telegram group. Never miss anything important again.",
    points: [
      "Reports every PM interaction with AI analysis",
      "Logs all warnings issued to users",
      "Alerts when someone is blocked",
      "Shows AI reasoning for every decision made",
    ],
    color: "#06b6d4",
  },
  {
    icon: "🆓",
    title: "Free AI Models — Extra Plugin Pack",
    badge: "Community",
    badgeColor: "#10b981",
    desc: "Besides the core Google AI, CipherElite has an Extra Plugins pack where users can access more free AI models. These community AI plugins let you use different AI providers for different tasks — translation, creative writing, image understanding, and more — all completely free.",
    points: [
      "Multiple free AI models available as plugins",
      "Use different AI models for different tasks",
      "No API key required for most free models",
      "Community-maintained and regularly updated",
    ],
    color: "#10b981",
  },
  {
    icon: "🛡️",
    title: "Anti-Hack Session (ELITE_SESSION)",
    badge: "Security",
    badgeColor: "#ef4444",
    desc: "Standard Telegram StringSessions can be stolen and reused on any tool. Our ELITE_SESSION is cryptographically bound to CipherElite's internal auth layer. Even if a hacker obtains your session string, they cannot use it on Telethon, TgUserbot, or any other tool. It simply won't authenticate.",
    points: [
      "Locked to CipherElite's auth layer only",
      "Cannot be used on any other userbot framework",
      "Encrypted with additional key derivation",
      "Session auto-invalidates on unauthorized access attempts",
    ],
    color: "#dc2626",
  },
  {
    icon: "⚡",
    title: "Free 24/7 Hosting via Deployer Bot",
    badge: "Free",
    badgeColor: "#10b981",
    desc: "We run a dedicated Telegram bot (@elitedeployerbot) that provisions a free hosting slot for your CipherElite instance. Your forked GitHub repo is cloned to our servers, environment variables are injected securely, and your bot is kept alive 24/7 with live log streaming back to you in Telegram.",
    points: [
      "Real server hosting, completely free",
      "Live log streaming inside Telegram",
      "Instant restart and variable editing via bot",
      "No credit card, no VPS, no technical setup",
    ],
    color: "#10b981",
  },
  {
    icon: "🎭",
    title: "Native Fun Plugins",
    badge: "Zero Lag",
    badgeColor: "#f59e0b",
    desc: "CipherElite ships with a suite of hand-optimized fun plugins written specifically for this userbot. Unlike community plugins that are often slow or buggy, our native plugins are tested, optimized, and maintained by the core team. Games, animations, quizzes, and 'Magic' commands all run with millisecond response times.",
    points: [
      "Custom-written game commands",
      "Smooth typewriter animation effects",
      "'Magic' reveal commands",
      "Optimized for Telegram's rate limits",
    ],
    color: "#f59e0b",
  },
  {
    icon: "🔄",
    title: "Safe Over-The-Air Updates",
    badge: "Safe",
    badgeColor: "#06b6d4",
    desc: "Updating a userbot typically risks wiping your configuration. CipherElite's update system uses a smart merge strategy — it pulls only the core bot files from the latest release, never touching your .env or config files. Your session, your sudo users, and your variable overrides are always preserved.",
    points: [
      "Git-based incremental updates",
      "Never overwrites .env or config",
      "Session and variables always preserved",
      "Rollback command if update causes issues",
    ],
    color: "#06b6d4",
  },
  {
    icon: "📊",
    title: "Built-in Analytics & Monitoring",
    badge: "Dashboard",
    badgeColor: "#ec4899",
    desc: "Know exactly how your bot is performing. CipherElite includes built-in commands to check response latency (ping), memory usage, uptime, plugin load times, and command usage frequency. All data is reported directly in Telegram — no external dashboard needed.",
    points: [
      "Real-time ping and latency check",
      "Memory and CPU usage stats",
      "Plugin load time profiling",
      "Command frequency analytics",
    ],
    color: "#ec4899",
  },
  {
    icon: "🔌",
    title: "Extensible Plugin System",
    badge: "Open",
    badgeColor: "#84cc16",
    desc: "CipherElite's plugin architecture is fully open. Write your own plugins using the standard Telethon event handler pattern — they are automatically discovered and loaded on startup. No registration, no manifests, no boilerplate. The Smart Plugin Manager handles any dependencies your plugin needs.",
    points: [
      "Drop-in plugin discovery",
      "Standard Telethon handler pattern",
      "Auto dependency resolution",
      "Community plugin store at @CipherElite_Userbot",
    ],
    color: "#84cc16",
  },
];

export default function FeaturesPage() {
  return (
    <DocLayout currentId="features">
      {/* Header */}
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
            ⚡ Features
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border"
            style={{
              background: "rgba(139,92,246,0.15)",
              borderColor: "rgba(139,92,246,0.4)",
              color: "#a78bfa",
            }}
          >
            🚀 Version 2.0
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Elite{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F10070, #F77247)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Capabilities
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          CipherElite v2.0 — the first Telegram userbot with Google AI as its
          main core. Built for security, intelligence, and zero headaches.
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-[#F10070]/30 via-[#F10070]/10 to-transparent mb-10" />

      {/* Google AI Hero banner */}
      <div
        className="p-6 rounded-2xl border mb-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(241,0,112,0.08))",
          borderColor: "rgba(139,92,246,0.3)",
        }}
      >
        <div className="flex items-start gap-4">
          <div className="text-4xl shrink-0">🤖</div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <h2 className="text-white font-black text-xl">
                Powered by Google AI — World's First
              </h2>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-bold"
                style={{ background: "rgba(139,92,246,0.2)", color: "#a78bfa" }}
              >
                Industry First
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              CipherElite v2.0 is the{" "}
              <strong className="text-[#F77247]">
                first Telegram userbot in history
              </strong>{" "}
              to use{" "}
              <strong className="text-white">
                Google AI as its main core engine
              </strong>
              . Not a plugin. Not an add-on. Google AI is embedded in the heart
              of every major feature — PM protection, spam detection,
              auto-warnings, logger reports, and smart decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Quick overview table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-5">Quick Overview</h2>
        <div className="rounded-2xl border border-[#1e1e2e] overflow-x-auto">
          <table className="w-full text-left" style={{ minWidth: 520 }}>
            <thead>
              <tr
                className="border-b border-[#1e1e2e]"
                style={{ background: "#111118" }}
              >
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                  Feature
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  What It Does
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e1e2e]">
              {features.map((f, i) => (
                <tr key={i} className="hover:bg-[#111118] transition-colors">
                  <td className="px-4 py-3 font-semibold text-white text-xs whitespace-nowrap">
                    {f.icon} {f.title}
                  </td>
                  <td
                    className="px-4 py-3 text-gray-400 text-xs leading-relaxed"
                    style={{ maxWidth: 220 }}
                  >
                    {f.desc.slice(0, 60)}...
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        background: `${f.badgeColor}20`,
                        color: f.badgeColor,
                      }}
                    >
                      {f.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed feature cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-8">
          In-Depth Breakdown
        </h2>
        <div className="space-y-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-[#0d0d14] hover:border-[#F10070]/20 transition-all group"
              style={{
                borderColor: f.highlight
                  ? "rgba(139,92,246,0.3)"
                  : "rgba(30,30,46,1)",
                background: f.highlight
                  ? "linear-gradient(135deg, rgba(139,92,246,0.06), rgba(241,0,112,0.04))"
                  : "#0d0d14",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${f.color}15` }}
                >
                  {f.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="font-bold text-white text-lg group-hover:text-[#F77247] transition-colors">
                      {f.title}
                    </h3>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold shrink-0"
                      style={{
                        background: `${f.badgeColor}20`,
                        color: f.badgeColor,
                      }}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-2 mt-4 pl-16">
                {f.points.map((p, pi) => (
                  <div key={pi} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: f.color }}
                    />
                    <span className="text-xs text-gray-400">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="mb-12">
        <div
          className="p-6 rounded-2xl border border-dashed border-[#F10070]/30 text-center"
          style={{ background: "rgba(241,0,112,0.04)" }}
        >
          <div className="text-3xl mb-3">🔮</div>
          <h3 className="text-white font-black text-lg mb-2">
            More Plugins Coming Soon
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-4 leading-relaxed">
            The CipherElite team is actively building more advanced plugins.
            Join the plugin channel to get notified the moment new plugins drop.
          </p>
          <a
            href="https://t.me/CipherElite_Userbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #F10070, #F77247)" }}
          >
            📢 Follow @CipherElite_Userbot
          </a>
        </div>
      </section>

      <DocPageNav currentId="features" />
    </DocLayout>
  );
}
