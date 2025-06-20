require('dotenv/config');
const {
  Client,
  GatewayIntentBits,
  MessageFlags,
  TextDisplayBuilder,
  ContainerBuilder,
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const allowedChannelId = '1370914927505575936';

client.on('ready', () => {
  console.log(`${client.user.username} is online.`);
});

client.on('messageCreate', async (message) => {
  if (!message.guild || message.author.bot) return;

  if (!message.content.startsWith('!')) return;

  if (message.channel.id !== allowedChannelId) {
    return message.reply({
      content: `🚫 This command is only allowed in <#${allowedChannelId}>.`,
      allowedMentions: { repliedUser: false },
    });
  }

  const command = message.content.slice(1).toLowerCase();

  if (command === 'help') {
    const container = new ContainerBuilder()
      .setAccentColor(0x6aa8fd)
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent('📖 **Available Mental Health Keywords**'),
        new TextDisplayBuilder().setContent(
          'Type any of the following **words** with the prefix `!` to get helpful guidance:'
        ),
        new TextDisplayBuilder().setContent(
          `🔹 \`!periodpain\` – Relief for menstrual cramps  
🔹 \`!stress\` – Tips to reduce tension  
🔹 \`!anxiety\` – Calming techniques  
🔹 \`!loneliness\` – Coping with feeling alone  
🔹 \`!overwhelm\` – Handling too much at once`
        ),
        new TextDisplayBuilder().setContent('_No slashes needed, just prefix `!`._')
      );
    return message.channel.send({ components: [container], flags: MessageFlags.IsComponentsV2 });
  }

  if (command === 'periodpain') {
    const container = new ContainerBuilder()
      .setAccentColor(0xff5f9d)
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent('🩸 **Period Pain – Understanding & Gentle Care**'),
        new TextDisplayBuilder().setContent(
          'Many experience menstrual pain ranging from mild cramps to severe discomfort. You’re not alone.'
        ),
        new TextDisplayBuilder().setContent(
          '🌡️ **Warmth helps:** Heating pads or warm baths can ease muscle tension.'
        ),
        new TextDisplayBuilder().setContent(
          '🧘 **Movement & breathing:** Gentle walks and mindful breathing reduce cramps.'
        ),
        new TextDisplayBuilder().setContent(
          '💊 **Mindful medication:** Ibuprofen may help, but rest is important too.'
        ),
        new TextDisplayBuilder().setContent(
          '🥗 **Nutrition:** Magnesium-rich foods and calming teas provide support.'
        )
      );
    return message.channel.send({ components: [container], flags: MessageFlags.IsComponentsV2 });
  }

  if (command === 'stress') {
    const container = new ContainerBuilder()
      .setAccentColor(0x7ec8e3)
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent('🧠 **Stress – When Everything Feels Too Much**'),
        new TextDisplayBuilder().setContent(
          'Stress is natural, but chronic stress can wear you down.'
        ),
        new TextDisplayBuilder().setContent(
          '💤 **Take breaks:** Short rests and breathing help reset your mind.'
        ),
        new TextDisplayBuilder().setContent(
          '🎧 **Music & quiet:** Calming songs or silence soothe thoughts.'
        ),
        new TextDisplayBuilder().setContent(
          '📝 **Express yourself:** Writing can relieve mental pressure.'
        )
      );
    return message.channel.send({ components: [container], flags: MessageFlags.IsComponentsV2 });
  }

  if (command === 'anxiety') {
    const container = new ContainerBuilder()
      .setAccentColor(0xa177ff)
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent('😰 **Anxiety – First Aid for Racing Thoughts**'),
        new TextDisplayBuilder().setContent(
          'Anxiety feels overwhelming but there are ways to calm down.'
        ),
        new TextDisplayBuilder().setContent(
          '🌬️ **Breathing:** Slow breaths in and out ease tension.'
        ),
        new TextDisplayBuilder().setContent(
          '🪑 **Grounding:** Name things you see, feel, hear to center yourself.'
        ),
        new TextDisplayBuilder().setContent(
          '🤝 **Reach out:** Talk to someone trusted.'
        )
      );
    return message.channel.send({ components: [container], flags: MessageFlags.IsComponentsV2 });
  }

  if (command === 'loneliness') {
    const container = new ContainerBuilder()
      .setAccentColor(0xf9a602)
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent('🤍 **Loneliness – You Are Not Alone**'),
        new TextDisplayBuilder().setContent(
          'Feeling alone is human but you don’t have to face it alone.'
        ),
        new TextDisplayBuilder().setContent(
          '📞 **Reach out:** Even a small message can create connection.'
        ),
        new TextDisplayBuilder().setContent(
          '🐾 **Nature & pets:** Help soothe feelings.'
        ),
        new TextDisplayBuilder().setContent(
          '🧡 **Small steps:** Every little effort counts.'
        )
      );
    return message.channel.send({ components: [container], flags: MessageFlags.IsComponentsV2 });
  }

  if (command === 'overwhelm') {
    const container = new ContainerBuilder()
      .setAccentColor(0xe57373)
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent('📚 **Overwhelm – When It’s All Too Much**'),
        new TextDisplayBuilder().setContent(
          'Feeling overwhelmed is normal; you’re human, not failing.'
        ),
        new TextDisplayBuilder().setContent(
          '🧩 **Break it down:** Prioritize and ask for help where you can.'
        ),
        new TextDisplayBuilder().setContent(
          '⏳ **Pause:** Taking breaks is ok.'
        ),
        new TextDisplayBuilder().setContent(
          '🫂 **Speak up:** Saying “I can’t right now” is brave.'
        )
      );
    return message.channel.send({ components: [container], flags: MessageFlags.IsComponentsV2 });
  }
});

client.login(process.env.TOKEN);
