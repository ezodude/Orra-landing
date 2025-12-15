export function Solution() {
  return (
    <>
      {/* Full-width yellow divider */}
      <div className="w-full h-px bg-amber-400"></div>

      <section
        id="solution"
        className="relative py-20 bg-stone-50"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="border border-amber-400 rounded-3xl p-8 lg:p-12 bg-white/30 backdrop-blur-sm">
            {/* Headline */}
            <div className="text-center mb-12">
              <h2
                className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Production-Ready AI Agents in Weeks
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Custom human-guided infrastructure that deploys fast and scales with trust.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">✓</span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-black"
                    style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
                  >
                    Real-Time Human Control
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed pl-11">
                  Approval workflows at every decision point—you direct agents, they don't run unchecked.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-black"
                    style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
                  >
                    Proactive Prevention
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed pl-11">
                  Catch novel situations before they become failures, not after in post-mortems.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-black"
                    style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
                  >
                    Guardrails for Every Scenario
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed pl-11">
                  Permissions and checkpoints ensure predictable behavior in any situation.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-black"
                    style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
                  >
                    Full Visibility & Easy Debugging
                  </h3>
                </div>
                <p className="text-base text-slate-700 leading-relaxed pl-11">
                  Full transparency with audit trails for fast root cause analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
