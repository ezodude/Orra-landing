import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Services() {
  return (
    <>
      {/* Full-width yellow divider */}
      <div className="w-full h-px bg-amber-400"></div>

      <section id="services" className="relative py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Headline */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
              style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
            >
              How We Work With You
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Consulting and custom infrastructure to get agents into production.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="border border-amber-400 rounded-2xl p-8 bg-white/40">
              <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-black mb-3"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Technical Consultancy
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Design architecture, identify integrations, and plan deployment.
              </p>
            </div>

            {/* Service 2 */}
            <div className="border border-pink-500 rounded-2xl p-8 bg-white/40">
              <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-black mb-3"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Custom Infrastructure
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Human-guided systems tailored to your workflows with control layers built-in.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border border-blue-500 rounded-2xl p-8 bg-white/40">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold text-black mb-3"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Production Deployment
              </h3>
              <p className="text-base text-slate-700 leading-relaxed">
                Launch support and ongoing optimization for reliable performance at scale.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-slate-700 mb-6">
              Ready to build production-ready AI agents?
            </p>
            <Button
              variant="primary"
              href="https://cal.com/orra-dev/agent-apps-to-prod"
              className="text-lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
