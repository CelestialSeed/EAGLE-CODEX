export default async function handler(req, res) {
  if (req.method === 'HEAD') {
    // Notion sends a HEAD request to verify the webhook URL
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    // This is where event payloads from Notion will be sent
    const event = req.body;
    console.log('Notion Event:', JSON.stringify(event));

    // You can trigger automations here (e.g., send to Discord, Zapier, etc.)

    return res.status(200).json({ success: true });
  }

  // Block all other methods
  res.setHeader('Allow', ['HEAD', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
