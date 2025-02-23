import Airtable from "airtable";

// handle /api/waitlist/registration
export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).send({ message: 'Only POST requests allowed' })
	}
	
	try {
		const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN })
			.base(process.env.AIRTABLE_LEADS_BASE_ID);
		
		const { body } = req
		const { email } = body
		
		await base(process.env.AIRTABLE_LEADS_TABLE_ID).create([
			{
				fields: {
					Email: email,
				}
			}
		]);
		res.status(201).json({ data: { email } })
	} catch (error) {
		console.log('error', error);
		return res.status(500).json({ error: error.message, code: error.code })
	}
}
