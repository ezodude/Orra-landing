export async function upsertWaitlistRegistration(supabase, email){
	const { data, error }  = await supabase
		.from('waitlist')
		.upsert(
			{
				email: email,
			}, { onConflict: 'email', defaultToNull: true})
		.select();
	
	console.log('data', data)
	
	return {
		data,
		error: error ? {
			message: error.message,
			code: "UpsertOrraWaitlistRegistrationFail"
		} : null
	};
}
