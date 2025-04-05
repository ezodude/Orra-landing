import React from "react";
import Link from "next/link";
import { Container } from "@/components/orra/landing/Container";

const APP_HOST = process?.env?.NEXT_PUBLIC_APP_HOST;

export function Header() {
	return (
		<header className="py-7 bg-rose-50">
			<Container>
				<nav className="relative z-50 flex flex-col sm:flex-row justify-between items-center gap-y-3">
					<div className="flex items-center gap-x-4">
						<Link
							href={APP_HOST}
							className="font-display text-2xl font-medium tracking-tight text-gray-900 sm:text-2xl"
							aria-label="orra"
						>
							🪡 orra
						</Link>
						<Link
							href="https://github.com/orra-dev/orra"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[rgb(var(--magenta))] transition-colors"
						>
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
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
							<span className="sr-only">GitHub</span>
						</Link>
					</div>
					<div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-y-3 gap-x-4">
						<Link
							href="https://cal.com/orra-dev/agent-apps-to-prod"
							className="mt-4 sm:mt-0 inline-block bg-black text-white text-sm font-semibold py-2 px-5 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out text-center"
						>
							Book Your Demo
						</Link>
						<Link
							href="https://blog.orra.dev"
							className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:text-[rgb(var(--magenta))] hover:border-[rgb(var(--magenta))] transition-colors text-center"
						>
							Read our engineering blog
						</Link>
					</div>
				</nav>
			</Container>
		</header>
	);
}
