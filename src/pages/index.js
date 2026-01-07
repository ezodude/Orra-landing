import Head from 'next/head'
import { Navigation } from '@/components/orra/redesign/Navigation'
import { Hero } from '@/components/orra/redesign/Hero'
import { Problem } from '@/components/orra/redesign/Problem'
import { Solution } from '@/components/orra/redesign/Solution'
import { Services } from '@/components/orra/redesign/Services'
import { Footer } from '@/components/orra/redesign/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪡</text></svg>"
				/>
				<title>Build Human-Guided AI Agents That Scale With Trust | Orra</title>
				<meta
					name="description"
					content="Deploy production-ready AI agents in weeks, not years. We help you build human-guided agent systems where you direct AI to accomplish your goals. From the team that built Orra."
				/>
			</Head>
			<div className="flex flex-col min-h-screen">
				<Navigation />
				<main className="flex-grow">
					<Hero />
					<Problem />
					<Solution />
					<Services />
				</main>
				<Footer />
			</div>
		</>
	)
}
