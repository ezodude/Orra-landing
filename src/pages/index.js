import Head from 'next/head'
import { Footer } from '@/components/orra/landing/Footer'
import { Header } from '@/components/orra/landing/Header'
import { HeroLaunch } from '@/components/orra/landing/HeroLaunch'

export default function Home() {
	return (
		<>
			<Head>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪡</text></svg>"
				/>
				<title>Orra - make your ai agents work</title>
				<meta
					name="description"
					content="Use Orra to build reliable and simple to customise AI Multi-Agent workflows."
				/>
			</Head>
			<div className="flex flex-col min-h-screen">
				<main className="bg-gray-900 flex-grow">
					<Header/>
					<HeroLaunch/>
					<Footer/>
				</main>
			</div>
		</>
	)
}
