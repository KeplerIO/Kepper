import config from "../config.json";
import Discord from "discord.js";

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });

console.log("Hello, Kepper!");
