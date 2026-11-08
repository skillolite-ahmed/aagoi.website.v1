
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
    <section
      id="home"
      className="relative scroll-mt-28 pt-40 pb-16 sm:pt-44 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC]"
    >
      {/* Subtle background technology pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(#152D46 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* LEFT: BRAND POSITIONING */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Status badges */}
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1269A8]/10 text-[#1269A8] border border-[#1269A8]/20">
                <span className="w-2 h-2 rounded-full bg-[#1269A8] animate-pulse" />
                {siteConfig.status}
              </span>

              <span className="text-xs font-semibold tracking-wider uppercase text-[#526477] bg-white px-3 py-1 rounded-full border border-[#E5EAF0]">
                {siteConfig.introLabel}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#152D46] tracking-tight leading-[1.12]">
              Your Experience Deserves a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1269A8] via-[#1686D9] to-[#17A6A0]">
                Better Career Journey.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="text-lg sm:text-xl text-[#526477] leading-relaxed max-w-2xl font-normal">
              Aagoi brings together AI-powered solutions, practical technology
              and personalised human assistance to help experienced
              professionals navigate their next career move with greater
              clarity, structure and confidence.
            </p>

            {/* Brand pillars */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E5EAF0] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#1686D9]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  AI-Powered Solutions
                </span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E5EAF0] shadow-sm">
                <Users className="w-4 h-4 text-[#17A6A0]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  Human-Centred Support
                </span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E5EAF0] shadow-sm">
                <Network className="w-4 h-4 text-[#1269A8]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
                  Connected Career Ecosystem
                </span>
              </div>
            </div>

            {/* Call-to-action buttons */}
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

            {/* Supporting note */}
            <p className="text-xs sm:text-sm text-[#526477] pt-1">
              Be among the first to explore what we&apos;re building.
            </p>
          </div>

          {/* RIGHT: CAREER JOURNEY ILLUSTRATION */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">

              {/* Subtle background glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-[#1269A8]/10 via-[#17A6A0]/10 to-[#1686D9]/15 rounded-3xl blur-2xl"
              />

              {/* Main illustration card */}
              <div className="relative bg-white rounded-2xl border border-[#E5EAF0] p-4 sm:p-6 shadow-xl">

                {/* Card header */}
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#E5EAF0] mb-3">

                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-3 h-3 rounded-full bg-[#1269A8] shrink-0" />

                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#152D46]">
                      The Aagoi Career Journey
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Aagoi Ecosystem
                  </span>
                </div>

                {/* Career journey diagram */}
                <CareerJourneyDiagram />

                {/* Card footer */}
                <div className="mt-3 pt-4 border-t border-[#E5EAF0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#526477]">

                  <div className="flex items-center gap-2 min-w-0">
                    <TrendingUp className="w-4 h-4 text-[#1269A8] shrink-0" />

                    <span className="font-medium">
                      Discover &bull; Position &bull; Connect &bull; Progress
                    </span>
                  </div>

                  <span className="font-semibold text-[#152D46] whitespace-nowrap">
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


/* ============================================================
   AAGOI CAREER JOURNEY DIAGRAM

   Journey sequence, clockwise:

   01 Discover  →  02 Position
                         ↓
   04 Progress  ←  03 Connect

   The official Aagoi logo remains at the centre.
============================================================ */

const CareerJourneyDiagram: React.FC = () => {

  const W = 520;
  const H = 360;

  const cx = 260;
  const cy = 180;

  const NW = 190;
  const NH = 68;

  // Clockwise stage positions
  const stages = {
    discover: { x: 12, y: 48 },
    position: { x: 318, y: 48 },
    connect: { x: 318, y: 244 },
    progress: { x: 12, y: 244 },
  };

  const central = {
    x: cx - 52,
    y: cy - 52,
    width: 104,
    height: 104,
  };

  const leftEdge = central.x;
  const rightEdge = central.x + central.width;
  const topEdge = central.y;
  const bottomEdge = central.y + central.height;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full h-auto"
        role="img"
        aria-labelledby="career-diagram-title career-diagram-description"
      >
        <title id="career-diagram-title">
          The Aagoi Career Journey
        </title>

        <desc id="career-diagram-description">
          Four connected career stages arranged clockwise around the
          official Aagoi logo: Discover, Position, Connect and Progress.
        </desc>

        <defs>

          <linearGradient id="aagoi-journey-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1686D9" />
            <stop offset="100%" stopColor="#17A6A0" />
          </linearGradient>

          <linearGradient id="aagoi-top-gradient">
            <stop offset="0%" stopColor="#1686D9" />
            <stop offset="100%" stopColor="#17A6A0" />
          </linearGradient>

          <marker
            id="aagoi-arrow"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3.5"
            orient="auto"
          >
            <path
              d="M0 0 L7 3.5 L0 7"
              fill="none"
              stroke="#17A6A0"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>

        </defs>

        {/* =========================================
            OUTER CLOCKWISE JOURNEY PATH
        ========================================= */}

        {/* Discover → Position */}
        <path
          d="M205 29 C245 12 275 12 315 29"
          stroke="url(#aagoi-top-gradient)"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-arrow)"
          opacity="0.85"
        />

        {/* Position → Connect */}
        <path
          d="M515 125 C526 160 526 200 515 235"
          stroke="url(#aagoi-journey-gradient)"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-arrow)"
          opacity="0.85"
        />

        {/* Connect → Progress */}
        <path
          d="M315 331 C275 348 245 348 205 331"
          stroke="url(#aagoi-journey-gradient)"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-arrow)"
          opacity="0.85"
        />

        {/* Progress → Discover */}
        <path
          d="M5 235 C-4 200 -4 160 5 125"
          stroke="url(#aagoi-journey-gradient)"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-arrow)"
          opacity="0.85"
        />

        {/* =========================================
            CENTRAL CONNECTIONS
            Rendered behind the stage nodes and logo.
        ========================================= */}

        <g
          stroke="url(#aagoi-journey-gradient)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        >

          {/* Discover → Aagoi Core */}
          <path
            d={`M202 82 C224 82 ${leftEdge} 120 ${leftEdge} ${topEdge + 27}`}
          />

          {/* Position → Aagoi Core */}
          <path
            d={`M318 82 C296 82 ${rightEdge} 120 ${rightEdge} ${topEdge + 27}`}
          />

          {/* Connect → Aagoi Core */}
          <path
            d={`M318 278 C296 278 ${rightEdge} 240 ${rightEdge} ${bottomEdge - 27}`}
          />

          {/* Progress → Aagoi Core */}
          <path
            d={`M202 278 C224 278 ${leftEdge} 240 ${leftEdge} ${bottomEdge - 27}`}
          />

        </g>

        {/* =========================================
            FOUR JOURNEY STAGES
        ========================================= */}

        {/* 01 DISCOVER */}
        <StageNode
          x={stages.discover.x}
          y={stages.discover.y}
          w={NW}
          h={NH}
          num="01"
          accentColor="#1686D9"
          Icon={CompassIcon}
          title="Discover"
          sub="Experience, Skills & Goals"
        />

        {/* 02 POSITION */}
        <StageNode
          x={stages.position.x}
          y={stages.position.y}
          w={NW}
          h={NH}
          num="02"
          accentColor="#1269A8"
          Icon={TargetIcon}
          title="Position"
          sub="Intelligent Career Positioning"
        />

        {/* 03 CONNECT — bottom-right */}
        <StageNode
          x={stages.connect.x}
          y={stages.connect.y}
          w={NW}
          h={NH}
          num="03"
          accentColor="#17A6A0"
          Icon={UsersIcon}
          title="Connect"
          sub="Opportunities & Human Guidance"
        />

        {/* 04 PROGRESS — bottom-left */}
        <StageNode
          x={stages.progress.x}
          y={stages.progress.y}
          w={NW}
          h={NH}
          num="04"
          accentColor="#1269A8"
          Icon={TrendingUpIcon}
          title="Progress"
          sub="Clarity & Career Growth"
        />

        {/* =========================================
            CENTRAL AAGOI BRAND ELEMENT
        ========================================= */}

        <rect
          x={central.x}
          y={central.y}
          width={central.width}
          height={central.height}
          rx="18"
          fill="#152D46"
          stroke="#264866"
          strokeWidth="1"
          style={{
            filter: 'drop-shadow(0px 7px 12px rgba(21,45,70,0.20))',
          }}
        />

        {/* Official Aagoi logo asset */}
        <image
          href="/aagoi-logo-white.png"
          x={cx - 40}
          y={cy - 22}
          width="80"
          height="32"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Supporting brand label */}
        <text
          x={cx}
          y={cy + 29}
          textAnchor="middle"
          fill="#B9C9D9"
          fontSize="9"
          fontWeight="600"
          letterSpacing="1"
        >
          AAGOI CORE
        </text>

      </svg>
    </div>
  );
};


/* ============================================================
   SVG ICONS
============================================================ */

type SVGIconProps = {
  cx: number;
  cy: number;
};

const CompassIcon: React.FC<SVGIconProps> = ({ cx, cy }) => (
  <g
    transform={`translate(${cx - 8}, ${cy - 8})`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M10.8 5.2 L8.9 8.9 L5.2 10.8 L7.1 7.1 Z" />
  </g>
);

const TargetIcon: React.FC<SVGIconProps> = ({ cx, cy }) => (
  <g
    transform={`translate(${cx - 8}, ${cy - 8})`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <circle cx="8" cy="8" r="6.5" />
    <circle cx="8" cy="8" r="3.5" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
  </g>
);

const UsersIcon: React.FC<SVGIconProps> = ({ cx, cy }) => (
  <g
    transform={`translate(${cx - 8}, ${cy - 8})`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="6" cy="5" r="2.5" />
    <path d="M1.5 14 C1.5 11 3 9.5 6 9.5 C9 9.5 10.5 11 10.5 14" />
    <path d="M11 3.5 A2.3 2.3 0 0 1 11 8" />
    <path d="M12 10 C14 10.5 15 11.5 15 13" />
  </g>
);

const TrendingUpIcon: React.FC<SVGIconProps> = ({ cx, cy }) => (
  <g
    transform={`translate(${cx - 8}, ${cy - 8})`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12 L5.5 7.5 L8.5 10 L15 3.5" />
    <path d="M10.5 3.5 H15 V8" />
  </g>
);


/* ============================================================
   STAGE NODE COMPONENT
============================================================ */

interface StageNodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  num: string;
  accentColor: string;
  Icon: React.FC<SVGIconProps>;
  title: string;
  sub: string;
}

const StageNode: React.FC<StageNodeProps> = ({
  x,
  y,
  w,
  h,
  num,
  accentColor,
  Icon,
  title,
  sub,
}) => {

  const iconCx = x + 24;
  const iconCy = y + h / 2;

  return (
    <g>

      {/* Card background */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="11"
        fill="#FFFFFF"
        stroke="#E5EAF0"
        strokeWidth="1.6"
      />

      {/* Left accent indicator */}
      <rect
        x={x}
        y={y + 10}
        width="3"
        height={h - 20}
        rx="1.5"
        fill={accentColor}
      />

      {/* Icon background */}
      <circle
        cx={iconCx}
        cy={iconCy}
        r="14"
        fill={accentColor}
        fillOpacity="0.10"
      />

      {/* Icon */}
      <g color={accentColor}>
        <Icon cx={iconCx} cy={iconCy} />
      </g>

      {/* Stage number */}
      <text
        x={x + 48}
        y={y + 19}
        fill={accentColor}
        fontSize="10"
        fontWeight="800"
        letterSpacing="0.7"
      >
        {num}
      </text>

      {/* Stage title */}
      <text
        x={x + 48}
        y={y + 35}
        fill="#152D46"
        fontSize="13"
        fontWeight="700"
      >
        {title}
      </text>

      {/* Stage description */}
      <text
        x={x + 48}
        y={y + 51}
        fill="#526477"
        fontSize="10.5"
        fontWeight="400"
      >
        {sub}
      </text>

    </g>
  );
};
