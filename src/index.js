import config from "../config.json" with { type: "json" };
import discord from "discord.js";

const client = new discord.Client({
	intents: Object.keys(discord.GatewayIntentBits).map((x) => { return discord.GatewayIntentBits[x]; })
});

client.login(config.auth.BOT_TOKEN);

client.once(discord.Events.ClientReady, (readyClient) => {
	console.log(`Discord client ready. Logged in as ${readyClient.user.tag}`);
});

client.on("messageCreate", (msg) => {
	console.log(`Message sender ID: ${msg.author.id}`);

	if (msg.author.bot) {
		return;	
	}

	if(msg.mentions.users.has(client.user.id)) {
		msg.reply("Beep").then(() => console.log(`Replied to message "${msg.content}"`)).catch(console.error);
	}

});
