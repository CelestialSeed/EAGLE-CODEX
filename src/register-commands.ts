import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';

config();

const commands = [
  {
    name: 'ping',
    description: 'Returns Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN!);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID!),
      { body: commands },
    );

    console.log('Commands registered successfully.');
  } catch (error) {
    console.error('Error registering commands:', error);
  }
})();
