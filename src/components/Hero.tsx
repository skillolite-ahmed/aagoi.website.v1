import React from 'react';
import {
  ArrowUpRight,
@@ -7,6 +6,8 @@ import {
  Network,
  Users,
  TrendingUp,
  BrainCircuit,
  Building2,
} from 'lucide-react';
import { siteConfig } from '../config/site';

@@ -28,10 +29,8 @@ export const Hero: React.FC = () => {

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN — EXISTING HERO CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Status badges */}
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1269A8]/10 text-[#1269A8] border border-[#1269A8]/20">
@@ -61,7 +60,6 @@ export const Hero: React.FC = () => {

            {/* Supporting pillars */}
            <div className="pt-2 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5EAF0] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#1686D9]" />
                <span className="text-xs sm:text-sm font-semibold text-[#152D46]">
@@ -82,12 +80,10 @@ export const Hero: React.FC = () => {
                  Connected Career Ecosystem
                </span>
              </div>

            </div>

            {/* CTA buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

              <a
                href={siteConfig.forms.client}
                target="_blank"
@@ -105,566 +101,123 @@ export const Hero: React.FC = () => {
                <span>Explore Aagoi</span>
                <ArrowDown className="w-4 h-4 text-[#526477]" />
              </a>

            </div>

            {/* Supporting note */}
            <p className="text-xs sm:text-sm text-[#526477] pt-1">
              Be among the first to explore what we&apos;re building.
            </p>

          </div>

          {/* RIGHT COLUMN — CAREER JOURNEY */}
          {/* RIGHT COLUMN — CAREER ECOSYSTEM */}
          <div className="lg:col-span-5 relative">

            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Subtle existing glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-[#1269A8]/10 via-[#17A6A0]/10 to-[#1686D9]/15 rounded-3xl blur-2xl -z-10"
              />

              {/* Illustration card — original styling preserved */}
              {/* Ecosystem card — original outer styling preserved */}
              <div className="bg-white/95 rounded-2xl border border-[#E5EAF0] p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5EAF0] mb-4">

                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#1269A8]" />

                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E5EAF0] mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-3 h-3 rounded-full bg-[#1269A8] shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#152D46]">
                      The Aagoi Career Journey
                      THE AAGOI CAREER ECOSYSTEM
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  <span className="text-[11px] font-semibold text-[#17A6A0] bg-[#17A6A0]/10 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                    Aagoi Ecosystem
                  </span>

                </div>

                {/* Compact career journey diagram */}
                <CareerJourneyDiagram />
                <CareerEcosystem />

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-[#E5EAF0] flex items-center justify-between text-xs text-[#526477]">

                <div className="mt-4 pt-4 border-t border-[#E5EAF0] flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-xs text-[#526477]">
                  <div className="flex items-center gap-2 min-w-0">
                    <TrendingUp className="w-4 h-4 text-[#1269A8] shrink-0" />

                    <span className="font-medium">
                      Discover &bull; Position &bull; Connect &bull; Progress
                    </span>
                    <span className="font-medium">Technology &bull; People &bull; Opportunities</span>
                  </div>

                  <span className="font-semibold text-[#152D46] whitespace-nowrap ml-2">
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

interface Capability {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
  iconBackground: string;
}

/* ============================================================
   AAGOI CAREER JOURNEY DIAGRAM

   Compact SVG dimensions: 440 x 300
   Clockwise journey:

   01 Discover → 02 Position
                         ↓
   04 Progress ← 03 Connect

   Official Aagoi logo at the centre.
============================================================ */

const CareerJourneyDiagram: React.FC = () => {

  const W = 440;
  const H = 300;

  const cx = 220;
  const cy = 150;

  const NW = 154;
  const NH = 64;

  // Clockwise stage positions
  const stages = {
    discover: { x: 6, y: 35 },
    position: { x: 280, y: 35 },
    connect: { x: 280, y: 201 },
    progress: { x: 6, y: 201 },
  };

  // Central card
  const CW = 80;
  const CH = 80;

  const centreLeft = cx - CW / 2;
  const centreRight = cx + CW / 2;
  const centreTop = cy - CH / 2;
  const centreBottom = cy + CH / 2;

  return (
    <div className="w-full max-w-[390px] mx-auto">

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full h-auto"
        role="img"
        aria-labelledby="career-title career-description"
      >

        <title id="career-title">
          The Aagoi Career Journey
        </title>

        <desc id="career-description">
          Four connected stages arranged clockwise around the official Aagoi
          logo: Discover, Position, Connect and Progress.
        </desc>

        <defs>

          <linearGradient id="aagoi-journey-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1686D9" />
            <stop offset="100%" stopColor="#17A6A0" />
          </linearGradient>

          <linearGradient id="aagoi-top-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1686D9" />
            <stop offset="100%" stopColor="#17A6A0" />
          </linearGradient>

          <marker
            id="aagoi-journey-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path
              d="M0 0 L6 3 L0 6"
              fill="none"
              stroke="#17A6A0"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>

        </defs>


        {/* ======================================
            SUBTLE CLOCKWISE JOURNEY INDICATORS
        ====================================== */}

        {/* Discover → Position */}
        <path
          d="M165 20 C200 8 240 8 275 20"
          stroke="url(#aagoi-top-gradient)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-journey-arrow)"
          opacity="0.65"
        />

        {/* Position → Connect */}
        <path
          d="M436 108 C439 130 439 170 436 192"
          stroke="#1269A8"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-journey-arrow)"
          opacity="0.55"
        />

        {/* Connect → Progress */}
        <path
          d="M275 280 C240 292 200 292 165 280"
          stroke="url(#aagoi-top-gradient)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-journey-arrow)"
          opacity="0.65"
        />

        {/* Progress → Discover */}
        <path
          d="M4 192 C1 170 1 130 4 108"
          stroke="#1269A8"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#aagoi-journey-arrow)"
          opacity="0.55"
        />


        {/* ======================================
            CONNECTING LINES TO AAGOI CORE
        ====================================== */}

        <g
          stroke="url(#aagoi-journey-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        >

          {/* Discover */}
          <path
            d={`M160 67 C174 67 166 112 ${centreLeft} ${centreTop + 18}`}
          />

          {/* Position */}
          <path
            d={`M280 67 C266 67 274 112 ${centreRight} ${centreTop + 18}`}
          />

          {/* Connect */}
          <path
            d={`M280 233 C266 233 274 188 ${centreRight} ${centreBottom - 18}`}
          />

          {/* Progress */}
          <path
            d={`M160 233 C174 233 166 188 ${centreLeft} ${centreBottom - 18}`}
          />

        </g>


        {/* ======================================
            STAGE 01 — DISCOVER
        ====================================== */}

        <StageNode
          x={stages.discover.x}
          y={stages.discover.y}
          w={NW}
          h={NH}
          num="01"
          accentColor="#1686D9"
          Icon={CompassIcon}
          title="Discover"
          line1="Experience, Skills"
          line2="Goals"
        />


        {/* ======================================
            STAGE 02 — POSITION
        ====================================== */}

        <StageNode
          x={stages.position.x}
          y={stages.position.y}
          w={NW}
          h={NH}
          num="02"
          accentColor="#1269A8"
          Icon={TargetIcon}
          title="Position"
          line1="Career Direction"
          line2="Professional Profile"
        />


        {/* ======================================
            STAGE 03 — CONNECT
        ====================================== */}

        <StageNode
          x={stages.connect.x}
          y={stages.connect.y}
          w={NW}
          h={NH}
          num="03"
          accentColor="#17A6A0"
          Icon={UsersIcon}
          title="Connect"
          line1="Opportunities &"
          line2="Human Guidance"
        />


        {/* ======================================
            STAGE 04 — PROGRESS
        ====================================== */}

        <StageNode
          x={stages.progress.x}
          y={stages.progress.y}
          w={NW}
          h={NH}
          num="04"
          accentColor="#1269A8"
          Icon={TrendingUpIcon}
          title="Progress"
          line1="Clarity & Direction"
          line2="Career Growth"
        />


        {/* ======================================
            CENTRAL AAGOI BRAND ELEMENT
        ====================================== */}

        <rect
          x={centreLeft}
          y={centreTop}
          width={CW}
          height={CH}
          rx="16"
          fill="#152D46"
          stroke="#264866"
          strokeWidth="1"
          style={{
            filter: 'drop-shadow(0px 6px 10px rgba(21,45,70,0.20))',
          }}
        />

        {/* Original official Aagoi logo */}
        <image
          href="/aagoi-logo-white.png"
          x={cx - 36}
          y={cy - 20}
          width="72"
          height="29"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Supporting label */}
        <text
          x={cx}
          y={cy + 26}
          textAnchor="middle"
          fill="#B9C9D9"
          fontSize="8"
          fontWeight="600"
          letterSpacing="0.8"
const capabilities: Capability[] = [
  {
    title: 'Intelligent Career Technology',
    description: 'AI-powered tools and structured career solutions.',
    Icon: BrainCircuit,
    accent: 'text-[#1269A8]',
    iconBackground: 'bg-[#1269A8]/10',
  },
  {
    title: 'Personalised Human Support',
    description: 'Individual guidance shaped around professional needs.',
    Icon: Users,
    accent: 'text-[#17A6A0]',
    iconBackground: 'bg-[#17A6A0]/10',
  },
  {
    title: 'Opportunity Discovery & Industry Access',
    description:
      'Helping professionals explore relevant opportunities and connect with organisations aligned with their career direction.',
    Icon: Building2,
    accent: 'text-[#1269A8]',
    iconBackground: 'bg-[#1269A8]/10',
  },
];

const CareerEcosystem: React.FC = () => (
  <div className="flex flex-col items-center">
    <img
      src="/aagoi-logo-transparent.png"
      alt="Aagoi logo"
      className="h-8 w-auto object-contain"
    />
    <p className="mt-2 mb-3 text-[11px] font-semibold tracking-wide text-[#526477]">
      Three connected capabilities
    </p>

    <div className="w-full space-y-2">
      {capabilities.map(({ title, description, Icon, accent, iconBackground }) => (
        <div
          key={title}
          className="flex min-h-20 items-center gap-3 rounded-xl border border-[#E5EAF0] bg-white px-3 py-2.5"
        >
          AAGOI CORE
        </text>

      </svg>
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBackground} ${accent}`}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-5 text-[#152D46]">{title}</h3>
            <p className="mt-0.5 text-xs leading-4 text-[#526477]">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


/* ============================================================
   SVG ICONS
============================================================ */

interface SVGIconProps {
  cx: number;
  cy: number;
}

const CompassIcon: React.FC<SVGIconProps> = ({ cx, cy }) => (
  <g
    transform={`translate(${cx - 8}, ${cy - 8})`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
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
    strokeWidth="1.6"
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
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12 L5.5 7.5 L8.5 10 L15 3.5" />
    <path d="M10.5 3.5 H15 V8" />
  </g>
  </div>
);


/* ============================================================
   STAGE NODE COMPONENT

   Each description uses two explicitly positioned lines.
   This prevents clipping and keeps all four cards aligned.
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
  line1: string;
  line2: string;
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
  line1,
  line2,
}) => {

  const iconCx = x + 23;
  const iconCy = y + h / 2;

  const textX = x + 43;

  return (
    <g>

      {/* Node background */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        fill="#FFFFFF"
        stroke="#E5EAF0"
        strokeWidth="1.5"
      />

      {/* Left accent bar */}
      <rect
        x={x}
        y={y + 9}
        width="3"
        height={h - 18}
        rx="1.5"
        fill={accentColor}
        opacity="0.75"
      />

      {/* Icon background */}
      <circle
        cx={iconCx}
        cy={iconCy}
        r="13"
        fill={accentColor}
        fillOpacity="0.10"
      />

      {/* Icon */}
      <g color={accentColor}>
        <Icon cx={iconCx} cy={iconCy} />
      </g>

      {/* Stage number */}
      <text
        x={textX}
        y={y + 15}
        fill={accentColor}
        fontSize="9"
        fontWeight="800"
        letterSpacing="0.6"
      >
        {num}
      </text>

      {/* Stage title */}
      <text
        x={textX}
        y={y + 30}
        fill="#152D46"
        fontSize="11.5"
        fontWeight="700"
      >
        {title}
      </text>

      {/* Supporting line one */}
      <text
        x={textX}
        y={y + 44}
        fill="#526477"
        fontSize="9.5"
        fontWeight="400"
      >
        {line1}
      </text>

      {/* Supporting line two */}
      <text
        x={textX}
        y={y + 56}
        fill="#526477"
        fontSize="9.5"
        fontWeight="400"
      >
        {line2}
      </text>

    </g>
  );
};
