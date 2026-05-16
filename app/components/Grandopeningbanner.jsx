export default function GrandOpeningRibbon() {
  return (
    <div className="flex justify-center w-full">
      <svg
        viewBox="0 0 1200 280"
        className="w-[380px] md:w-[820px] overflow-visible"
      >
        <defs>
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="10"
              floodColor="rgba(0,0,0,0.4)"
            />
          </filter>

          {/* TEXT CURVE */}
          <path
            id="textCurve"
            d="M170 205 Q600 70 1030 205"
          />
        </defs>

        {/* LEFT TAIL */}
        <path
          d="
            M70 190
            L180 120
            L180 300
            Z
          "
          fill="#7f1d1d"
        />

        {/* RIGHT TAIL */}
        <path
          d="
            M1130 190
            L1020 120
            L1020 300
            Z
          "
          fill="#7f1d1d"
        />

        {/* MAIN CURVED RIBBON */}
        <path
          d="
            M180 120

            Q600 10 1020 120

            L1020 250

            Q600 140 180 250

            Z
          "
          fill="url(#ribbonGradient)"
          filter="url(#shadow)"
        />

        {/* TOP HIGHLIGHT */}
        <path
          d="
            M220 140
            Q600 40 980 140
          "
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* LOWER SHADOW */}
        <path
          d="
            M220 235
            Q600 320 980 235
          "
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />

        {/* TEXT */}
        <text
          fill="white"
          fontSize="70"
          fontWeight="900"
          letterSpacing="6"
          
          style={{
            fontFamily: "Arial Black, sans-serif",
            filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.45))",
            
            
          }}
        >
          <textPath
            href="#textCurve"
            startOffset="50%"
            textAnchor="middle"
          >
            GRAND OPENING!
          </textPath>
        </text>
      </svg>
    </div>
  );
}