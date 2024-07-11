import React from 'react'
import { Container } from '@/components/orra/landing/Container'

export function OriginStory() {
	return (
		<section
			aria-label="Marketing tailored for your podcasts"
			className="text-center relative overflow-hidden bg-gray-100 py-16"
		>
			<Container className="relative">
				<div className="mx-auto max-w-2xl text-left py-4 mb-10">
					<h2 className="font-display text-3xl tracking-tight text-gray-800 sm:text-4xl">
						Orra&apos;s Back Story 🔮
					</h2>
					<p className="text-gray-800 text-md mb-4 mt-6">
						Every new product has a good back story.
					</p>
					<p className="text-gray-800 text-md mb-4">
						Orra began life as a podcasts marketing platform. You might be wondering how we pivoted to an Agentic app
						development platform?!
					</p>
					<p className="text-gray-800 text-md mb-4">
						The answer lies in our AI-first approach. We needed a Multi-Agent solution using LLMs to help us analyse and
						classify Gigabytes of unstructured internet text. But, then we got stuck, spending over a month in the weeds
						without delivering anything useful. Finally, we got something shipped!
					</p>
					<p className="text-gray-800 text-md mb-4">
						In the process, we created a conceptual framework for building, orchestrating, and deploying Agents. This
						frustration sparked an idea we couldn&apos;t shake: turn this framework into a product!
					</p>
					<p className="text-gray-800 text-md mb-4 font-semibold">
						Our CTO, with 3+ years building developer-first tools in the Kubernetes space, saw the potential. We could
						leverage this expertise to solve common pain points: broken reliability, troubleshooting nightmares, and
						sky-high API costs during development.
					</p>
					<p className="text-gray-800 text-md mb-4">
						So, that&apos;s how we got to now.
					</p>
					<p className="text-gray-800 text-md mb-4">
						Join our waitlist to stay in the loop. Orra for developers is coming soon.
					</p>
					<p className="text-gray-800 text-md mb-4">
						<span className="font-semibold">Aisha and Ezo</span>
						<br/>
						<span className="text-gray-800 text-md">Orra Co-founders</span>
					</p>
					<p className="tracking-tight text-gray-800 text-md mb-4 font-medium">
						May 2024
					</p>
				</div>
			</Container>
		</section>
	)
}
