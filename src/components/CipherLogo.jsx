const GENERATED_LOGO =
  "https://raw.createusercontent.com/a1e405bb-dc4c-4a28-b564-1d634ad25920/";

export default function CipherLogo({ size = 36, useImage = false }) {
  if (useImage) {
    return (
      <img
        src={GENERATED_LOGO}
        alt="CipherElite Logo"
        style={{
          width: size,
          height: size,
          borderRadius: "20%",
          objectFit: "cover",
        }}
      />
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F10070" />
          <stop offset="100%" stopColor="#F77247" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="#0a0a0f"
        stroke="url(#cGrad)"
        strokeWidth="1.5"
      />
      {/* C letter - main arc */}
      <path
        d="M72 32 C72 32 60 22 48 22 C32 22 20 34 20 50 C20 66 32 78 48 78 C60 78 72 68 72 68"
        stroke="url(#cGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />
      {/* Circuit trace top */}
      <line
        x1="72"
        y1="32"
        x2="80"
        y2="32"
        stroke="#F10070"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="83" cy="32" r="2.5" fill="#F10070" filter="url(#glow)" />
      <line
        x1="83"
        y1="32"
        x2="83"
        y2="24"
        stroke="#F10070"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="83" cy="21" r="2" fill="#F77247" />
      {/* Circuit trace bottom */}
      <line
        x1="72"
        y1="68"
        x2="80"
        y2="68"
        stroke="#F10070"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="83" cy="68" r="2.5" fill="#F10070" filter="url(#glow)" />
      <line
        x1="83"
        y1="68"
        x2="83"
        y2="76"
        stroke="#F10070"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="83" cy="79" r="2" fill="#F77247" />
      {/* Small circuit nodes on C */}
      <circle cx="48" cy="22" r="3" fill="#F77247" filter="url(#glow)" />
      <circle cx="20" cy="50" r="3" fill="#F10070" filter="url(#glow)" />
      <circle cx="48" cy="78" r="3" fill="#F77247" filter="url(#glow)" />
      {/* Inner glow dot */}
      <circle cx="50" cy="50" r="4" fill="#F10070" opacity="0.3" />
      <circle cx="50" cy="50" r="2" fill="#F10070" opacity="0.7" />
    </svg>
  );
}
