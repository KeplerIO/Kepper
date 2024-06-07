import config from "../config.json";
import Discord from "discord.js";

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });

client.once(Discord.Events.ClientReady, (readyClient) => {
	console.log(`Discord client ready. Logged in as ${readyClient.user.tag}`);
});

client.login(config.auth.BOT_TOKEN);
