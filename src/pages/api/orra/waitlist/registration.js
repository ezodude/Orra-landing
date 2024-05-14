import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { upsertWaitlistRegistration } from "@/lib/db/orra/waitlist-server";

// handle /api/waitlist/registration
export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).send({ message: 'Only POST requests allowed' })
	}
	
	const supabase = createPagesServerClient({ req, res }, {
		supabaseUrl: process.env.SUPABASE_SERVICE_URL,
		supabaseKey: process.env.SUPABASE_SERVICE_KEY
	})
	
	const { body } = req
	const { email } = body
	
	const { error } = await upsertWaitlistRegistration(supabase, email)
	console.log('error', error)
	if (error && error.code) {
		return res.status(500).json({ error: error.message, code: error.code })
	}
	
	res.status(201).json({
		data: { email }
	})
}
