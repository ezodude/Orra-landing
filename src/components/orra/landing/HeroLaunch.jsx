import React, { useState } from "react";
import Link from "next/link";
import Error from "@/components/alerts/error";
import Info from "@/components/alerts/info";

export function HeroLaunch() {
	const [ showWaitlistForm, setShowWaitlistForm ] = useState(false);
	const [ successMessage, setSuccessMessage ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('');
	
	const handleSubmit = async (event) => {
		event.preventDefault()
		
		const data = {
			email: event.target.email.value.trim()
		}
		
		// Send the data to the server in JSON format.
		const JSONData = JSON.stringify(data)
		
		// API endpoint where we send form data.
		const endpoint = '/api/orra/waitlist/registration'
		
		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONData,
		}
		
		const response = await fetch(endpoint, options)
		if (response.status === 500) {
			return setErrorMessage("Apologies we could not sign you up to the waitlist at this time, please try again later.");
		}
		return setSuccessMessage("Thanks for signing up! We'll get in touch very soon.")
	}
	
	return (
		<div>
			<div className="text-center relative overflow-hidden bg-rose-50">
				<div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:px-8">
					<div className="px-6 lg:px-0">
						<div className="mx-auto max-w-4xl">
							<div className="max-w-4xl">
								<Link href="https://tinyurl.com/orra-launch-blog-post" target="_blank">
                  <span
	                  className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-4 hover:bg-purple-100 transition-colors duration-200">
                    Learn why we built orra →
                  </span>
								</Link>
								<h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tighter max-w-4xl">
									Production-Ready<br/>
									Multi-Agent Applications
								</h1>
							</div>
							<div className="mt-6 mx-auto max-w-4xl md:text-center mb-2">
								<p
									className="mx-auto max-w-3xl sm:text-xl text-lg font-medium tracking-tighter leading-8 text-gray-800">
									Move beyond simple agents.<br/>
									Build reliable, intelligent systems that handle real-world complexity.
								</p>
							</div>
							<div className="mt-6 mx-auto max-w-4xl md:text-center mb-2">
								<Link href="https://github.com/orra-dev/orra" className="">
									<button
										type="button"
										className="inline-flex items-center gap-x-2 rounded-md bg-black px-12 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-white/10"
									>
										TRY ORRA NOW
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
								{/* Secondary CTA with Form */}
								<div className="mt-6 text-center">
									<button
										type="button"
										onClick={() => setShowWaitlistForm(!showWaitlistForm)}
										className="inline-flex items-center gap-x-2 rounded-md bg-white px-8 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
									>
										Join Cloud Waitlist
										<svg
											className={`h-5 w-5 transition-transform ${showWaitlistForm ? 'rotate-180' : ''}`}
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 9l-7 7-7-7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
									{showWaitlistForm && !successMessage && (
										<form
											onSubmit={handleSubmit}
											className="mx-auto mt-4 flex max-w-md gap-x-4 justify-center"
										>
											<label htmlFor="email" className="sr-only">
												Email address
											</label>
											<input
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												required
												className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
												placeholder="Enter your email"
											/>
											<button
												type="submit"
												className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
											>
												Join waitlist
											</button>
										</form>
									)}
									{showWaitlistForm && (successMessage || errorMessage) && (
										<div className="mt-3 max-w-md mx-auto">
											<Error errorMessage={errorMessage}/>
											<Info
												info={successMessage}
												callback={() => {
													setSuccessMessage("");
													setShowWaitlistForm(false); // Optional: hide form on success
												}}
											/>
										</div>
									)}
								</div>
								<section className="py-8 px-8">
									<div className="container mx-auto px-4 text-center">
										<div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8"></div>
									</div>
									
									{/* Section Header */}
									<div className="text-center mb-8">
										<h2 className="text-3xl font-extrabold mb-2 tracking-tighter text-gray-900">Get Started</h2>
										<p className="text-lg tracking-tight text-gray-700">Come and talk to us about your use case</p>
									</div>
									
									{/* Content Card */}
									<div className="max-w-xl mx-auto border border-gray-600 rounded-lg shadow-md p-8">
										{/* Card Header */}
										<div className="text-center mb-6">
											<h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Agent Infrastructure 🌐</h3>
											<p className="text-gray-600">
												Collaborate with the Orra team to design, implement, and deploy production-grade multi-agent systems tailored
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
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
