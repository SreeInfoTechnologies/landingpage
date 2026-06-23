import { company } from "@/lib/data";

/** Shared 1200x630 social share card, rendered by next/og at build time. */
export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${company.name} — ${company.tagline}`;

const NAVY = "#15233f";
const NAVY_DEEP = "#0f1a30";
const GOLD = "#d6b66e";

export default function OgImage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "72px 80px",
        justifyContent: "space-between",
        background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* brand row */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", width: "20px", height: "20px", borderRadius: "5px", background: GOLD }} />
        <div style={{ fontSize: "26px", letterSpacing: "4px", textTransform: "uppercase", color: GOLD, fontWeight: 700 }}>
          {company.name}
        </div>
      </div>

      {/* headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <div style={{ fontSize: "92px", fontWeight: 800, lineHeight: 1.04 }}>{company.tagline}</div>
        <div style={{ display: "flex", fontSize: "34px", color: "rgba(255,255,255,0.78)", maxWidth: "920px", lineHeight: 1.3 }}>
          Consulting, outsourcing, marketing and technology — handled by one team.
        </div>
      </div>

      {/* footer row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "26px", color: "rgba(255,255,255,0.7)" }}>
        <div style={{ display: "flex" }}>{company.location} · India</div>
        <div style={{ display: "flex", color: GOLD }}>sreeinfotechnologies.com</div>
      </div>
    </div>
  );
}
