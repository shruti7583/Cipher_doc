"use client";
import { useEffect } from "react";

export default function DocsRedirect() {
  useEffect(() => {
    window.location.replace("/docs/introduction");
  }, []);

  return (
    <div
      style={{
        background: "#0a0a0f",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "#F77247", fontFamily: "monospace" }}>
        Redirecting to docs...
      </p>
    </div>
  );
}
