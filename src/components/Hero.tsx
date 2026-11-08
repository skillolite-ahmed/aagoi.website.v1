import React from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Network,
  Users,
  TrendingUp,
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC]">
      {/* Subtle background tech grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#152D46 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badges: Coming Soon & Introductory Label */}
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1269A8]/10 text-[#1269A8] border border-[#1269A8]/20">
                <span className="w-2 h-2 rounded-full bg-[#1269A8] animate-pulse" />
                {siteConfig.status}
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#526477] bg-white px-3 py-1 rounded-full border border-[#E5EAF0]">
                {siteConfig.introLabel}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#152D46] tracking-tight leading-[1.12]">
              Your Experience Deserves a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1269A8] via-[#1686D9] to-[#17A6A0]">
                Better Career Journey.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#526477] leading-relaxed max-w-2xl font-normal">
              Aagoi brings together AI-powered solutions, practical technology and
              personalised human assistance to help experienced professionals navigate
              their next career move with greater clarity, structure and confidence.
            </p>

            {/* Supporting Pillar Labels */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#1686D9]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  AI-Powered Solutions
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Users className="w-4 h-4 text-[#17A6A0]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  Human-Centred Support
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Network className="w-4 h-4 text-[#1269A8]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  Connected Career Ecosystem
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.forms.client}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1269A8] hover:bg-[#1686D9] text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#1269A8] focus:ring-offset-2"
              >
                <span>Request Early Access</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F9FC] text-[#152D46] border border-[#E5EAF0] text-base font-semibold px-6 py-3.5 rounded-xl hover:border-[#1269A8]/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1269A8]/30"
              >
                <span>Explore Aagoi</span>
                <ArrowDown className="w-4 h-4 text-[#526477]" />
              </a>
            </div>

            {/* Sub-note */}
            <p className="text-xs sm:text-sm text-[#526477] pt-1">
              Be among the first to explore what we&apos;re building.
            </p>
          </div>

          {/* Right Column: Aagoi Career Journey Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative gradient glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#1269A8]/10 via-[#17A6A0]/10 to-[#1686D9]/15 rounded-3xl blur-2xl -z-10" />

              {/* Main Container Card */}
              <div className="bg-white/95 rounded-2xl border border-[#E5EAF0] p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">

                {/* Card Header — preserved structure, updated label */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5EAF0] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#1269A8]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#152D46]">
                      The Aagoi Career Journey
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-0.5 rounded-full">
                    Aagoi Ecosystem
                  </span>
                </div>

                {/* ── RADIAL CAREER JOURNEY ILLUSTRATION ── */}
                <CareerJourneyDiagram />

                {/* Card Footer — updated stage labels */}
                <div className="mt-4 pt-4 border-t border-[#E5EAF0] flex items-center justify-between text-xs text-[#526477]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1269A8] shrink-0" />
                    <span className="font-medium">
                      Discover &bull; Position &bull; Connect &bull; Progress
                    </span>
                  </div>
                  <span className="font-semibold text-[#152D46] whitespace-nowrap ml-2">
                    Outcome-Oriented
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   CareerJourneyDiagram — isolated sub-component so the SVG
   markup stays clean and self-contained.  Uses only the icon
   set already imported above and the official Aagoi logo asset.
───────────────────────────────────────────────────────────── */
const CareerJourneyDiagram: React.FC = () => {
  /* Node geometry — four corners of a balanced radial layout */
  const W = 380;
  const H = 290;
  const cx = 190; // central x
  const cy = 145; // central y

  // Corner positions (node card top-left origin)
  const TL = { x: 12,  y: 28  }; // 01 Discover   — top-left
  const TR = { x: 248, y: 28  }; // 02 Position   — top-right
  const BL = { x: 12,  y: 198 }; // 03 Connect    — bottom-left
  const BR = { x: 248, y: 198 }; // 04 Progress   — bottom-right

  // Node card dimensions
  const NW = 120; // node width
  const NH = 52;  // node height

  // Edge midpoints of each node card (the connection attachment point)
  const TLm = { x: TL.x + NW,     y: TL.y + NH / 2 }; // right edge
  const TRm = { x: TR.x,          y: TR.y + NH / 2 }; // left edge
  const BLm = { x: BL.x + NW,     y: BL.y + NH / 2 }; // right edge
  const BRm = { x: BR.x,          y: BR.y + NH / 2 }; // left edge

  // Central card edges
  const centreL = cx - 44;
  const centreR = cx + 44;
  const centreT = cy - 44;
  const centreB = cy + 44;

  return (
    <div className="relative w-full" style={{ height: '17rem' }}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        aria-label="Aagoi Career Journey: four connected stages — Discover, Position, Connect, Progress — centred around the Aagoi ecosystem"
      >
        <defs>
          {/* Journey progression gradient — left → right, Discover → Progress */}
          <linearGradient id="cjGradL" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1686D9" />
            <stop offset="100%" stopColor="#1269A8" />
          </linearGradient>
          <linearGradient id="cjGradR" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1269A8" />
            <stop offset="100%" stopColor="#17A6A0" />
          </linearGradient>
          <linearGradient id="cjGradBL" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#17A6A0" />
            <stop offset="100%" stopColor="#1269A8" />
          </linearGradient>
          <linearGradient id="cjGradBR" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1269A8" />
            <stop offset="100%" stopColor="#17A6A0" />
          </linearGradient>
          {/* Animated dash along TL→TR top connector (progression flow) */}
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1686D9" stopOpacity="0" />
            <stop offset="45%" stopColor="#1686D9" stopOpacity="1" />
            <stop offset="55%" stopColor="#17A6A0" stopOpacity="1" />
            <stop offset="100%" stopColor="#17A6A0" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── BACKGROUND GUIDE LINES (subtle dashed ghost) ── */}
        <path
          d={`M ${TLm.x} ${TLm.y} C ${cx - 60} ${TLm.y}, ${centreL} ${centreT + 10}, ${centreL} ${cy}`}
          stroke="#E5EAF0" strokeWidth="1.5" strokeDasharray="5 4"
        />
        <path
          d={`M ${TRm.x} ${TRm.y} C ${cx + 60} ${TRm.y}, ${centreR} ${centreT + 10}, ${centreR} ${cy}`}
          stroke="#E5EAF0" strokeWidth="1.5" strokeDasharray="5 4"
        />
        <path
          d={`M ${BLm.x} ${BLm.y} C ${cx - 60} ${BLm.y}, ${centreL} ${centreB - 10}, ${centreL} ${cy}`}
          stroke="#E5EAF0" strokeWidth="1.5" strokeDasharray="5 4"
        />
        <path
          d={`M ${BRm.x} ${BRm.y} C ${cx + 60} ${BRm.y}, ${centreR} ${centreB - 10}, ${centreR} ${cy}`}
          stroke="#E5EAF0" strokeWidth="1.5" strokeDasharray="5 4"
        />

        {/* ── ACTIVE GRADIENT CONNECTION LINES ── */}
        {/* TL (Discover) → Centre */}
        <path
          d={`M ${TLm.x} ${TLm.y} C ${cx - 55} ${TLm.y}, ${centreL} ${centreT + 12}, ${centreL} ${cy}`}
          stroke="url(#cjGradL)" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* TR (Position) → Centre */}
        <path
          d={`M ${TRm.x} ${TRm.y} C ${cx + 55} ${TRm.y}, ${centreR} ${centreT + 12}, ${centreR} ${cy}`}
          stroke="url(#cjGradR)" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* BL (Connect) → Centre */}
        <path
          d={`M ${BLm.x} ${BLm.y} C ${cx - 55} ${BLm.y}, ${centreL} ${centreB - 12}, ${centreL} ${cy}`}
          stroke="url(#cjGradBL)" strokeWidth="2.5" strokeLinecap="round"
        />
        {/* BR (Progress) → Centre */}
        <path
          d={`M ${BRm.x} ${BRm.y} C ${cx + 55} ${BRm.y}, ${centreR} ${centreB - 12}, ${centreR} ${cy}`}
          stroke="url(#cjGradBR)" strokeWidth="2.5" strokeLinecap="round"
        />

        {/* ── DIRECTIONAL SEQUENCE ARROWS (top arc: Discover→Position) ── */}
        {/* Curved arc across the top showing sequential flow */}
        <path
          d={`M ${TL.x + NW / 2} ${TL.y - 4} C ${cx} ${TL.y - 18}, ${cx} ${TR.y - 18}, ${TR.x + NW / 2} ${TR.y - 4}`}
          stroke="url(#flowGrad)" strokeWidth="1.5" strokeLinecap="round"
        />
        {/* Arrowhead at TR end */}
        <polygon
          points={`${TR.x + NW / 2 - 5},${TR.y - 10} ${TR.x + NW / 2 + 2},${TR.y - 5} ${TR.x + NW / 2 - 2},${TR.y - 2}`}
          fill="#1686D9" opacity="0.7"
        />

        {/* Curved arc across the bottom showing sequential flow: Connect→Progress */}
        <path
          d={`M ${BL.x + NW / 2} ${BL.y + NH + 4} C ${cx} ${BL.y + NH + 18}, ${cx} ${BR.y + NH + 18}, ${BR.x + NW / 2} ${BR.y + NH + 4}`}
          stroke="url(#flowGrad)" strokeWidth="1.5" strokeLinecap="round"
        />
        {/* Arrowhead at BR end */}
        <polygon
          points={`${BR.x + NW / 2 - 5},${BR.y + NH + 10} ${BR.x + NW / 2 + 2},${BR.y + NH + 5} ${BR.x + NW / 2 - 2},${BR.y + NH + 2}`}
          fill="#17A6A0" opacity="0.7"
        />

        {/* ── STAGE 01 — DISCOVER (top-left) ── */}
        <StageNode
          x={TL.x} y={TL.y} w={NW} h={NH}
          num="01"
          accentColor="#1686D9"
          ringColor="#1686D9"
          Icon={CompassIcon}
          title="Discover"
          sub="Experience, Skills & Goals"
        />

        {/* ── STAGE 02 — POSITION (top-right) ── */}
        <StageNode
          x={TR.x} y={TR.y} w={NW} h={NH}
          num="02"
          accentColor="#1269A8"
          ringColor="#1269A8"
          Icon={TargetIcon}
          title="Position"
          sub="Intelligent Positioning"
        />

        {/* ── STAGE 03 — CONNECT (bottom-left) ── */}
        <StageNode
          x={BL.x} y={BL.y} w={NW} h={NH}
          num="03"
          accentColor="#17A6A0"
          ringColor="#17A6A0"
          Icon={UsersIcon}
          title="Connect"
          sub="Opportunities & Guidance"
        />

        {/* ── STAGE 04 — PROGRESS (bottom-right) ── */}
        <StageNode
          x={BR.x} y={BR.y} w={NW} h={NH}
          num="04"
          accentColor="#1269A8"
          ringColor="#17A6A0"
          Icon={TrendingUpIcon}
          title="Progress"
          sub="Clarity & Career Growth"
        />

        {/* ── CENTRAL CARD — Official Aagoi Logo ── */}
        {/* Navy card background */}
        <rect
          x={cx - 46} y={cy - 46}
          width={92} height={92}
          rx={16}
          fill="#152D46"
          filter="drop-shadow(0 8px 20px rgba(21,45,70,0.30))"
        />
        {/* Dashed orbit ring */}
        <circle
          cx={cx} cy={cy} r={36}
          stroke="#1686D9" strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        {/* Official Aagoi logo — white variant for navy background */}
        <image
          href="/aagoi-logo-white.png"
          x={cx - 34} y={cy - 16}
          width={68} height={26}
          preserveAspectRatio="xMidYMid meet"
        />
        {/* "Aagoi Core" supporting label */}
        <text
          x={cx} y={cy + 30}
          textAnchor="middle"
          fill="#94A3B8"
          fontSize="7"
          fontWeight="600"
          letterSpacing="0.8"
        >
          AAGOI CORE
        </text>
      </svg>
    </div>
  );
};

/* ── Inline SVG icon drawers (re-use same stroke weight as Lucide) ── */
const CompassIcon = ({ cx, cy }: { cx: number; cy: number }) => (
  <g transform={`translate(${cx - 7}, ${cy - 7})`}>
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <path d="M 9.5 4.5 L 7.5 7 L 4.5 9.5 L 6.5 7 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3" />
    <circle cx="7" cy="7" r="1.2" fill="currentColor" />
  </g>
);
const TargetIcon = ({ cx, cy }: { cx: number; cy: number }) => (
  <g transform={`translate(${cx - 7}, ${cy - 7})`}>
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <circle cx="7" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <circle cx="7" cy="7" r="1.2" fill="currentColor" />
  </g>
);
const UsersIcon = ({ cx, cy }: { cx: number; cy: number }) => (
  <g transform={`translate(${cx - 7}, ${cy - 7})`}>
    <circle cx="5" cy="4.5" r="2.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <path d="M 1.5 12 C 1.5 9.5 3 8 5 8 C 7 8 8.5 9.5 8.5 12" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    <circle cx="9.5" cy="4.5" r="2.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
    <path d="M 8 12 C 8 10 9 8.5 11 8.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </g>
);
const TrendingUpIcon = ({ cx, cy }: { cx: number; cy: number }) => (
  <g transform={`translate(${cx - 7}, ${cy - 7})`}>
    <polyline points="1,10 5,6 8,8.5 13,3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="9,3 13,3 13,7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

/* ── StageNode — renders a single stage card inside the SVG ── */
interface StageNodeProps {
  x: number; y: number; w: number; h: number;
  num: string;
  accentColor: string;
  ringColor: string;
  Icon: React.FC<{ cx: number; cy: number }>;
  title: string;
  sub: string;
}
const StageNode: React.FC<StageNodeProps> = ({
  x, y, w, h, num, accentColor, Icon, title, sub,
}) => {
  const iconCx = x + 20;
  const iconCy = y + h / 2;
  return (
    <g>
      {/* Card background */}
      <rect
        x={x} y={y} width={w} height={h}
        rx={10}
        fill="#FFFFFF"
        stroke="#E5EAF0"
        strokeWidth="1.5"
      />
      {/* Coloured left accent bar */}
      <rect
        x={x} y={y + 8} width={3} height={h - 16}
        rx={1.5}
        fill={accentColor}
        opacity="0.7"
      />
      {/* Icon circle */}
      <circle cx={iconCx} cy={iconCy} r={12} fill={accentColor} fillOpacity="0.1" />
      <g color={accentColor}>
        <Icon cx={iconCx} cy={iconCy} />
      </g>
      {/* Stage number */}
      <text
        x={x + 38} y={y + 15}
        fill={accentColor}
        fontSize="7.5"
        fontWeight="800"
        letterSpacing="0.5"
        opacity="0.8"
      >
        {num}
      </text>
      {/* Title */}
      <text
        x={x + 38} y={y + 27}
        fill="#152D46"
        fontSize="10.5"
        fontWeight="700"
      >
        {title}
      </text>
      {/* Sub-label */}
      <text
        x={x + 38} y={y + 40}
        fill="#526477"
        fontSize="8.5"
      >
        {sub}
      </text>
    </g>
  );
};
