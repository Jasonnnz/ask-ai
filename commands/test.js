require('dotenv').config();

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Replies w/ testing')
    .addStringOption(option => option.setName('query').setDescription('Query to ChatGPT').setRequired(true)),
    async execute(interaction) {
      console.log({ options: interaction.options.getString('query') });
      await interaction.reply({ content: 'testing', emphemeral: true });
    },
};