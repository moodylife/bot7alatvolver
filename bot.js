client.on('ready', () => {
});
const devs = ["502799582045011970"]; /// الاي دي حقك
const karzoprfix = ["-"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
 
  if (message.content.startsWith(karzoprfix + 'ply')) {/////بلاينق
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}** Done Sir`)
  } else
  if (message.content.startsWith(karzoprfix + 'wt')) {////واتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}** Done Sir`)
  } else
  if (message.content.startsWith(karzoprfix + 'st')) {////ستريمنق
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  } else
  if (message.content.startsWith(karzoprfix + 'ls')) {/////////ليسننق
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}** Done Sir`)
client.user.setStatus("dnd")
  }
});
client.login(process.env.BOT_TOKEN);
