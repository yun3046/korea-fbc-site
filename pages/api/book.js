// This API route is a placeholder for handling booking inquiries.
// In production, replace this with logic to store the data in a database
// (e.g. Supabase, Google Sheets) and send an email notification.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const data = req.body;
  console.log('Received booking inquiry:', data);

  // TODO: Save data to database and send confirmation email.

  return res.status(200).json({ message: 'Booking inquiry received' });
}