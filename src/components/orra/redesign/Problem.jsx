export function Problem() {
  return (
    <>
      {/* Full-width yellow divider */}
      <div className="w-full h-px bg-amber-400"></div>

      <section id="problem" className="relative py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Headline */}
          <h2
            className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
            style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
          >
            Most AI Agents Fail in Production
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-slate-700 leading-relaxed mb-16 max-w-3xl mx-auto">
            Autonomous agents promise efficiency but deliver unpredictability and risk.
          </p>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Pain Point 1 */}
            <div className="border border-slate-300 rounded-2xl p-6 bg-white/40">
              <h3
                className="text-2xl font-bold text-black mb-3"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                No Human Oversight
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Agents operate without approval, leading to costly mistakes and compliance risks.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="border border-slate-300 rounded-2xl p-6 bg-white/40">
              <h3
                className="text-2xl font-bold text-black mb-3"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Reactive Testing Only
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Evals catch known failures after they occur, but can't prevent novel situations.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="border border-slate-300 rounded-2xl p-6 bg-white/40">
              <h3
                className="text-2xl font-bold text-black mb-3"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Unpredictable Behavior
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                No guardrails for edge cases means inconsistent results and eroded trust.
              </p>
            </div>

            {/* Pain Point 4 */}
            <div className="border border-slate-300 rounded-2xl p-6 bg-white/40">
              <h3
                className="text-2xl font-bold text-black mb-3"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Impossible to Debug
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                No visibility into decisions makes tracing failures nearly impossible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
