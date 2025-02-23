import React from "react";

export function Footer() {
	return (
		<footer className="bg-gray-900">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<p className="text-center text-sm/6 text-gray-400">
					Made with 💝 by Engineers for Engineers 🦸‍♂️<br/>
					&copy; {new Date().getFullYear()} ORRA SOFTWARE
				</p>
			</div>
		</footer>
	)
}
