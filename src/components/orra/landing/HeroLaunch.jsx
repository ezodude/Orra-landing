import React from "react";
import Link from "next/link";
import HeroDiagram from "@/components/orra/landing/HeroDiagram";

export function HeroLaunch() {
	
	return (
		<div>
			<div className="bg-rose-50 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24">
					<div className="flex flex-col lg:flex-row-reverse items-center gap-y-12 lg:gap-x-16">
						{/* Left: Text Content */}
						<div className="w-full lg:w-1/2">
							<Link href="https://tinyurl.com/orra-launch-blog-post" target="_blank">
                <span
	                className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-md text-xs font-medium ring-1 ring-purple-700/10 hover:bg-purple-100 mb-6">
                  Learn why we built orra →
                </span>
							</Link>
							<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tighter">
								Build Production-Ready AI Agents That Actually Work
							</h1>
							<p className="text-lg text-gray-800 mb-6">
								We help businesses design, build, and deploy resilient agentic applications—from architecture to production.
							</p>
							<p className="text-base text-gray-700 mb-8">
								Most AI agent projects fail to reach production. We've built infrastructure for resilient agent workflows—and we'll work with your team to architect, implement, and deploy systems that handle real-world complexity. From initial design to ongoing optimization, we ensure your agents work reliably at scale.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
								<Link href="https://cal.com/orra-dev/agent-apps-to-prod">
									<button
										type="button"
										className="inline-flex items-center gap-x-2 rounded-md bg-black px-12 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-white/10"
									>
										Schedule Your Strategy Session
									</button>
								</Link>
								<Link href="https://github.com/orra-dev/orra">
									<button
										type="button"
										className="inline-flex items-center gap-x-2 rounded-md bg-white px-12 py-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
									>
										Explore Open Source Tools
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-github w-5 h-5"
										>
											<path
												d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
											<path d="M9 18c-4.51 2-5-2-7-2"></path>
										</svg>
									</button>
								</Link>
							</div>
							{/* Optional: Social proof row here */}
						</div>
						
						{/* Right: Hero Visual */}
						<div className="w-full lg:w-1/2">
							<HeroDiagram/>
						</div>
					</div>
				</div>

				{/* How We Work Section */}
				<section className="py-16 px-8 bg-white">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-extrabold mb-2 tracking-tighter text-gray-900">How We Partner With You</h2>
							<p className="text-lg text-gray-700">From concept to production, we're with you every step of the way</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{/* Column 1: Discover & Design */}
							<div className="text-center">
								<div className="mb-4 flex justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
										<circle cx="12" cy="12" r="10"></circle>
										<path d="M12 16v-4"></path>
										<path d="M12 8h.01"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Discover & Design</h3>
								<ul className="text-gray-700 space-y-2 text-sm">
									<li>Understand your use case and requirements</li>
									<li>Architecture planning and feasibility assessment</li>
									<li>Technology stack recommendations</li>
								</ul>
							</div>

							{/* Column 2: Build & Implement */}
							<div className="text-center">
								<div className="mb-4 flex justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
										<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Build & Implement</h3>
								<ul className="text-gray-700 space-y-2 text-sm">
									<li>Custom multi-agent system development</li>
									<li>Integration with your existing infrastructure</li>
									<li>Orra-powered resilience layer</li>
								</ul>
							</div>

							{/* Column 3: Deploy & Optimize */}
							<div className="text-center">
								<div className="mb-4 flex justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Deploy & Optimize</h3>
								<ul className="text-gray-700 space-y-2 text-sm">
									<li>Production deployment support</li>
									<li>Monitoring and reliability improvements</li>
									<li>Ongoing architecture consultation</li>
								</ul>
							</div>
						</div>

						<div className="text-center mt-10">
							<Link href="https://cal.com/orra-dev/agent-apps-to-prod">
								<button
									type="button"
									className="inline-flex items-center gap-x-2 rounded-md bg-black px-12 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
								>
									Get Started
								</button>
							</Link>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section className="py-16 px-8 bg-rose-50">
					<div className="max-w-7xl mx-auto">
						<div className="container mx-auto px-4 text-center mb-4">
							<div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8"></div>
						</div>

						{/* Section Header */}
						<div className="text-center mb-12">
							<h2 className="text-3xl font-extrabold mb-2 tracking-tighter text-gray-900">Our Services</h2>
							<p className="text-lg tracking-tight text-gray-700">Flexible engagement models to meet your needs</p>
						</div>

						{/* Service Cards Grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

							{/* Tier 1 Card - Strategy & Architecture Review */}
							<div className="border border-gray-300 rounded-lg shadow-md p-8 bg-white">
								<div className="text-center mb-6">
									<h3 className="text-2xl font-bold text-gray-800 mb-2">Strategy & Architecture Review</h3>
									<p className="text-gray-600">
										Expert consultation to evaluate your AI agent concept and chart the path to production.
									</p>
								</div>

								<p className="text-lg font-semibold text-gray-700 mb-6 text-center">Contact us for pricing</p>

								<ul className="space-y-4 text-gray-700 mb-6">
									<li className="flex items-start">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check mr-2 h-5 w-5 text-purple-500 flex-shrink-0"
										>
											<path d="M20 6 9 17l-5-5"></path>
										</svg>
										Feasibility assessment and use case validation
									</li>
									<li className="flex items-start">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check mr-2 h-5 w-5 text-purple-500 flex-shrink-0"
										>
											<path d="M20 6 9 17l-5-5"></path>
										</svg>
										Architecture design recommendations
									</li>
									<li className="flex items-start">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-check mr-2 h-5 w-5 text-purple-500 flex-shrink-0"
										>
											<path d="M20 6 9 17l-5-5"></path>
										</svg>
										Technology stack guidance
									</li>
								</ul>

								<div className="text-center">
									<Link
										href="https://cal.com/orra-dev/agent-apps-to-prod"
										className="bg-black text-white py-3 px-6 rounded-lg inline-block transition-all duration-300 shadow-md transform hover:scale-[1.05]"
									>
										Schedule Your Consultation
									</Link>
								</div>
							</div>

					{/* Tier 2 Card - Implementation Partnership (existing card, will be updated in commit 10) */}
					<div className="border border-gray-600 rounded-lg shadow-md p-8 bg-white">
						{/* Card Header */}
						<div className="text-center mb-6">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Agent Infrastructure 🌐</h3>
							<p className="text-gray-600">
								Work with the Orra team to design, implement, and deploy production-grade multi-agent systems tailored
								to your specific requirements.
							</p>
						</div>
						
						{/* Pricing */}
						<p className="text-xl font-bold text-gray-900 mb-6">$1,000+ / month</p>
						
						{/* Features List */}
						<ul className="space-y-4 text-gray-700 mb-6">
							<li className="flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-check mr-2 h-5 w-5 text-purple-500 flex-shrink-0"
								>
									<path d="M20 6 9 17l-5-5"></path>
								</svg>
								Reliable architecture for scalability.
							</li>
							<li className="flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-check mr-2 h-5 w-5 text-purple-500 flex-shrink-0"
								>
									<path d="M20 6 9 17l-5-5"></path>
								</svg>
								Custom deployment options.
							</li>
							<li className="flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-check mr-2 h-5 w-5 text-purple-500 flex-shrink-0"
								>
									<path d="M20 6 9 17l-5-5"></path>
								</svg>
								Priority roadmap acceleration.
							</li>
						</ul>
						
						{/* Call-to-action Button */}
						<div className="text-center">
							<Link
								href="https://cal.com/orra-dev/agent-apps-to-prod"
								className="bg-black
            text-white py-3 px-6 rounded-lg inline-block transition-all duration-300 shadow-md
            transform hover:scale-[1.05]"
							>
								Talk to us →
							</Link>
						</div>

						</div>{/* End Service Cards Grid */}
					</div>
				</section>
			</div>
		</div>
	)
}
