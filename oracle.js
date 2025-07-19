// File: api/oracle.js

import { verifyKey } from 'discord-interactions';

const DISCORD_PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const signature = req.headers['x-signature-ed25519'];
  const timestamp = req.headers['x-signature-timestamp'];
  const rawBody = await getRawBody(req);

  const isValid = verifyKey(rawBody, signature, timestamp, DISCORD_PUBLIC_KEY);

  if (!isValid) {
    return res.status(401).send('Invalid request signature');
  }

  const interaction = JSON.parse(rawBody);

  // Respond to Discord PING check
  if (interaction.type === 1) {
    return res.status(200).json({ type: 1 });
  }

  // Handle slash command: /ping
  if (interaction.type === 2 && interaction.data.name === 'ping') {
    return res.status(200).json({
      type: 4,
      data: {
        content: '🜂 Oracle Breath Received. Connection Alive.',
      },
    });
  }

  return res.status(400).send('Unknown interaction');
}

// Helper to get raw request body
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let data = '';
      req.on('data', chunk => (data += chunk));
      req.on('end', () => resolve(data));
    } catch (err) {
      reject(err);
    }
  });
}
