import Image from 'next/image';

export default function HeroDiagram() {
	return (
		<div className="flex justify-center items-center py-8 md:py-12 bg-rose-50">
			<div className="w-full max-w-3xl px-4">
				<div className="bg-white rounded-xl shadow-lg p-2 md:p-4">
					<Image
						src="/images/orra-diagram.png" // or .webp if available
						alt="Orra architecture diagram showing how Orra connects SDKs, agents, and tools to power robust AI applications"
						width={1200}
						height={500}
						className="rounded-lg w-full h-auto object-contain"
						priority
						sizes="(max-width: 768px) 100vw, 700px"
					/>
					{/* Optional Caption */}
					<p className="text-center text-sm text-gray-500 mt-2">
						Orra orchestrates agents, tools, and your stack for resilient AI workflows.
					</p>
				</div>
			</div>
		</div>
	);
}
