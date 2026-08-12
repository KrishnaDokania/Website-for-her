import UniverseCanvas from "./UniverseCanvas";

export default function UniverseScene({ progress = 0 }) {
  /*
    ================================================
    SCENE TIMELINE

    Night
      ↓
    Dawn
      ↓
    Day
      ↓
    Sunset
      ↓
    Night
    ================================================
  */

  const nightToDawn = Math.min(
    Math.max((progress - 0.34) / 0.20, 0),
    1
  );

  const dawnToDay = Math.min(
    Math.max((progress - 0.50) / 0.25, 0),
    1
  );

  const sunset = Math.min(
    Math.max((progress - 0.78) / 0.22, 0),
    1
  );


  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
      style={{
        zIndex: 0,
        isolation: "isolate",
      }}
    >

      {/* ==================================================
          NIGHT
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          zIndex: 0,

          background: `
            radial-gradient(
              circle at 50% 30%,
              #172554 0%,
              #0f172a 35%,
              #020617 100%
            )
          `,

          opacity:
            1 - nightToDawn,
        }}
      />


      {/* ==================================================
          DAWN
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          zIndex: 0,

          background: `
            linear-gradient(
              to bottom,
              #312e81,
              #7c3aed,
              #fb7185,
              #fb923c
            )
          `,

          opacity:
            nightToDawn *
            (1 - dawnToDay),
        }}
      />


      {/* ==================================================
          DAY
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          zIndex: 0,

          background: `
            linear-gradient(
              to bottom,
              #60a5fa,
              #38bdf8,
              #bae6fd
            )
          `,

          opacity:
            dawnToDay,
        }}
      />


      {/* ==================================================
          SUNSET
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          zIndex: 0,

          background: `
            linear-gradient(
              to bottom,
              #312e81,
              #c2410c,
              #fb923c,
              #581c87
            )
          `,

          opacity:
            sunset,
        }}
      />


      {/* ==================================================
          THREE.JS

          Sun + Moon are HERE.

          They are above the backgrounds,
          but below the HTML content.
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          zIndex: 1,
        }}
      >
        <UniverseCanvas
          progress={progress}
        />
      </div>


      {/* ==================================================
          FINAL EVENING OVERLAY

          IMPORTANT:

          This must be BELOW the Three.js objects.

          Previously it was rendered after the canvas
          without a controlled z-index, which could
          interfere with the Sun/Moon.
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          zIndex: 0,

          background:
            "linear-gradient(to bottom, #020617, #1e1b4b)",

          opacity:
            sunset * 0.65,
        }}
      />

    </div>
  );
}