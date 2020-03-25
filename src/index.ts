import Discord, { TextChannel, Message } from 'discord.js';
import {
  botToken,
  infectedReact,
  infectionReact,
  servers
} from './config';
import { InfectedManager } from './infectedManager';

async function main() {
  const client = new Discord.Client();
  const infectedManager = new InfectedManager();
  client.login(botToken).catch((err: Error) => console.log(err.toString()));

  client.on('message', async (message: any) => {
    // bail out on non-infected server
    if (!effectedServer(message)) {
      return;
    }
    const userID = message.author.id;

    // react to infected folks or 
    if (infectedManager.isInfected(userID)) {
      message.react(infectedReact);

      const channel: any = await client.channels.fetch(message.channel.id);

      const history = await channel.messages.fetch({ limit: 2 });
      
      console.log(history);

    } else {
      const infected = infectedManager.handOfGod(userID);
      if (infected) {
        message.react(infectionReact)
        message.react(infectedReact);
      }
    }
  });
}

function effectedServer(message: any) {
  return servers.includes(message.guild.id);
}

main();