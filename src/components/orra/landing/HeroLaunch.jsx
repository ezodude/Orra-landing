import React, { useState } from "react";
import Error from "@/components/alerts/error";
import Info from "@/components/alerts/info";

export function HeroLaunch() {
	const [ successMessage, setSuccessMessage ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('');
	
	const handleSubmit = async (event) => {
		event.preventDefault()
		
		const data = {
			email: event.target.email.value.trim()
		}
		
		console.log('data', data)
		
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
		
		const result = await response.json()
		
		if (response.status === 500) {
			if (result.code === "UpsertOrraWaitlistRegistrationFail") {
				return setErrorMessage("Apologies we could not sign you up to the waitlist at this time, please try again later.");
			}
			return setErrorMessage(result.error.message);
		}
		
		return setSuccessMessage("Thanks for signing up to our waitlist! We'll get in touch very soon.")
	}
	
	return (
		<div>
			<div className="text-center relative overflow-hidden bg-rose-50">
				<div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:px-8">
					<div className="px-6 lg:px-0">
						<div className="mx-auto max-w-4xl">
							<div className="max-w-4xl">
								<h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tighter max-w-4xl">
									Production-Ready<br/>
									Multi-Agent Applications
								</h1>
							</div>
							<div className="mt-6 mx-auto max-w-4xl md:text-center mb-2">
								<p className="mx-auto max-w-3xl sm:text-xl text-lg font-medium tracking-tighter leading-8 text-gray-800">
									Move beyond simple agents.<br/>
									Build reliable, intelligent systems that handle real-world complexity.
								</p>
							</div>
							<Error errorMessage={errorMessage}/>
							<Info info={successMessage} callback={() => {
								setSuccessMessage("")
							}}/>
							
							{!successMessage &&
								<form
									onSubmit={handleSubmit}
									action="#"
									className="mx-auto mt-4 flex max-w-md gap-x-4">
									<label htmlFor="email" className="sr-only">
										Email address
									</label>
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
										placeholder="Enter your email"
									/>
									<button
										type="submit"
										className="flex-none rounded-md bg-yellow-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
									>
										Join the waitlist
									</button>
								</form>}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
