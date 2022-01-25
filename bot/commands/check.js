const log = require('../../schemas/log.js');
const {MessageEmbed, Permissions} = require('discord.js');

module.exports = {
    active: true,
    name: 'check',
    description: lang => lang.get('checkDescription'),
    aliases: ['modlogs', 'chk'],
    usage: lang => [lang.get('checkUsage')],
    example: ['@LordHawk#0001 mute 15d12h30m30s'],
    cooldown: 5,
    categoryID: 3,
    args: true,
    guilOnly: true,
    execute: async function(message, args){
        const channelLanguage = message.client.langs[message.client.guildData.get(message.guild.id).language];
        if(!message.guild.me.permissionsIn(message.channel).has(Permissions.FLAGS.EMBED_LINKS)) return message.reply(channelLanguage.get('botEmbed'));
        if(!message.guild.me.permissionsIn(message.channel).has(Permissions.FLAGS.ADD_REACTIONS)) return message.reply(channelLanguage.get('botReactions'));
        if(!['all', 'warn', 'mute', 'kick', 'ban'].includes(args[1])) return message.reply(channelLanguage.get('invArgs', [message.client.guildData.get(message.guild.id).prefix, this.name, this.usage(channelLanguage)]));
        const id = args[0].match(/^(?:<@)?!?(\d{17,19})>?$/)?.[1];
        if(!id) return message.reply(channelLanguage.get('invArgs', [message.client.guildData.get(message.guild.id).prefix, this.name, this.usage(channelLanguage)]));
        const filter = args[2] ? (Date.now() - (((parseInt(args[2].match(/(\d+)d/)?.[1], 10) * 86400000) || 0) + ((parseInt(args[2].match(/(\d+)h/)?.[1], 10) * 3600000) || 0) + ((parseInt(args[2].match(/(\d+)m/)?.[1], 10) * 60000) || 0) + ((parseInt(args[2].match(/(\d+)s/)?.[1], 10) * 1000) || 0))) : 0;
        const logDocs = await log.find({
            guild: message.guild.id,
            target: id,
            type: (args[1] === 'all') ? {$ne: args[1]} : {$eq: args[1]},
            timeStamp: {$gte: filter},
        }).sort({timeStamp: -1});
        if(!logDocs.length) return message.reply(channelLanguage.get('invLogs'));
        const discordMember = await message.guild.members.fetch(id).catch(() => null);
        const discordUser = discordMember?.user ?? await message.client.users.fetch(id).catch(() => null);
        const formatDuration = (ms) => {
            let d = Math.floor(ms / 86400000);
            let h = Math.floor((ms % 86400000) / 3600000);
            let m = Math.floor((ms % 3600000) / 60000);
            return [d, h, m];
        }
        const pageSize = 10;
        const embed = new MessageEmbed()
            .setColor(discordMember?.displayColor ?? message.guild.me.displayColor ?? 0x8000ff)
            .setAuthor({
                name: discordUser?.tag ?? channelLanguage.get('checkEmbedAuthor'),
                iconURL: discordUser?.displayAvatarURL({dynamic: true}),
            })
            .setTimestamp()
            .setFooter({text: channelLanguage.get('checkEmbedFooter', [logDocs.length])})
            .setDescription(`${['all', 'warn'].includes(args[1]) ? `Warns: \`${logDocs.filter(e => (e.type === 'warn')).length}\`\n` : ''}${['all', 'mute'].includes(args[1]) ? `Mutes: \`${logDocs.filter(e => ((e.type === 'mute') && !e.removal)).length}\`\nUnmutes: \`${logDocs.filter(e => ((e.type === 'mute') && e.removal)).length}\`\n` : ''}${['all', 'kick'].includes(args[1]) ? `Kicks: \`${logDocs.filter(e => (e.type === 'kick')).length}\`\n` : ''}${['all', 'ban'].includes(args[1]) ? `Bans: \`${logDocs.filter(e => ((e.type === 'ban') && !e.removal)).length}\`\nUnbans: \`${logDocs.filter(e => ((e.type === 'ban') && e.removal)).length}\`\n` : ''}`)
            .addFields(logDocs.slice(0, pageSize).map(e => ({
                name: channelLanguage.get('checkEmbedCaseTitle', [e.id]),
                value: channelLanguage.get('checkEmbedCaseValue', [e, e.duration && formatDuration(e.duration.getTime() - e.timeStamp.getTime())]),
            })));
        let msg = await message.reply({embeds: [embed]});
        if(logDocs.length <= pageSize) return;
        await msg.react('⬅');
        await msg.react('➡');
        let col = msg.createReactionCollector({
            filter: (r, u) => (['➡', '⬅'].includes(r.emoji.name) && (u.id === message.author.id)),
            time: 600000,
        });
        let page = 0;
        col.on('collect', async r => {
            await r.users.remove(message.author);
            if(r.emoji.name === '➡'){
                if(!logDocs.slice((page + 1) * pageSize).length) return;
                page++;
            }
            else{
                if(!page) return;
                page--;
            }
            embed.setFields(logDocs.slice(page * pageSize, (page + 1) * pageSize).map(e => ({
                name: channelLanguage.get('checkEmbedCaseTitle', [e.id]),
                value: channelLanguage.get('checkEmbedCaseValue', [e, e.duration && formatDuration(e.duration.getTime() - e.timeStamp.getTime())]),
            })));
            await msg.edit({embeds: [embed]});
        });
        col.on('end', () => msg.reactions.removeAll());
    },
    executeSlash: async function(interaction, args){
        const channelLanguage = message.client.langs[message.client.guildData.get(message.guild.id).language];
        if(!message.guild.me.permissionsIn(message.channel).has(Permissions.FLAGS.EMBED_LINKS)) return message.reply(channelLanguage.get('botEmbed'));
        if(!message.guild.me.permissionsIn(message.channel).has(Permissions.FLAGS.ADD_REACTIONS)) return message.reply(channelLanguage.get('botReactions'));
        if(!['all', 'warn', 'mute', 'kick', 'ban'].includes(args[1])) return message.reply(channelLanguage.get('invArgs', [message.client.guildData.get(message.guild.id).prefix, this.name, this.usage(channelLanguage)]));
        const id = args[0].match(/^(?:<@)?!?(\d{17,19})>?$/)?.[1];
        if(!id) return message.reply(channelLanguage.get('invArgs', [message.client.guildData.get(message.guild.id).prefix, this.name, this.usage(channelLanguage)]));
        const filter = args[2] ? (Date.now() - (((parseInt(args[2].match(/(\d+)d/)?.[1], 10) * 86400000) || 0) + ((parseInt(args[2].match(/(\d+)h/)?.[1], 10) * 3600000) || 0) + ((parseInt(args[2].match(/(\d+)m/)?.[1], 10) * 60000) || 0) + ((parseInt(args[2].match(/(\d+)s/)?.[1], 10) * 1000) || 0))) : 0;
        const logDocs = await log.find({
            guild: message.guild.id,
            target: id,
            type: (args[1] === 'all') ? {$ne: args[1]} : {$eq: args[1]},
            timeStamp: {$gte: filter},
        }).sort({timeStamp: -1});
        if(!logDocs.length) return message.reply(channelLanguage.get('invLogs'));
        const discordMember = await message.guild.members.fetch(id).catch(() => null);
        const discordUser = discordMember?.user ?? await message.client.users.fetch(id).catch(() => null);
        const formatDuration = (ms) => {
            let d = Math.floor(ms / 86400000);
            let h = Math.floor((ms % 86400000) / 3600000);
            let m = Math.floor((ms % 3600000) / 60000);
            return [d, h, m];
        }
        const pageSize = 10;
        const embed = new MessageEmbed()
            .setColor(discordMember?.displayColor ?? message.guild.me.displayColor ?? 0x8000ff)
            .setAuthor({
                name: discordUser?.tag ?? channelLanguage.get('checkEmbedAuthor'),
                iconURL: discordUser?.displayAvatarURL({dynamic: true}),
            })
            .setTimestamp()
            .setFooter({text: channelLanguage.get('checkEmbedFooter', [logDocs.length])})
            .setDescription(`${['all', 'warn'].includes(args[1]) ? `Warns: \`${logDocs.filter(e => (e.type === 'warn')).length}\`\n` : ''}${['all', 'mute'].includes(args[1]) ? `Mutes: \`${logDocs.filter(e => ((e.type === 'mute') && !e.removal)).length}\`\nUnmutes: \`${logDocs.filter(e => ((e.type === 'mute') && e.removal)).length}\`\n` : ''}${['all', 'kick'].includes(args[1]) ? `Kicks: \`${logDocs.filter(e => (e.type === 'kick')).length}\`\n` : ''}${['all', 'ban'].includes(args[1]) ? `Bans: \`${logDocs.filter(e => ((e.type === 'ban') && !e.removal)).length}\`\nUnbans: \`${logDocs.filter(e => ((e.type === 'ban') && e.removal)).length}\`\n` : ''}`)
            .addFields(logDocs.slice(0, pageSize).map(e => ({
                name: channelLanguage.get('checkEmbedCaseTitle', [e.id]),
                value: channelLanguage.get('checkEmbedCaseValue', [e, e.duration && formatDuration(e.duration.getTime() - e.timeStamp.getTime())]),
            })));
        let msg = await message.reply({embeds: [embed]});
        if(logDocs.length <= pageSize) return;
        await msg.react('⬅');
        await msg.react('➡');
        let col = msg.createReactionCollector({
            filter: (r, u) => (['➡', '⬅'].includes(r.emoji.name) && (u.id === message.author.id)),
            time: 600000,
        });
        let page = 0;
        col.on('collect', async r => {
            await r.users.remove(message.author);
            if(r.emoji.name === '➡'){
                if(!logDocs.slice((page + 1) * pageSize).length) return;
                page++;
            }
            else{
                if(!page) return;
                page--;
            }
            embed.setFields(logDocs.slice(page * pageSize, (page + 1) * pageSize).map(e => ({
                name: channelLanguage.get('checkEmbedCaseTitle', [e.id]),
                value: channelLanguage.get('checkEmbedCaseValue', [e, e.duration && formatDuration(e.duration.getTime() - e.timeStamp.getTime())]),
            })));
            await msg.edit({embeds: [embed]});
        });
        col.on('end', () => msg.reactions.removeAll());
    },
    slashOptions: [
        {
            type: 'USER',
            name: 'user',
            description: 'The user to have its cases checked',
            required: true,
        },
        {
            type: 'STRING',
            name: 'case_type',
            description: 'The type of the cases to be checked',
            required: true,
            choices: [
                {
                    name: 'Check cases of all types',
                    value: 'all',
                },
                {
                    name: 'Warn cases',
                    value: 'warn',
                },
                {
                    name: 'Mute cases',
                    value: 'mute',
                },
                {
                    name: 'Kick cases',
                    value: 'kick',
                },
                {
                    name: 'Ban cases',
                    value: 'ban',
                },
            ],
        },
        {
            type: 'INTEGER',
            name: 'in_the_last_x_hours',
            description: 'How many hours ago at max to check the cases',
            required: false,
            minValue: 1,
            maxValue: 4096,
        },
        {
            type: 'INTEGER',
            name: 'in_the_last_x_days',
            description: 'How many days ago at max to check the cases',
            required: false,
            minValue: 1,
            maxValue: 4096,
        },
        {
            type: 'INTEGER',
            name: 'in_the_last_x_days',
            description: 'How many days ago at max to check the cases',
            required: false,
            minValue: 1,
            maxValue: 4096,
        },
        {
            type: 'INTEGER',
            name: 'in_the_last_x_days',
            description: 'How many days ago at max to check the cases',
            required: false,
            minValue: 1,
            maxValue: 4096,
        },
    ]
};