import config from "../config.json" with { type: "json" };
import discord from "discord.js";

const client = new discord.Client({ intents: [discord.GatewayIntentBits.Guilds] });

client.once(discord.Events.ClientReady, (readyClient) => {
	console.log(`Discord client ready. Logged in as ${readyClient.user.tag}`);
});

client.login(config.auth.BOT_TOKEN);
