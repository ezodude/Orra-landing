import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const [hoveredSection, setHoveredSection] = useState(null);
  return (
    <>
      {/* Hero Section - Centered */}
      <section className="relative min-h-screen flex items-center bg-stone-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full text-center">
          <div className="space-y-10">
            {/* Small label with rose-100 background */}
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-700 bg-rose-100 px-3 py-1.5 rounded-sm">
                Technical Consultancy
              </span>
            </div>

            {/* Headline - Large, bold, geometric - all black */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-black leading-[0.95]" style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}>
              Build
              <br />
              <Link
                href="#human-guided"
                className="underline decoration-2 underline-offset-4 hover:decoration-pink-500 transition-colors"
              >
                Human-Guided
              </Link>
              <br />
              AI Agents
            </h1>

            {/* Subheadline */}
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                <span className="text-black font-bold">You direct AI agents</span> to accomplish your goals—not autonomous systems running unchecked.
              </p>
              <p className="text-base font-mono">
                <span className="text-amber-500">→</span> <span className="text-slate-700">Deploy to production in</span> <span className="text-amber-500 font-bold">weeks</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex justify-center pt-4">
              <Button
                variant="primary"
                href="https://cal.com/orra-dev/agent-apps-to-prod"
              >
                Build With Us
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-600 pt-2">
              <span className="font-mono text-xs">Built by the</span>
              <Link
                href="https://github.com/orra-dev/orra"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-blue-600 hover:text-blue-700 underline decoration-1 underline-offset-2"
              >
                Orra
              </Link>
              <span className="font-mono text-xs">team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width yellow divider */}
      <div className="w-full h-px bg-amber-400"></div>

      {/* Diagram Section - Below Hero */}
      <section
        id="how-it-works"
        className="relative py-20 bg-stone-50"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="border border-amber-400 rounded-3xl p-8 lg:p-12 bg-white/30 backdrop-blur-sm">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Explanation */}
            <div className="space-y-8 lg:col-span-2 lg:border-r lg:border-amber-400 lg:pr-12">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}>
                How It Works
              </h2>

              <div className="space-y-6">
                {/* Human Oversight */}
                <div
                  className="group cursor-default"
                  onMouseEnter={() => setHoveredSection('human')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-xl font-bold text-black mb-2 inline-block group-hover:underline decoration-2 underline-offset-4 decoration-amber-500 transition-all" style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}>
                    Human Oversight
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Direction and approval at every critical decision point
                  </p>
                </div>

                {/* Control Layer */}
                <div
                  className="group cursor-default"
                  onMouseEnter={() => setHoveredSection('control')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-xl font-bold text-black mb-2 inline-block group-hover:underline decoration-2 underline-offset-4 decoration-pink-500 transition-all" style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}>
                    Control Layer
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Permissions, checkpoints, and memory management ensure agents operate within defined boundaries
                  </p>
                </div>

                {/* AI Agent */}
                <div
                  className="group cursor-default"
                  onMouseEnter={() => setHoveredSection('ai')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-xl font-bold text-black mb-2 inline-block group-hover:underline decoration-2 underline-offset-4 decoration-blue-500 transition-all" style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}>
                    AI Agent
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Reasoning and execution powered by advanced AI models
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Diagram */}
            <div className="lg:col-span-3">
              <SystemDiagram hoveredSection={hoveredSection} />
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SystemDiagram({ hoveredSection }) {
  return (
    <div className="relative w-full max-w-lg mx-auto py-8">
      {/* Animation Keyframes */}
      <style>{`
        @keyframes flowDown1 {
          0% {
            transform: translateY(-8px);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          25% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(40px);
            opacity: 0;
          }
        }
        @keyframes flowDown2 {
          0%, 25% {
            transform: translateY(-8px);
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(40px);
            opacity: 0;
          }
        }
        .flow-dot-1 {
          animation: flowDown1 8s ease-in-out infinite;
        }
        .flow-dot-2 {
          animation: flowDown2 8s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center space-y-4">
        {/* Human - Top (Person icon in badge) */}
        <div className="relative z-10 text-center">
          <div className={`w-20 h-20 rounded-full border-amber-400 flex items-center justify-center transition-all duration-300 ${hoveredSection === 'human' ? 'bg-amber-500 border-2' : 'bg-transparent border'}`}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-colors duration-300 ${hoveredSection === 'human' ? 'text-white' : 'text-amber-500'}`}
            >
              <circle cx="12" cy="7" r="3" fill="currentColor" />
              <path d="M12 12c-3.866 0-7 2.239-7 5v2h14v-2c0-2.761-3.134-5-7-5z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Connection Line with animated dot */}
        <div className="relative flex items-center justify-center h-6 w-px bg-slate-300">
          <div className="absolute top-0 w-1.5 h-1.5 bg-black rounded-full flow-dot-1"></div>
        </div>

        {/* Control Layer - Center (Layers icon in badge) */}
        <div className="relative z-10 text-center">
          <div className={`w-20 h-20 rounded-full border-pink-500 flex items-center justify-center transition-all duration-300 ${hoveredSection === 'control' ? 'bg-pink-500 border-2' : 'bg-transparent border'}`}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-colors duration-300 ${hoveredSection === 'control' ? 'text-white' : 'text-pink-600'}`}
            >
              {/* Stacked layers icon */}
              <rect x="4" y="5" width="16" height="3" rx="1.5" fill="currentColor" />
              <rect x="4" y="10.5" width="16" height="3" rx="1.5" fill="currentColor" />
              <rect x="4" y="16" width="16" height="3" rx="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Connection Line with animated dot */}
        <div className="relative flex items-center justify-center h-6 w-px bg-slate-300">
          <div className="absolute top-0 w-1.5 h-1.5 bg-black rounded-full flow-dot-2"></div>
        </div>

        {/* AI Agent - Bottom (Sparkle icon in badge) */}
        <div className="relative z-10 text-center">
          <div className={`w-20 h-20 rounded-full border-blue-400 flex items-center justify-center transition-all duration-300 ${hoveredSection === 'ai' ? 'bg-blue-500 border-2' : 'bg-transparent border'}`}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-colors duration-300 ${hoveredSection === 'ai' ? 'text-white' : 'text-blue-500'}`}
            >
              <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
              <path d="M19 14L19.75 16.25L22 17L19.75 17.75L19 20L18.25 17.75L16 17L18.25 16.25L19 14Z" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Feedback Loop - Semi-circle from AI back to Human */}
        <svg className="absolute right-0 top-0 h-full w-32 pointer-events-none" viewBox="0 0 100 400" preserveAspectRatio="none">
          <path
            d="M 1 350 Q 110 200 1 30"
            stroke="#cbd5e1"
            strokeWidth="1"
            fill="none"
          />
          {/* Animated dot traveling along the feedback path */}
          <circle r="1.5" fill="#000000">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              keyPoints="0;0;1;1"
              keyTimes="0;0.5;1;1"
              path="M 1 350 Q 110 200 1 30"
            />
            <animate
              attributeName="opacity"
              values="0;0;0.8;0.8;0"
              keyTimes="0;0.5;0.55;0.95;1"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
