import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/constants";

export const alt = SITE_CONFIG.description;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FDF2F8 0%, #F5F3FF 50%, #F0F9FF 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "80%",
          }}
        >
          <div style={{ fontSize: 80, marginBottom: 20 }}>👶</div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#1a1a2e",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {SITE_CONFIG.name}
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "#6B7280",
              textAlign: "center",
              marginTop: 16,
              maxWidth: 600,
              lineHeight: 1.4,
            }}
          >
            {SITE_CONFIG.description}
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 24,
            fontSize: 18,
            color: "#9CA3AF",
          }}
        >
          <span>Due Date Calculator</span>
          <span>•</span>
          <span>Week by Week</span>
          <span>•</span>
          <span>Ovulation Calculator</span>
        </div>
      </div>
    ),
    size,
  );
}
