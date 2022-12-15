require('dotenv').config();

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Replies w/ TEST'),
    async execute(interaction) {
      await interaction.reply({ content: 'TEST', emphemeral: true });
    },
};