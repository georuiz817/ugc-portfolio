import React from "react";

export function TrustBy() {
  // Placeholder image URLs – replace with your own images later
  const firstRowImages = [
    "/placeholder1.png",
    "/placeholder2.png",
    "/placeholder3.png",
  ];

  const secondRowImages = [
    "/placeholder4.png",
    "/placeholder5.png",
    "/placeholder6.png",
    "/placeholder7.png",
    "/placeholder8.png",
  ];

  return (
    <section className="trustby-section" style={{ padding: "3rem 0" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2
          style={{
            fontWeight: 700,
            fontSize: "2rem",
            letterSpacing: "0.01em",
          }}
        >
          Trusted By...
        </h2>
      </div>
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* First row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "2rem",
            width: "100%",
          }}
        >
          {firstRowImages.map((src, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={src}
                alt={`Trusted brand ${idx + 1}`}
                style={{ maxHeight: "70px", maxWidth: "100%", objectFit: "contain", width: "100%" }}
              />
            </div>
          ))}
        </div>
        {/* Second row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          {secondRowImages.map((src, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={src}
                alt={`Trusted brand ${idx + 4}`}
                style={{ maxHeight: "60px", maxWidth: "100%", objectFit: "contain", width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}