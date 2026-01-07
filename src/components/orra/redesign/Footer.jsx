import Link from 'next/link';

export function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Full-width yellow divider */}
      <div className="w-full h-px bg-amber-400"></div>

      <footer className="bg-stone-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🪡</span>
                <span
                  className="text-2xl font-bold text-black"
                  style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
                >
                  orra
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Build human-guided AI agents that scale with trust. Production-ready infrastructure in weeks.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3
                className="text-lg font-bold text-black mb-4"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-slate-600 hover:text-black transition-colors text-sm"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('problem')}
                    className="text-slate-600 hover:text-black transition-colors text-sm"
                  >
                    The Problem
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-slate-600 hover:text-black transition-colors text-sm"
                  >
                    Services
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3
                className="text-lg font-bold text-black mb-4"
                style={{ fontFamily: '"Space Grotesk", "Work Sans", system-ui, sans-serif' }}
              >
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://github.com/orra-dev/orra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-black transition-colors text-sm flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.orra.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-black transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://cal.com/orra-dev/agent-apps-to-prod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-black transition-colors text-sm"
                  >
                    Book a Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              <span className="font-mono text-xs">Built by the </span>
              <Link
                href="https://github.com/orra-dev/orra"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-blue-600 hover:text-blue-700 underline decoration-1 underline-offset-2"
              >
                Orra
              </Link>
              <span className="font-mono text-xs"> team</span>
            </p>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} ORRA SOFTWARE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
