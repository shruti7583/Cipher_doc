"use client";
import CipherLogo from "../../components/CipherLogo";

const SVG_CODE = `<svg width="512" height="512" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F10070"/>
      <stop offset="100%" stop-color="#F77247"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="50" cy="50" r="48" fill="#0a0a0f" stroke="url(#cGrad)" stroke-width="1.5"/>
  <path d="M72 32 C72 32 60 22 48 22 C32 22 20 34 20 50 C20 66 32 78 48 78 C60 78 72 68 72 68"
    stroke="url(#cGrad)" stroke-width="8" stroke-linecap="round" fill="none" filter="url(#glow)"/>
  <line x1="72" y1="32" x2="80" y2="32" stroke="#F10070" stroke-width="2" stroke-linecap="round"/>
  <circle cx="83" cy="32" r="2.5" fill="#F10070" filter="url(#glow)"/>
  <line x1="83" y1="32" x2="83" y2="24" stroke="#F10070" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="83" cy="21" r="2" fill="#F77247"/>
  <line x1="72" y1="68" x2="80" y2="68" stroke="#F10070" stroke-width="2" stroke-linecap="round"/>
  <circle cx="83" cy="68" r="2.5" fill="#F10070" filter="url(#glow)"/>
  <line x1="83" y1="68" x2="83" y2="76" stroke="#F10070" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="83" cy="79" r="2" fill="#F77247"/>
  <circle cx="48" cy="22" r="3" fill="#F77247" filter="url(#glow)"/>
  <circle cx="20" cy="50" r="3" fill="#F10070" filter="url(#glow)"/>
  <circle cx="48" cy="78" r="3" fill="#F77247" filter="url(#glow)"/>
  <circle cx="50" cy="50" r="4" fill="#F10070" opacity="0.3"/>
  <circle cx="50" cy="50" r="2" fill="#F10070" opacity="0.7"/>
</svg>`;

function downloadSVG() {
  const blob = new Blob([SVG_CODE], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cipherelite-logo.svg";
  a.click();
  URL.revokeObjectURL(url);
}

function downloadPNG(size) {
  const blob = new Blob([SVG_CODE], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = new window.Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, size, size);
    const link = document.createElement("a");
    link.download = `cipherelite-logo-${size}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    URL.revokeObjectURL(url);
  };
  img.src = url;
}

function downloadJPG(size) {
  const blob = new Blob([SVG_CODE], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = new window.Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0a0a0f";
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(img, 0, 0, size, size);
    const link = document.createElement("a");
    link.download = `cipherelite-logo-${size}.jpg`;
    link.href = canvas.toDataURL("image/jpeg", 0.97);
    link.click();
    URL.revokeObjectURL(url);
  };
  img.src = url;
}

const buttons = [
  {
    label: "⬇️ SVG — Vector (Any Size)",
    action: () => downloadSVG(),
    gradient: "linear-gradient(135deg,#F10070,#F77247)",
  },
  {
    label: "🖼️ PNG — 512 × 512",
    action: () => downloadPNG(512),
    gradient: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
  },
  {
    label: "🖼️ PNG — 1024 × 1024",
    action: () => downloadPNG(1024),
    gradient: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
  },
  {
    label: "📸 JPG — 512 × 512 (Black BG)",
    action: () => downloadJPG(512),
    gradient: "linear-gradient(135deg,#065f46,#10b981)",
  },
  {
    label: "📸 JPG — 1024 × 1024 (Black BG)",
    action: () => downloadJPG(1024),
    gradient: "linear-gradient(135deg,#065f46,#10b981)",
  },
];

export default function LogoDownloadPage() {
  return (
    <div
      style={{ background: "#0a0a0f", minHeight: "100vh", color: "white" }}
      className="flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-sm">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mb-1">
            Cipher
            <span
              style={{
                background: "linear-gradient(135deg,#F10070,#F77247)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Elite
            </span>{" "}
            Logo
          </h1>
          <p className="text-gray-500 text-sm">Pick your format below</p>
        </div>

        {/* Logo preview */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-5">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle,#F10070 0%,transparent 70%)",
                transform: "scale(0.75)",
              }}
            />
            <CipherLogo size={160} />
          </div>
          {/* Size previews */}
          <div className="flex items-end gap-5">
            {[64, 48, 32, 20].map((s) => (
              <div key={s} className="flex flex-col items-center gap-1.5">
                <CipherLogo size={s} />
                <span className="text-[10px] text-gray-600">{s}px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download buttons */}
        <div className="rounded-2xl border border-[#1e1e2e] bg-[#0d0d14] p-5 space-y-3">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={btn.action}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white text-left transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: btn.gradient,
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-gray-700 mt-6">
          © 2026 Rishabh Anand · CipherElite
        </p>
      </div>

      <style jsx global>{`
        body { background-color: #0a0a0f; }
      `}</style>
    </div>
  );
}
