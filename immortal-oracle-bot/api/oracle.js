// File: api/oracle.js

import { verifyKey } from 'discord-interactions';

const DISCORD_PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const signature = req.headers['x-signature-ed25519'];
  const timestamp = req.headers['x-signature-timestamp'];

  const rawBody = await getRawBody(req);

  const isValid = verifyKey(rawBody, signature, timestamp, DISCORD_PUBLIC_KEY);

  if (!isValid) {
    return res.status(401).send('Invalid request signature');
  }

  const interaction = JSON.parse(rawBody);

  // Required by Discord to verify the endpoint
  if (interaction.type === 1) {
    return res.status(200).json({ type: 1 });
  }

  // Handle /ping command
  if (interaction.type === 2 && interaction.data.name === 'ping') {
    return res.status(200).json({
      type: 4,
      data: {
        content: '🜂 Oracle Breath Received. Connection Alive.',
      },
    });
  }

  return res.status(400).send('Unhandled interaction type');
}

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', err => reject(err));
  });
}
